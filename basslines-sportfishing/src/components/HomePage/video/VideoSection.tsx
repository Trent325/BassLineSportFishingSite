import videoSource from "./basslines.mp4"; // Importing the video file

const VideoSection = () => {
  return (
    <div className="relative bg-black h-96 flex justify-center items-center">
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover" style={{height: '500px'}}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
      <div className="absolute left-0 ml-6 text-white">
        <h1 className="text-3xl font-bold">BassLines Sport Fishing</h1>
        <p className="text-lg">Jersey Shore Fishing Charter</p>
      </div>
    </div>
  );
};

export default VideoSection;
