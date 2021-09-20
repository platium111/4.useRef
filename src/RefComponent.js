import React, { useEffect, useRef, useState } from "react";

const RefComponent = () => {
  console.log("Ref component redering");

  const myInput = useRef(0); // [learn] ref not making component render again, if state of the component change, can see the latest ref value
  const [changeCount, setChangeCount] = useState(0); // just for changing display ref

  const contentRef = useRef();

  const handleChange = () => {
    myInput.current++;
  };

  // see the update data from ref
  const handleUpdateRefDisplay = () => {
    setChangeCount(changeCount + 1);
  };

  // focus on click button
  const focusOnContentRef = () => {
    contentRef.current.focus();
  };

  // just to see it print out
  useEffect(() => {
    const contentHtml = contentRef.current;
    console.log("contentRef ", contentHtml);
  }, []);

  /**
   * SOME RELES
   *  + only update ref inside useEffect or event handler, not using immediate in component
   */
  return (
    <div>
      <p>------TESTING REF CHANGE VALUE AND DISPLAY LATEST</p>
      <input onChange={handleChange}></input>
      <p>My input count {myInput.current}</p>
      <button onClick={handleUpdateRefDisplay}>
        Display values inside ref
      </button>
      <p>------TESTING FOCUS REF-----------</p>
      Focus here <input ref={contentRef} tabIndex={-1}></input>
      <button onClick={focusOnContentRef}>Focus on content ref</button>
    </div>
  );
};

export default RefComponent;
