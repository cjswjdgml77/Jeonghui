import { useEffect, useState } from "react";

const useShowWithScroll = (page: number, scrollEl: HTMLElement) => {
  const [isShow, setShow] = useState(false);
  useEffect(() => {
    const scroll = (e: Event) => {
      const div = e.target as HTMLElement;
      const scrollHeight = div.scrollTop / div.scrollHeight;
      const show = page / 4 - 0.125;

      const hide = page / 4 + 0.125;

      if (scrollHeight > show && scrollHeight < hide) {
        if (!isShow) {
          setShow(true);
        }
      }
      if (scrollHeight > hide) {
        if (isShow) {
          setShow(false);
        }
      }
    };
    scrollEl.addEventListener("scroll", scroll);

    return () => scrollEl.removeEventListener("scroll", scroll);
  }, [isShow, setShow]);

  return isShow;
};

export default useShowWithScroll;
