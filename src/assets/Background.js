import React, { useState } from 'react';
import Swing from './video/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS.mp4';

const Background = () => {
  const [loading, setLoading] = useState(true);

  function handleVideoLoaded() {
    setLoading(false);
    };

  return (
    <video
      onLoadedData={() => {
        handleVideoLoaded();
      }}
      autoPlay
      loop
      muted
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
        objectFit: "cover",
        zIndex: "-1",
        opacity: loading ? 0 : 1,
        transition: "opacity, 2s ease-in-out"
      }}
    >
      <source src={Swing} type="video/mp4" />
    </video>
  );
}

export default Background;