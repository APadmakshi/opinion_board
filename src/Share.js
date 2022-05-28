import "./share.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ToggleSwitch from "./toggle";
import { Navigate, Link, Redirect, Route } from "react-router-dom";
import React, { useState } from "react";

const Share = () => {
  const [isPublic, setPublic] = useState(false);
  const [opinions, setOpinion] = useState("");
  const sharePost = () => {
    const opiDes = document.getElementById("opiniondes").value;
    setOpinion(opiDes);
    const ispublic = document.getElementById("isPublic").value;
    var today = new Date();
    const userName = localStorage.getItem("currentUser");
    console.log("share");

    (async () => {
      const rawResponse = await fetch(
        "http://localhost:8080/api/opinion/addopinion",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userName.toString(),
            opinionDes: opiDes.toString(),
            dateTime: today,
            isPublic: true,
          }),
        }
      );

      if (rawResponse.status === 200) {
        window.location.reload(true);
        return <Navigate to="/profile" />;
      } else {
        console.log("Post unsuccessful");
      }
    })();
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <input
            name="opinions"
            type="text"
            placeholder="What's on your mind?"
            className="shareInput"
            id="opiniondes"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <ToggleSwitch id="isPublic" checked={isPublic} />
              <span className="shareOptionText"> Public </span>
            </div>
          </div>
          <button className="shareButton" type="submit" onClick={sharePost}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
