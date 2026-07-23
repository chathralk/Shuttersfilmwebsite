import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = ["All", "Music Videos", "Live Sessions", "Events"] as const;

type Category = (typeof categories)[number];
type YouTubeCategory = Exclude<Category, "All" | "Events">;

type YouTubeProject = {
  id: number;
  title: string;
  category: YouTubeCategory;
  tag: "Music Video" | "Playlist";
  embedUrl: string;
  img: string;
};

type EventProject = {
  id: number;
  title: string;
  tag: "Event";
  url: string;
  img: string;
};

const youtubeProjects: YouTubeProject[] = [
  {
    id: 1,
    title: "Mihiran - Shawty (Official Music Video)",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/lhdVCGHgEl8?autoplay=1",
    img: "https://i.ytimg.com/vi/lhdVCGHgEl8/hqdefault.jpg",
  },
  {
    id: 2,
    title: "Mathrubumiyai (මාතෘ භූමියයි) Srilanka - Knights",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/gLQonL-UsV8?autoplay=1",
    img: "https://i.ytimg.com/vi/gLQonL-UsV8/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Ma Hade | මා හදේ [Official Music Video] | Heli Wijerathne",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/WiMahEL-guE?autoplay=1",
    img: "https://i.ytimg.com/vi/WiMahEL-guE/hqdefault.jpg",
  },
  {
    id: 4,
    title: "Munbe Va x Viramayak | Mashup Cover – Madara Prabhashinie",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/mqz-0KJ73sY?autoplay=1",
    img: "https://i.ytimg.com/vi/mqz-0KJ73sY/hqdefault.jpg",
  },
  {
    id: 5,
    title:
      "Awasanayak Nathi (අවසානයක් නැති) | Official Visualizer | Nipuna Jayakody",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/O0Qy1guUUks?autoplay=1",
    img: "https://i.ytimg.com/vi/O0Qy1guUUks/hqdefault.jpg",
  },
  {
    id: 6,
    title:
      "Seema Maim (සීමා මායිම්) | Tharindu Wadduwage | Highmonkey Session",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/Jah9F0Scz6o?autoplay=1",
    img: "https://i.ytimg.com/vi/Jah9F0Scz6o/hqdefault.jpg",
  },
  {
    id: 7,
    title:
      "Epa Sande (එපා සඳේ) - Kavinda Gimhana, Sugath Hettiarachchi | Cover Version",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/N4mcobl1c0E?autoplay=1",
    img: "https://i.ytimg.com/vi/N4mcobl1c0E/hqdefault.jpg",
  },
  {
    id: 8,
    title: "Vida Karo - Cover Version | Suneera Sumanga | Ayesha Jayalath",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/267Muebhvqk?autoplay=1",
    img: "https://i.ytimg.com/vi/267Muebhvqk/hqdefault.jpg",
  },
  {
    id: 9,
    title:
      "Kandulu Wehilihini | කඳුලු වැහිලිහිණි | Dr. Nanda Malini X Suneera Sumanga | Aruna Gunawardana",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/KXCvE1EG2EM?autoplay=1",
    img: "https://i.ytimg.com/vi/KXCvE1EG2EM/hqdefault.jpg",
  },
  {
    id: 10,
    title:
      "Dineka Apitath Weradila Athi | දිනෙක අපිටත් වැරදිලා ඇති by Suneera Sumanga X Vajira Suminda",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/Dm8zMF_e0SM?autoplay=1",
    img: "https://i.ytimg.com/vi/Dm8zMF_e0SM/hqdefault.jpg",
  },
  {
    id: 11,
    title:
      "Sithum Geethadeva, @tharinduwadduwage - Thodu (තෝඩු) Official Music Video",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/E7KGvAVdlZ8?autoplay=1",
    img: "https://i.ytimg.com/vi/E7KGvAVdlZ8/hqdefault.jpg",
  },
  {
    id: 12,
    title: "Ne-Yo - So Sick X One In A Million (WTF Cover)",
    category: "Music Videos",
    tag: "Music Video",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/DZJsomBpcBI?autoplay=1",
    img: "https://i.ytimg.com/vi/DZJsomBpcBI/hqdefault.jpg",
  },
  {
    id: 13,
    title: "Liyathambara Live In Concert 2022 (Popular Hits)",
    category: "Live Sessions",
    tag: "Playlist",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/videoseries?list=PLXTyIKabLaztaTeI-O4ihytqiSjmEkjiq&autoplay=1",
    img: "https://i.ytimg.com/vi/gQJrafORmWk/hqdefault.jpg",
  },
  {
    id: 14,
    title: "Christmas at the Yard",
    category: "Live Sessions",
    tag: "Playlist",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/videoseries?list=PLpaYN9p0v1NqUVDbb0khEP6McWMUNVWZT&autoplay=1",
    img: "https://i.ytimg.com/vi/VUeMSsBoJ2g/hqdefault.jpg",
  },
  {
    id: 15,
    title: "Knights Isthale",
    category: "Live Sessions",
    tag: "Playlist",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/videoseries?list=PLIQDowoy-A6v2-VF204HVgqiHyxz_faMi&autoplay=1",
    img: "https://i.ytimg.com/vi/UubS4bV7-o4/hqdefault.jpg",
  },
];

