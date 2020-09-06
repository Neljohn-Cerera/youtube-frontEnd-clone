import React from "react";
import VideoCard from "../components/VideoCard";
import "../css/recommendedVideos.css";
import kirby from "../img/kirby.jpg";
import thumbnail from "../img/thumbNail.jpg";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          image={thumbnail}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={kirby}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={thumbnail}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={kirby}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={thumbnail}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={kirby}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={thumbnail}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={kirby}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={thumbnail}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={kirby}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={thumbnail}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={kirby}
          views="100"
          timestamp="2 days ago"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
