import Button from "@/components/parts/Button";
import YouTubeEmbed from "@/components/parts/YouTubeEmbed";

type Props = {
  children?: React.ReactNode;
  videoId: string;
  heading?: string;
};

const Video = (props: Props) => {
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
          {props.heading}
        </h3>

        {/* Youtube iFrame */}
        <YouTubeEmbed videoId={props.videoId} />
        <p className="max-w-[720px]">{props.children || null}</p>

        <Button href="/about" />
      </div>
    </section>
  );
};

export default Video;
