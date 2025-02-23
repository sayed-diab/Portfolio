const LazyVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="./assets/loading.webm"
        type="video/webm"
      />
      Your browser does not support WebM videos.
    </video>
  );
};

export default LazyVideo;
