import React, { ReactNode } from "react";

const Disclaimer = ({ children }: { children: ReactNode }) => {
  return (
    <section
      id="hero"
      className="bg-slate-50 flex justify-center items-center p-8"
    >
      <div
        id="container"
        className="max-w-screen-lg flex flex-col items-center gap-6 text-gray-500"
      >
        <p className="text-xs">{children}</p>
      </div>
    </section>
  );
};

export default Disclaimer;
