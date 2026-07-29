import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  icon: Icon,
}) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`mx-auto flex max-w-3xl flex-col gap-5 ${alignment}`}>
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">
            {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2 className="heading-lg">{title}</h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p className="lede">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
