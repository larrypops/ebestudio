"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Headset, Disc, Play, Pause, Volume2 } from "lucide-react";
import { PLAYLIST } from "../constants";

type Track = (typeof PLAYLIST)[number]["tracks"][number];

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "0:00";
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${mins}:${secs}`;
}

function getTrackKey(track: Track) {
  return `${track.artist}-${track.title}`;
}

export default function Playlist() {
  const [activeTab, setActiveTab] = useState(PLAYLIST[0].genre);
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const [progressByKey, setProgressByKey] = useState<Record<string, number>>({});
  const [timeByKey, setTimeByKey] = useState<Record<string, number>>({});
  const [durationByKey, setDurationByKey] = useState<Record<string, number>>({});

  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const activeCategory = useMemo(
    () => PLAYLIST.find((cat) => cat.genre === activeTab) || PLAYLIST[0],
    [activeTab],
  );

  const stopAllTracks = () => {
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio) {
        audio.pause();
      }
    });
    setPlayingKey(null);
  };

  useEffect(() => {
    stopAllTracks();
  }, [activeTab]);

  const toggleTrack = async (track: Track) => {
    const key = getTrackKey(track);
    const audio = audioRefs.current[key];

    if (!audio) {
      return;
    }

    if (playingKey === key && !audio.paused) {
      audio.pause();
      setPlayingKey(null);
      return;
    }

    Object.entries(audioRefs.current).forEach(([otherKey, otherAudio]) => {
      if (otherAudio && otherKey !== key) {
        otherAudio.pause();
      }
    });

    try {
      await audio.play();
      setPlayingKey(key);
    } catch {
      setPlayingKey(null);
    }
  };

  const updateTime = (key: string) => {
    const audio = audioRefs.current[key];
    if (!audio) {
      return;
    }

    const current = audio.currentTime || 0;
    const duration = audio.duration || 0;
    const progress = duration > 0 ? (current / duration) * 100 : 0;

    setTimeByKey((prev) => ({ ...prev, [key]: current }));
    setDurationByKey((prev) => ({ ...prev, [key]: duration }));
    setProgressByKey((prev) => ({ ...prev, [key]: progress }));
  };

  const seekTrack = (key: string, progress: number) => {
    const audio = audioRefs.current[key];
    if (!audio || !audio.duration) {
      return;
    }

    const nextTime = (progress / 100) * audio.duration;
    audio.currentTime = nextTime;
    setProgressByKey((prev) => ({ ...prev, [key]: progress }));
    setTimeByKey((prev) => ({ ...prev, [key]: nextTime }));
  };

  return (
    <section className="py-24 relative overflow-hidden" id="playlist">
      <div className="absolute inset-0 bg-bg-dark z-0" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-violet/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand uppercase text-[10px] font-black tracking-[0.5em] mb-4 block">
            Decouvrez notre univers
          </span>
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">
            PLAY<span className="text-gradient">LIST</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg italic">
            Savourez un extrait de ce que nous produisons au quotidien chez Ekie
            Bozeur Entertainment.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {PLAYLIST.map((category) => (
            <button
              key={category.genre}
              onClick={() => setActiveTab(category.genre)}
              className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeTab === category.genre
                  ? "bg-brand border-brand text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                  : "bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white"
              }`}
            >
              {category.genre}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.97, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -14 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                  <Disc className="animate-spin-slow w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-black tracking-widest text-brand italic">
                  {activeCategory.genre} SELECTION
                </h3>
              </div>

              <div className="grid gap-4">
                {activeCategory.tracks.map((track) => {
                  const key = getTrackKey(track);
                  const isPlaying = playingKey === key;
                  const current = timeByKey[key] ?? 0;
                  const duration = durationByKey[key] ?? 0;
                  const progress = progressByKey[key] ?? 0;

                  return (
                    <motion.article
                      key={key}
                      whileHover={{ y: -2 }}
                      className="relative p-5 sm:p-6 glass-card rounded-3xl border border-white/10 hover:border-brand/40 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-accent-violet/10 opacity-40 pointer-events-none" />

                      <audio
                        ref={(node) => {
                          audioRefs.current[key] = node;
                        }}
                        preload="metadata"
                        onLoadedMetadata={() => updateTime(key)}
                        onTimeUpdate={() => updateTime(key)}
                        onPause={() => {
                          if (playingKey === key) {
                            setPlayingKey(null);
                          }
                        }}
                        onPlay={() => setPlayingKey(key)}
                        onEnded={() => {
                          setPlayingKey(null);
                          setProgressByKey((prev) => ({ ...prev, [key]: 0 }));
                          setTimeByKey((prev) => ({ ...prev, [key]: 0 }));
                        }}
                        className="hidden"
                      >
                        <source src={(track as any).file} type="audio/mpeg" />
                      </audio>

                      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-5">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <button
                            onClick={() => toggleTrack(track)}
                            className={`w-14 h-14 rounded-2xl border shrink-0 flex items-center justify-center transition-all ${
                              isPlaying
                                ? "bg-brand border-brand text-white shadow-[0_0_30px_rgba(229,9,20,0.35)]"
                                : "bg-white/5 border-white/10 text-white hover:border-brand/50 hover:text-brand"
                            }`}
                            aria-label={isPlaying ? "Pause" : "Play"}
                          >
                            {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-0.5" />}
                          </button>

                          <div className="min-w-0">
                            <h4 className="font-black text-lg sm:text-xl leading-tight truncate">
                              {track.title}
                            </h4>
                            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45 truncate mt-1">
                              {track.artist}
                            </p>
                          </div>
                        </div>

                        <div className="w-full lg:max-w-[460px]">
                          <div className="flex items-center gap-3 text-white/50 text-xs mb-2">
                            <Volume2 size={14} className={isPlaying ? "text-brand" : ""} />
                            <span className="font-mono tabular-nums">{formatTime(current)}</span>
                            <div className="h-px flex-1 bg-white/10" />
                            <span className="font-mono tabular-nums">{formatTime(duration) || track.duration}</span>
                          </div>

                          <input
                            type="range"
                            min={0}
                            max={100}
                            step={0.1}
                            value={progress}
                            onChange={(event) => seekTrack(key, Number(event.target.value))}
                            className="w-full h-2 rounded-full accent-brand bg-white/10 cursor-pointer"
                            aria-label={`Progression ${track.title}`}
                          />
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-20 p-8 sm:p-12 glass-card rounded-[3rem] border-white/5 text-center bg-linear-to-br from-brand/10 to-transparent flex flex-col sm:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-black italic mb-2 tracking-tight">
              Pret a creer votre propre hit ?
            </h3>
            <p className="text-white/60 text-sm sm:text-base">
              Venez enregistrer dans les meilleures conditions a Yaounde.
            </p>
          </div>
          <motion.a
            href="https://wa.me/237699132711"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-brand text-white text-xs font-black uppercase tracking-widest rounded-full shadow-[0_0_40px_rgba(229,9,20,0.4)] flex items-center justify-center gap-3 shrink-0"
          >
            <Headset size={18} />
            Reserver ma session
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
