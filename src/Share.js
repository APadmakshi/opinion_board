import "./share.css";
// import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ToggleSwitch from "./toggle";
import React, { useState } from "react";

const fs = require("fs");
export default function Share() {
  console.log("In share.jsx");
  let Posts = [];

  let [isPublic, setIsPublic] = useState(false);
  let [opinion, setOpinion] = useState("");

  let isFetchedOpinions = false;

  const onIsPublicChange = (checked) => {
    setIsPublic(checked);
  };

  const onOpinionChange = (opinion) => {
    setOpinion(opinion);
  };

  const share_post = () => {
    const root = document.getElementById("user_new_post").value;
    // Call addOpinion endpoint here
    console.log("opinion: ", opinion);
    var today = new Date();
    console.log("today: ", today);
    // fetch('http://localhost:8080/opinion/addOpinion',{
    //   method: 'POST',
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify({username: , opinionDes: opinion, dateTime: today, isPublic: isPublic, person: {id: }})
    // }).then(()=>{
    //   console.log("Added opinion");
    //   // <Feed />
    // })

    const srs = { isPublic };
    console.log(srs.isPublic);
    if (srs.isPublic == true) {
      let ps = {
        id: Posts.length,
        photo: "assets/post/2.jpeg",
        desc: root,
        date: "1 mins ago",
        userId: 1,
        like: 0,
        comment: [""],
        visibilty: true,
        date: Date.now(),
      };
      Posts.push(ps);
    } else {
      let ps = {
        id: Posts.length,
        photo: "assets/post/2.jpeg",
        desc: root,
        date: "1 mins ago",
        userId: 1,
        like: 0,
        comment: [""],
        visibilty: false,
        date: Date.now(),
      };
      Posts.push(ps);
    }
    console.log(Posts);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            value={opinion}
            onInput={(e) => onOpinionChange(e.target.value)}
            type="text"
            placeholder="What's on your mind?"
            className="shareInput"
            id="user_new_post"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <ToggleSwitch
                id="isPublic"
                checked={isPublic}
                onChange={onIsPublicChange}
              />
              <span className="shareOptionText"> Public </span>
              {console.log("isPublic: ", isPublic)}
            </div>
          </div>
          <button className="shareButton" onClick={share_post}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
