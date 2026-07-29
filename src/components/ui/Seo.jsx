import { useEffect } from 'react';

function setMeta(selector, attribute, content) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, content);
}

export default function Seo({ title, description, noindex = false }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }

    if (title) {
      setMeta('meta[property="og:title"]', 'content', title);
      setMeta('meta[name="twitter:title"]', 'content', title);
    }

    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, follow' : 'index, follow');
  }, [title, description, noindex]);

  return null;
}
