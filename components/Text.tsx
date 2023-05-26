import Button from "@/components/parts/Button";

type Props = {
  children: React.ReactNode;
  heading: string;
  buttonText?: string;
  buttonColor?: string;
};

const Text = ({ children, heading, buttonText, buttonColor }: Props) => {
  return (
    <section
      id="hero"
      className="bg-slate-100 flex justify-center items-center p-8"
    >
      <div
        id="container"
        className="max-w-screen-lg text-center flex flex-col items-center gap-6"
      >
        <h3 className="text-2xl font-semibold max-w-[720px]">
          {heading || "Lorem ipsum dolor sit amet"}
        </h3>
        <p className="max-w-[720px]">
          {children || "This is dummy text. To replace, pass in children."}
        </p>
        <Button style={{ backgroundColor: `${buttonColor}` }} href="/about">
          {buttonText || "Get Started"}
        </Button>
      </div>
    </section>
  );
};

export default Text;
