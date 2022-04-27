import  { useState, useRef } from "react";
import {encode} from "html-entities";
import JoditEditor from "jodit-react";

export const Editor = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  function handleSave(){
      let html = encode(content)
      console.log('html :>> ', html);
      window.localStorage.setItem("blogContent",html);
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
