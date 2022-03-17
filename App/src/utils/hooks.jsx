import { useEffect, useState } from 'react';

export const useIsDesktop = () => {
  const breakpoint = 620;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > breakpoint);

  useEffect(() => {
    const handleWindowResize = () => setIsDesktop(window.innerWidth > breakpoint);
    window.addEventListener("resize", handleWindowResize);
    
    console.log(isDesktop)
    return () => window.removeEventListener("resize", handleWindowResize);
    
  }, []);

  return {isDesktop}
};
