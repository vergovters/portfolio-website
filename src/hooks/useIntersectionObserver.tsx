import { useEffect, useRef, useState } from 'react';

type IntersectionObserverHookResult = {
  ref: React.RefObject<HTMLDivElement>;
  isInView: boolean;
};

export const useIntersectionObserver = (): React.LegacyRef<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false)
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
          } else {
            setIsInView(false)
          }
        });
      });

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }

    }, []);

    return ref;
  };