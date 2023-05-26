import Image from "next/image";

interface HeaderProps {
  logo: string;
}

const Header = ({ logo }: HeaderProps) => {
  return (
    <section
      id="header"
      className="bg-slate-100 flex justify-center items-center md:p-8 p-4"
    >
      <div id="container" className=" max-w-sc">
        <Image src={logo} width={250} height={250} alt="logo"></Image>
      </div>
    </section>
  );
};

export default Header;
