"use client";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <section
      id="hero"
      className="bg-slate-50 flex justify-center items-center p-8"
    >
      <div id="container" className="max-w-screen-lg text-center flex gap-4">
        <form onSubmit={onSubmit} className="space-y-4">
          {children}
        </form>
      </div>
    </section>
  );
};

export default Form;
