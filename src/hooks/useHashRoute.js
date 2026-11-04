import { useEffect, useState } from 'react';

// Rutas de la página: inicio, plataforma municipal y plataforma legislativa.
// Se usa el hash (#/municipal) para no depender de configuración de servidor.
export const ROUTES = ['/', '/municipal', '/legislativa'];

const readRoute = () => {
  const hash = window.location.hash.replace(/^#/, '');
  return ROUTES.includes(hash) ? hash : '/';
};

export function goTo(path) {
  window.location.hash = path === '/' ? '#/' : `#${path}`;
}

export function scrollToId(id, offset = 85) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function useHashRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onChange = () => {
      setRoute(readRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
