import React, { useContext, useState } from "react";
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

  const touchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const HandleContactSubmit = (e) => {
    e.preventDefault();
    alert("Submitted, Thanks For your Feedback");
  };

  const HandleTab = (indx) => {
    setDocsIndex(indx);
  
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
