import { useEffect, useState } from 'react';

export function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1800 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;

    const current = words[index % words.length];

    if (!deleting && text === current) {
      const hold = window.setTimeout(() => setDeleting(true), pause);
      return () => window.clearTimeout(hold);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((value) => (value + 1) % words.length);
      return undefined;
    }

    const timer = window.setTimeout(
      () => {
        setText((value) =>
          deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );

    return () => window.clearTimeout(timer);
  }, [words, index, text, deleting, typeSpeed, deleteSpeed, pause]);

  return text;
}
