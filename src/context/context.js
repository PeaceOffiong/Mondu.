import React, { useContext, useState, useEffect } from "react";
import data from "../data/index";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [index, setIndex] = useState(0);
  const [touchStarts, setTouchStart] = useState(null);
  const [touchEnds, setTouchEnd] = useState(null);
  const [docsIndex, setDocsIndex] = useState(0);

  const setScreen = (idx) => {
    console.log("clicked");
    setIndex(idx);
  };

  const touchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const minSwipeDistance = 50;

  const touchEnd = (e) => {
    if (!touchStarts || !touchEnds) return;
    const distance = touchStarts - touchEnds;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isRightSwipe) {
      setIndex(index - 1);
      if (index <= 0) return setIndex(data.length - 1);
    } else if (isLeftSwipe) {
      setIndex(index + 1);
      if (index >= data.length - 1) return setIndex(0);
    }
  };

  const switchPages = () => {
    if (index >= data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(switchPages, 2500);
    return () => clearInterval(interval);
  }, [index])

  const touchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const HandleContactSubmit = (e) => {
    e.preventDefault();
    alert("Submitted, Thanks For your Feedback");
  };

  const HandleTab = ( e) => {
    const target = e.target.parentElement.parentElement.nextElementSibling; 
    const symbol = e.target;

    if (target.classList.contains("Hidden")) {
      target.classList.remove("Hidden");
      symbol.innerText = "<"
    } else {
      target.classList.add("Hidden");
      symbol.innerHTML = `${`&#8964;
    `} `;
    }
  };

  return (
    <AppContext.Provider
      value={{
        index,
        isToggled,
        docsIndex,
        setDocsIndex,
        setIsToggled,
        setScreen,
        touchEnd,
        HandleContactSubmit,
        touchStart,
        touchMove,
        HandleTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
