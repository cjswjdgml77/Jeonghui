import { useEffect, useRef, useState } from "react";

const useShowWithScroll = (page: number, scrollEl: HTMLElement) => {
  const [isShow, setShow] = useState(false);
  const isBack = useRef(false);
  const prevScrollTop = useRef(0);
  const calScrollPos = (el: HTMLElement) => {
    const scrollHeight = el.scrollTop / el.scrollHeight;
    const show = page / 4 - 0.125;
    const hide = page / 4 + 0.125;
    if (scrollHeight > show && scrollHeight < hide) {
      if (!isShow) {
        setShow(true);
      }
    }
    if (scrollHeight > hide || scrollHeight < show) {
      if (isShow) {
        setShow(false);
      }
    }
  };
  useEffect(() => {
    // This is for initial or when browser refresh
    const initial = () => {
      calScrollPos(scrollEl);
    };
    initial();
  }, []);
  useEffect(() => {
    const scroll = (e: Event) => {
      const div = e.target as HTMLElement;
      calScrollPos(div);
      if (div.scrollTop > prevScrollTop.current) {
        isBack.current = false;
      } else {
        isBack.current = true;
      }
      prevScrollTop.current = div.scrollTop;
    };
    scrollEl.addEventListener("scroll", scroll);

    return () => scrollEl.removeEventListener("scroll", scroll);
  }, [isShow, setShow]);

  return [isShow, isBack.current];
};

export default useShowWithScroll;
