type FooterProps = {
  company: string;
  children?: React.ReactNode;
};

const Footer = ({ company, children }: FooterProps) => {
  return (
    <footer
      id="Footer"
      className="bg-slate-100 flex justify-center items-center md:p-8 p-4"
    >
      <div
        id="container"
        className="flex justify-between w-full max-w-screen-lg"
      >
        <h4 className="text-xl">{children}</h4>
        <div className="text-right text-slate-600">
          <p>© {company}, 2023 | All Rights Reserved</p>
          <p>
            <a className="underline" href="/">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a className="underline" href="/">
              Terms of Service
            </a>{" "}
            |{" "}
            <a className="underline" href="/">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
