"use client";

import { useRef, useState, useEffect } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1); // Volume range is 0.0 to 1.0
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleFullscreenToggle = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleLoading = () => {
    if (videoRef.current) {
      setIsLoading(true);
    }
  };

  const handleLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("waiting", handleLoading);
      video.addEventListener("playing", handleLoaded);
    }
    return () => {
      if (video) {
        video.removeEventListener("waiting", handleLoading);
        video.removeEventListener("playing", handleLoaded);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full h-full lg:rounded-[40px] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/messagev.mp4"
        className="w-full object-center h-full object-fill"
        controls={false} // Disable default controls
      />

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Center Play/Pause Icon */}
      {isHovered && !isLoading && (
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:opacity-100"
        >
          {isPlaying ? (
            <img src="/pause.svg" alt="Pause" className="w-16 h-16" />
          ) : (
            <img src="/play.svg" alt="Play" className="w-16 h-16" />
          )}
        </button>
      )}

      {/* Custom Controls */}
      <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white p-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Play/Pause Button */}
        

        {/* Mute/Unmute Button */}
        <button
          onClick={handleMuteToggle}
          className="px-4 py-2 text-white flex items-center justify-center"
        >
          {isMuted ? (
            <img src="/soundoff.svg" alt="Sound Off" className="w-6 h-6" />
          ) : (
            <img src="/soundon.svg" alt="Sound On" className="w-6 h-6" />
          )}
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={handleFullscreenToggle}
          className="px-4 py-2 text-white flex items-center justify-center"
        >
          <img src="/fullscreen.svg" alt="Fullscreen" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
