import {
  Bot,
  Boxes,
  Cloud,
  Cpu,
  Network,
  Router,
  Server,
} from 'lucide-react';

export const aboutText =
  'I specialize in networking, MikroTik, ISP infrastructure, automation, AI integration, servers, smart systems and enterprise IT solutions.';

export const aboutSecondary =
  'From a single office access point to a multi-site ISP backbone, I design networks that stay online, stay secure and stay easy to operate. Every deployment is documented, monitored and handed over with training so your team is never dependent on guesswork.';

export const expertise = [
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Structured cabling, switching and routing designed for growth.',
  },
  {
    icon: Router,
    title: 'MikroTik',
    description: 'RouterOS engineering, scripting and subscriber management.',
  },
  {
    icon: Cpu,
    title: 'OpenWRT',
    description: 'Custom firmware and edge devices tuned for stability.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Edge delivery, DNS strategy and hybrid connectivity.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Practical automation that reduces manual operations work.',
  },
  {
    icon: Boxes,
    title: 'IoT',
    description: 'Sensors, gateways and telemetry pipelines that scale.',
  },
  {
    icon: Server,
    title: 'Server Administration',
    description: 'Linux and Windows servers, backups and disaster recovery.',
  },
];

export const stats = [
  { value: 320, suffix: '+', label: 'Deployments delivered' },
  { value: 12, suffix: '+', label: 'Years in IT & networking' },
  { value: 99.9, suffix: '%', label: 'Average network uptime', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Support availability' },
];
