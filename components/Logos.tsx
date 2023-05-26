import Image from "next/image";

const logoArray = ["https://start.benefits.com/ssdi/images/logos.png"];

const Logos = () => {
  return (
    <section
      id="hero"
      className="bg-slate-50 flex justify-center items-center p-8"
    >
      <div id="container" className="max-w-screen-lg text-center flex gap-4">
        {/* Logos */}
        {logoArray.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo} alt="logo"></img>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
