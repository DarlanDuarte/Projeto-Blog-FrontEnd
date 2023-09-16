import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";

const MyEditor = dynamic(() => import("react-quill"), {
  ssr: false, // Evita a renderização do lado do servidor
});

const TextArea: React.FC = () => {
  const [description, setDescription] = useState("");

  return (
    <>
      <MyEditor
        theme="snow"
        value={description}
        onChange={setDescription}
        className={`h-48 `}
      />
    </>
  );
};

export default TextArea;
