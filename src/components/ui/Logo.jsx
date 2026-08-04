export default function Logo({ className = 'h-10 w-auto', alt = 'itramy network solutions logo' }) {
  return (
    <img
      className={`logo-wordmark ${className}`}
      src="/images/itramy-logo.png"
      alt={alt}
      width={676}
      height={369}
      loading="eager"
      decoding="async"
    />
  );
}