const eventProjects: EventProject[] = [
  {
    id: 16,
    title: "Aalakatha",
    tag: "Event",
    url: "https://aalakatha.lk/",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

const badgeStyle = {
  backgroundColor: "#F5A500",
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.1em",
  color: "#0D1128",
  borderRadius: "2px",
};

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const [playingProjects, setPlayingProjects] = useState<Set<number>>(
    () => new Set(),
  );

  const filteredYouTubeProjects =
    active === "All"
      ? youtubeProjects
      : active === "Events"
        ? []
        : youtubeProjects.filter((project) => project.category === active);

  const showEvents = active === "All" || active === "Events";

  const selectCategory = (category: Category) => {
    setPlayingProjects(new Set());
    setActive(category);
  };

  const playProject = (id: number) => {
    setPlayingProjects((current) => {
      const next = new Set(current);
      next.add(id);
      return next;
    });
  };

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#0D1128" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              style={{
                width: "32px",
                height: "2px",
                backgroundColor: "#F5A500",
              }}
            />
            <span
              style={{
                color: "#F5A500",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.15em",
              }}
            >
              OUR WORK
            </span>
            <div
              style={{
                width: "32px",
                height: "2px",
                backgroundColor: "#F5A500",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 58px)",
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            Featured <span style={{ color: "#F5A500" }}>Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              className="px-5 py-2 text-sm transition-all"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.08em",
                fontSize: "14px",
                borderRadius: "2px",
                backgroundColor: active === category ? "#F5A500" : "transparent",
                color:
                  active === category ? "#0D1128" : "rgba(255,255,255,0.6)",
                border:
                  active === category
                    ? "1px solid #F5A500"
                    : "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredYouTubeProjects.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredYouTubeProjects.map((project) => {
                const isPlaying = playingProjects.has(project.id);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: "2px",
                      backgroundColor: "#070B1A",
                      boxShadow: "0 12px 34px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      data-testid="portfolio-media"
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: "16 / 9" }}
                    >
                      {isPlaying ? (
                        <iframe
                          src={project.embedUrl}
                          title={`${project.title} video player`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          referrerPolicy="strict-origin-when-cross-origin"
                          className="h-full w-full border-0"
                        />
                      ) : (
                        <button
                          type="button"
                          aria-label={`Play ${project.title}`}
                          onClick={() => playProject(project.id)}
                          className="group relative block h-full w-full cursor-pointer overflow-hidden text-left"
                        >
                          <ImageWithFallback
                            src={project.img}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          <span
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(7,11,26,0.05) 35%, rgba(7,11,26,0.92) 100%)",
                            }}
                          />

                          <span className="absolute inset-0 flex items-center justify-center">
                            <span
                              className="flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                              style={{
                                backgroundColor: "#F5A500",
                                boxShadow: "0 8px 30px rgba(245,165,0,0.35)",
                              }}
                            >
                              <Play
                                size={20}
                                fill="#0D1128"
                                color="#0D1128"
                              />
                            </span>
                          </span>

                          <span
                            className="absolute left-3 top-3 px-2 py-1"
                            style={badgeStyle}
                          >
                            {project.tag}
                          </span>

                          <span className="absolute bottom-4 left-4 right-4">
                            <span
                              className="block text-white"
                              style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 800,
                                fontSize: "19px",
                                lineHeight: 1.1,
                                textTransform: "uppercase",
                              }}
                            >
                              {project.title}
                            </span>
                            <span
                              className="mt-1 block"
                              style={{
                                fontFamily: "'Barlow', sans-serif",
                                fontSize: "11px",
                                color: "rgba(255,255,255,0.68)",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                              }}
                            >
                              Play on this page
                            </span>
                          </span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        <AnimatePresence>
          {showEvents && (
            <motion.section
              aria-label="Events"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className={filteredYouTubeProjects.length > 0 ? "mt-16" : ""}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  style={{
                    width: "28px",
                    height: "2px",
                    backgroundColor: "#F5A500",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "26px",
                    color: "#fff",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  Events
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {eventProjects.map((event) => (
                  <a
                    key={event.id}
                    href={event.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${event.title} event website`}
                    className="group relative block overflow-hidden"
                    style={{
                      borderRadius: "2px",
                      boxShadow: "0 12px 34px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      data-testid="portfolio-media"
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: "16 / 9" }}
                    >
                      <ImageWithFallback
                        src={event.img}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <span
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(7,11,26,0.08) 25%, rgba(7,11,26,0.94) 100%)",
                        }}
                      />

                      <span
                        className="absolute left-3 top-3 px-2 py-1"
                        style={badgeStyle}
                      >
                        {event.tag}
                      </span>

                      <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                        <span>
                          <span
                            className="block text-white"
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontWeight: 800,
                              fontSize: "21px",
                              lineHeight: 1.1,
                              textTransform: "uppercase",
                            }}
                          >
                            {event.title}
                          </span>
                          <span
                            className="mt-1 block"
                            style={{
                              fontFamily: "'Barlow', sans-serif",
                              fontSize: "11px",
                              color: "rgba(255,255,255,0.68)",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                            }}
                          >
                            Visit event website
                          </span>
                        </span>
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: "#F5A500" }}
                        >
                          <ExternalLink size={17} color="#0D1128" />
                        </span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
