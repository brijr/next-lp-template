import Button from "@/components/parts/Button";

type Props = {
  children?: React.ReactNode;
  heading?: string;
  author: string;
  location: string;
  quote: string;
  buttonText?: string | "Get Started";
};

const Quote = ({
  heading,
  children,
  author,
  location,
  quote,
  buttonText,
}: Props) => {
  return (
    <section
      id="hero"
      className="bg-slate-100 flex justify-center items-center p-8"
    >
      <div
        id="container"
        className="max-w-screen-lg text-center flex flex-col items-center gap-6"
      >
        <h3 className="text-2xl font-semibold max-w-[720px]">{heading}</h3>

        {/* Quote section */}
        <div className="max-w-[720px] w-full flex flex-col gap-6 p-6 rounded-md bg-slate-200 text-left">
          {/* Bubble */}
          <div className="md:ml-8 p-6 bg-slate-50 text-xl rounded-t-3xl rounded-br-3xl">
            <p>&quot;{quote || "This is a default quote."}&quot;</p>
          </div>
          {/* Reviewer */}
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-[url('https://start.benefits.com/ssdi/images/reviewer.jpg')]">
              {/* <Image /> */}
            </div>
            <div className="flex flex-col justify-center">
              <h4 className=" text-lg font-semibold">
                {author || "Default Author"}
              </h4>
              <p>{location || "Default, USA"}</p>
            </div>
          </div>
        </div>

        <p className="max-w-[720px]">{children}</p>
      </div>
    </section>
  );
};

export default Quote;
