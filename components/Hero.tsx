type Props = {
  children: React.ReactNode;
  title: string;
  bgColor: string;
};

const Hero = ({ children, title, bgColor }: Props) => {
  return (
    <section
      id="hero"
      className="text-white flex justify-center items-center p-8"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div
        id="container"
        className="max-w-screen-lg text-center flex flex-col gap-6"
      >
        <h1 className="text-4xl font-semibold">
          {title ? title : "We need more information to help with your case."}
        </h1>
        <p className="text-lg">
          {children
            ? children
            : "This is the default paragraph text. You can change it by editing the Hero component."}
        </p>
      </div>
    </section>
  );
};

export default Hero;
