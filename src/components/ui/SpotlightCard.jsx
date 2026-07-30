import { useRef } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  as: Tag = 'div',
  glow = 'rgba(47, 128, 255, 0.18)',
  ...props
}) {
  const ref = useRef(null);

  const handlePointerMove = (event) => {
    const element = ref.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    element.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`);
    element.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`);
    element.style.setProperty('--spotlight-opacity', '1');
  };

  const handlePointerLeave = () => {
    ref.current?.style.setProperty('--spotlight-opacity', '0');
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`spotlight-card ${className}`}
      style={{ '--spotlight-color': glow }}
      {...props}
    >
      {children}
    </Tag>
  );
}
