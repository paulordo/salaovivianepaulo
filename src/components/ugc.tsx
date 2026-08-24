import React, { useRef, useState } from "react";
import {
  MessageCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";
import { Reveal } from "./reveal";

const videos = [
  {
    src: "/videos/video1.mp4",
    title: "Aplicação e textura",
  },
  {
    src: "/videos/video2.mp4",
    title: "Demonstração do produto",
  },
  {
    src: "/videos/video3.mp4",
    title: "Conteúdo para Reels e TikTok",
  },
];

interface VideoCardProps {
  src: string;
  title: string;
  index: number;
  playingIndex: number | null;
  onPlay: (index: number) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  src,
  title,
  index,
  playingIndex,
  onPlay,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    onPlay(index);

    try {
      await video.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Não foi possível reproduzir o vídeo:", error);
      setIsPlaying(false);
    }
  };

  React.useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (playingIndex !== index && !video.paused) {
      video.pause();
      setIsPlaying(false);
    }
  }, [playingIndex, index]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const percentage = clickPosition / rect.width;

    video.currentTime = percentage * video.duration;
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <div
      className="group relative w-full"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="relative overflow-hidden bg-black border-[3px] border-black shadow-[8px_8px_0_0_#000000] transition-all duration-300 md:group-hover:-translate-x-1 md:group-hover:-translate-y-1 md:group-hover:shadow-[12px_12px_0_0_#000000]">
        {/* CONTAINER RESPONSIVO 9:16 */}
        <div className="relative aspect-9/16 w-full bg-neutral-950 overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={handlePlay}
          >
            <source src={src} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          {/* GRADIENTE */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10" />

          {/* BOTÃO PLAY CENTRAL */}
          <button
            type="button"
            onClick={handlePlay}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            className={`
              absolute inset-0 m-auto
              w-16 h-16
              sm:w-20 sm:h-20
              md:w-16 md:h-16
              lg:w-20 lg:h-20
              flex items-center justify-center
              bg-white
              text-black
              border-[3px] border-black
              shadow-[5px_5px_0_0_#000000]
              transition-all duration-200
              hover:bg-brand-red
              hover:text-white
              hover:scale-105
              ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
            `}
          >
            {isPlaying ? (
              <Pause size={28} fill="currentColor" className="ml-1px" />
            ) : (
              <Play size={30} fill="currentColor" className="ml-1" />
            )}
          </button>

          {/* CONTROLES INFERIORES */}
          <div
            className={`
              absolute bottom-0 left-0 right-0
              px-4 py-4
              transition-all duration-300
              ${
                isPlaying && !showControls
                  ? "opacity-0 translate-y-3"
                  : "opacity-100 translate-y-0"
              }
            `}
          >
            {/* BARRA DE PROGRESSO */}
            <div
              className="relative h-2 bg-white/30 cursor-pointer mb-4 overflow-hidden"
              onClick={handleProgressClick}
            >
              <div
                className="absolute left-0 top-0 h-full bg-brand-red transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handlePlay}
                aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                className="text-white hover:text-brand-red transition-colors"
              >
                {isPlaying ? (
                  <Pause size={22} fill="currentColor" />
                ) : (
                  <Play size={22} fill="currentColor" />
                )}
              </button>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  className="text-white hover:text-brand-red transition-colors"
                >
                  {isMuted ? <VolumeX size={21} /> : <Volume2 size={21} />}
                </button>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Tela cheia"
                  className="text-white hover:text-brand-red transition-colors"
                >
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* LABEL */}
          {!isPlaying && (
            <div className="absolute top-4 left-4">
              <span className="bg-black text-white px-3 py-2 text-[10px] sm:text-xs font-black uppercase tracking-wider border border-white/20">
                UGC
              </span>
            </div>
          )}
        </div>

        {/* TÍTULO */}
        <div className="bg-white border-t-[3px] border-black px-5 py-4">
          <p className="font-black uppercase text-sm md:text-base text-black tracking-wide">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const Ugc: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section
      id="parcerias"
      className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* TOPO */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-16 md:mb-24">
          <Reveal>
            <p className="text-brand-red uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-black mb-5 sm:mb-6">
              Parcerias & Conteúdo
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase leading-[0.95]">
              Demonstração de Conteúdo
              <br />
              <span className="text-brand-red">UGC & Vídeos de Produtos</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 sm:mt-8 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Confira alguns exemplos de gravações e edições focadas em
              aplicação de produtos, textura, estética e resultados reais para o
              público. Vídeos prontos para uso em anúncios, Reels e TikTok.
            </p>
          </Reveal>
        </div>

        {/* VÍDEOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <Reveal key={video.title} delay={0.1 * index}>
              <VideoCard
                src={video.src}
                title={video.title}
                index={index}
                playingIndex={playingIndex}
                onPlay={setPlayingIndex}
              />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 sm:mt-24 md:mt-32 text-center">
          <Reveal>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black leading-tight">
                Gostou do estilo dos vídeos?
              </h3>

              <p className="mt-5 text-gray-700 text-base sm:text-lg">
                Entre em contato para criarmos conteúdos para a sua marca.
              </p>

              <a
                href="https://wa.me/5543999670078?text=Olá!%20Vi%20a%20página%20de%20UGC%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-full sm:w-auto
                  items-center
                  justify-center
                  gap-3
                  mt-10
                  bg-brand-red
                  text-white
                  border-[3px] border-black
                  px-6 py-5
                  sm:px-10
                  md:px-12 md:py-6
                  font-black
                  uppercase
                  text-xs sm:text-sm md:text-base
                  tracking-wide
                  shadow-[7px_7px_0_0_#000000]
                  hover:shadow-none
                  hover:translate-x-1
                  hover:translate-y-1
                  transition-all
                  duration-200
                "
              >
                <MessageCircle size={25} strokeWidth={2.5} />
                Solicitar Orçamento / Parceria
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Ugc;
