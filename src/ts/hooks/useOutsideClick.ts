import { useEffect } from 'react';

type UseOutsideClickArgs = {
  ref: React.RefObject<HTMLElement | null>;
  handler: () => void;
};

export default function useOutsideClick({ ref, handler }: UseOutsideClickArgs) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}
