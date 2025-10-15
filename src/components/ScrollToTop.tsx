import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  // Get the current path from React Router
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array ensures effect runs only on route change

  // This component doesn't render any UI, it just manages side effects
  return null;
};

export default ScrollToTop;