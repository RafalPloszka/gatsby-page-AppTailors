import { useEffect } from "react";
import { throttle } from "throttle-debounce";


const useWindowOnScroll = (handleWindowScroll) => {
  const handleScrollThrottle = throttle(100, handleWindowScroll);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollThrottle);
    return () => {
      window.removeEventListener("scroll", handleScrollThrottle);
      handleScrollThrottle.cancel();
    };
  }, [handleScrollThrottle]);

  useEffect(() => {
    handleWindowScroll();
  }, []);
};

export default useWindowOnScroll;
