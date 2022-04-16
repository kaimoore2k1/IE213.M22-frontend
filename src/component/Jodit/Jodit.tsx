import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

export const Editor = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  function handleSave(){
      console.log(content);
      window.localStorage.setItem("blogContent",content);
  }
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <button onClick={()=>handleSave()}>Save</button>
    </>
  );
};
export default Editor;
