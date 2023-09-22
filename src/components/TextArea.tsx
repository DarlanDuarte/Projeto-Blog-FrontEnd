import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import dynamic from "next/dynamic";

const MyEditor = dynamic(() => import("jodit-react"), {
  ssr: false, // Evita a renderização do lado do servidor
});

interface ITextArea {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea: React.FC<ITextArea> = ({ description, setDescription }) => {
  const editor = useRef(null);

  return (
    <MyEditor
      ref={editor}
      value={description}
      onChange={(description) => {
        setDescription(description);
      }}
    />
  );
};

export default TextArea;
