import { motion } from 'framer-motion';
import { Gauge } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          icon={Gauge}
          title="Technical depth across the stack"
          description="From layer-2 switching to containerised services and AI-assisted automation."
        />

        <div className="mt-14 grid gap-x-12 gap-y-7 lg:grid-cols-2">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={0.04 * index}>
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold tabular-nums text-brand-600 dark:text-brand-300">
                    {skill.level}%
                  </span>
                </div>

                <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-sky-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.1, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
