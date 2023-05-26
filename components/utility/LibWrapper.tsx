"use client";

import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AceEditor from "react-ace";
import toJSXString from "react-element-to-jsx-string";

import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-monokai";

export default function LibWrapper(props: any) {
  const { children, Name, ...other } = props;
  const [isCopied, setIsCopied] = React.useState(false);

  const codeString = React.Children.map(children, (child) => {
    return React.isValidElement(child) ? toJSXString(child) : child;
  }).join("\n");

  return (
    <section className="bg-slate-300 max-w-screen-xl m-auto p-12 rounded-2xl my-8 relative">
      <div className="m-auto">
        <h2 className="text-3xl mb-6">{Name}</h2>
        <div className="w-full shadow-xl bg-slate-200 px-4 py-2 rounded-t-lg flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div {...other}>{children}</div>
        <div className="my-8 ">
          <h3 className="text-xl mb-6">Code</h3>
          <AceEditor
            mode="jsx"
            className="min-w-full rounded-lg p-4"
            theme="monokai"
            value={codeString}
            editorProps={{ $blockScrolling: true }}
          />

          <div className="absolute top-4 right-4 bg-slate-700 text-white py-4 px-6 rounded-lg">
            <CopyToClipboard text={codeString} onCopy={() => setIsCopied(true)}>
              <button>{isCopied ? "Copied!" : "Copy to clipboard"}</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </section>
  );
}
