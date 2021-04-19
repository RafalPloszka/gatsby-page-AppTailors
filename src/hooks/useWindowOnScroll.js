import React from "react";

const useWindowOnScroll = (handleWindowScroll) => {

  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [handleWindowScroll]);

  React.useEffect(() => {
    handleWindowScroll();
  }, []);
};

export default useWindowOnScroll;
