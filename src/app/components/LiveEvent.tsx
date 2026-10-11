import { ArrowDown, ExternalLink } from "lucide-react";

export const videoUrl = "https://www.facebook.com/shutterslk/videos/1106288448476803/";
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
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5A500] px-3 py-1 text-xs font-bold tracking-wider text-[#0D1128]">
            LATEST LIVE EVENT · REPLAY
          </span>
          <span className="text-sm text-white/60">10 October 2026</span>
        </div>
        <h1 id="live-event-title" lang="si" className="text-3xl font-bold leading-snug text-white sm:text-5xl">
          බෝඹුවල මහා පෙරහැර 2026
        </h1>
        <p className="mb-6 mt-3 text-base text-white/70">
          Watch yesterday’s broadcast from Bombuwala Maha Perahera. The live event has ended; the recording is available to watch again.
        </p>
        <div className="aspect-video overflow-hidden rounded-lg border border-white/15 bg-black shadow-2xl">
          <iframe
            src={embedUrl}
            title="බෝඹුවල මහා පෙරහැර 2026 — event replay"
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
          <a href="#live-events" className="inline-flex items-center gap-2 py-2 text-sm text-white/70 transition-colors hover:text-white">
            Browse live events <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <p className="mt-3 text-sm text-white/50">
          Using an iPhone? If tapping play doesn’t start the video, “Watch on Facebook” opens the broadcast directly.
        </p>
      </div>
    </section>
  );
}

export function LiveEvents() {
  return (
    <section id="live-events" aria-labelledby="live-events-title" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8" style={{ backgroundColor: "#11162E" }}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold tracking-widest text-[#F5A500]">EVENT BROADCASTS</p>
        <h2 id="live-events-title" className="text-4xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>LIVE EVENTS</h2>
        <p className="mb-8 mt-3 text-white/65">Catch up on our latest event coverage and watch past broadcasts.</p>
        <article className="max-w-3xl overflow-hidden rounded-lg border border-white/15 bg-[#0D1128]">
          <div className="aspect-video bg-black">
            <iframe src={embedUrl} title="Bombuwala Maha Perahera 2026 — Live Events recording" className="h-full w-full border-0" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen scrolling="no" />
          </div>
          <div className="p-6">
            <p className="mb-3 text-sm text-[#F5A500]">REPLAY · 10 October 2026</p>
            <h3 lang="si" className="text-2xl font-bold text-white">බෝඹුවල මහා පෙරහැර 2026</h3>
            <p className="mb-5 mt-3 text-white/65">Recorded live by Shutters.lk in Bombuwala.</p>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#F5A500] hover:text-[#ffbb33]">Watch replay on Facebook <ExternalLink size={16} aria-hidden="true" /></a>
          </div>
        </article>
      </div>
    </section>
  );
}
