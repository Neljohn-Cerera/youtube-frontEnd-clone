import React from "react";
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";
import "../css/searchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import kirby from "../img/kirby.jpg";
import thumbnail from "../img/thumbNail.jpg";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={kirby}
        channel="Disawake"
        verified
        subs="100k"
        noOfVideos={200}
        description="A begginers course"
      />
      <hr />
      <VideoRow
        views="10M"
        subs="100K"
        description="JUST JOKING"
        timeStamp="1 day ago"
        channel="Disawake"
        title="Beginners course"
        image={thumbnail}
      />
      <VideoRow
        views="10M"
        subs="100K"
        description="JUST JOKING"
        timeStamp="1 day ago"
        channel="Disawake"
        title="Beginners course"
        image={thumbnail}
      />
      <VideoRow
        views="10M"
        subs="100K"
        description="JUST JOKING"
        timeStamp="1 day ago"
        channel="Disawake"
        title="Beginners course"
        image={thumbnail}
      />
      <VideoRow
        views="10M"
        subs="100K"
        description="JUST JOKING"
        timeStamp="1 day ago"
        channel="Disawake"
        title="Beginners course"
        image={thumbnail}
      />
    </div>
  );
}

export default SearchPage;
