"use client";

import { useState, useEffect, useRef } from "react";
import Vimeo from "@vimeo/player";

const VideoPlayer = () => {
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (iframeRef.current) {
      const vimeoPlayer = new Vimeo(iframeRef.current);
      setPlayer(vimeoPlayer);

      vimeoPlayer.on("play", () => setIsPlaying(true));
      vimeoPlayer.on("pause", () => setIsPlaying(false));
      vimeoPlayer.on("bufferstart", () => setIsLoading(true));
      vimeoPlayer.on("bufferend", () => setIsLoading(false));

      vimeoPlayer.getMuted().then((muted) => setIsMuted(muted));
    }
  }, []);

  const handlePlayPause = async () => {
    if (player) {
      const status = await player.getPaused();
      if (status) {
        await player.play();
      } else {
        await player.pause();
      }
    }
  };

  const handleMuteToggle = async () => {
    if (player) {
      const muted = await player.getMuted();
      await player.setMuted(!muted);
      setIsMuted(!muted);
    }
  };

  const handleFullscreenToggle = async () => {
    if (player) {
      await player.requestFullscreen();
    }
  };

  return (
    <div
      className="relative  w-full h-full lg:rounded-[40px] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Vimeo Embed */}
      <div className="w-full h-full">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1051855319?h=09cc5f47ad&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className="absolute top-0 left-0 w-full h-full"
          title="EE Landing Page Video"
        ></iframe>
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      
      {/* Custom Controls */}
      
    </div>
  );
};

export default VideoPlayer;
