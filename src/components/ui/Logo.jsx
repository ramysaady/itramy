export default function Logo({ className = 'h-10 w-auto', alt = 'itramy network solutions logo' }) {
  return (
    <img
      className={className}
      src="/images/itramy-logo.png"
      alt={alt}
      width={512}
      height={288}
      loading="eager"
      decoding="async"
    />
  );
}
