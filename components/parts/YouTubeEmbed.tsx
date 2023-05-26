import { Suspense } from "react";

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="youtube-embed">
      <Suspense
        fallback={
          <div className="w-[560px] h-[315px] animate-pulse flex justify-center items-center rounded-md bg-slate-300">
            Video Loading...
          </div>
        }
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          width={560}
          height={315}
          className="rounded-md"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </Suspense>
    </div>
  );
};

export default YouTubeEmbed;
