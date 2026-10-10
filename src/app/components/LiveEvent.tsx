import { ArrowDown, ExternalLink } from "lucide-react";

const videoUrl = "https://www.facebook.com/shutterslk/videos/1106288448476803/";
const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false&width=560`;

export function LiveEvent() {
  return (
    <section
      id="home"
      aria-labelledby="live-event-title"
      className="px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8"
      style={{ background: "radial-gradient(ellipse at top, #202640 0%, #0D1128 70%)" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold tracking-wider text-white">
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
            LIVE NOW
          </span>
          <span className="text-sm text-white/60">Shutters.lk · Live coverage</span>
        </div>
        <h1 id="live-event-title" lang="si" className="text-3xl font-bold leading-snug text-white sm:text-5xl">
          බෝඹුවල මහා පෙරහැර 2026
        </h1>
        <p className="mb-6 mt-3 text-base text-white/70">
          Watch the event live, right here. If playback won’t start on your phone, watch on Facebook below.
        </p>
        <div className="aspect-video overflow-hidden rounded-lg border border-white/15 bg-black shadow-2xl">
          <iframe
            src={embedUrl}
            title="බෝඹුවල මහා පෙරහැර 2026 — Shutters.lk live broadcast"
            className="h-full w-full border-0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
          />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-[#F5A500] px-5 py-3 text-sm font-bold text-[#0D1128] transition-colors hover:bg-[#ffbb33]"
          >
            Watch on Facebook <ExternalLink size={16} aria-hidden="true" />
          </a>
          <a href="#intro" className="inline-flex items-center gap-2 py-2 text-sm text-white/70 transition-colors hover:text-white">
            Explore Shutters Films <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <p className="mt-3 text-sm text-white/50">
          Using an iPhone? If tapping play doesn’t start the video, “Watch on Facebook” opens the broadcast directly.
        </p>
      </div>
    </section>
  );
}
