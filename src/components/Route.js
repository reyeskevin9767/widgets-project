import { useEffect } from 'react';

// Event listener in component usually results in useing useEffect

const Route = ({ path, children }) => {
  // Usually event listener in component runs one time
  useEffect(() => {
    const onLocationChange = () => {
      console.log('Location Change');
    };

    window.addEventListener('popstate', onLocationChange);

    // Best practice to remove event listener in clean up
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;
