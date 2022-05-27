import "./comment.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import React, { useState } from "react";

const fs = require("fs");
export default function Comment(post, po) {
  let [comment, setComment] = useState("");

  const onCommentChange = (opinion) => {
    setComment(opinion);
  };

  const comment_update = () => {
    // const root =document.getElementById('user_new_cmnt').value;

    // Posts[post.po-1].comment.push([1,root])
    // console.log(Posts[post.po-1].comment)

    // Call addComments endpoint here
    console.log("comment: ", comment);
    var today = new Date();
    console.log("today: ", today);
    // fetch('http://localhost:8080/comments/addComments',{
    //   method: 'POST',
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify({username: , opinion: , dateTime: today, commentDes: comment})
    // }).then(()=>{
    //   console.log("Added comment");
    //   // <Feed />
    // })
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's your take on this ?"
            className="shareInput"
            value={comment}
            onInput={(e) => onCommentChange(e.target.value)}
            type="text"
            id="user_new_cmnt"
          />
          <div className="shareBottom">
            <div className="shareOptions"></div>
            <button className="shareButton" onClick={comment_update}>
              Post
            </button>
          </div>
        </div>
        <br></br>

        <tr>
          {post.post.comment.map((p) => (
            <div>
              <span className="postUsername">
                {/*Users.filter((u) => u.id === p[0])[0].username}*/}
              </span>
              <span className="shareInput" id="user_new_post">
                {p[1]}
              </span>
            </div>
          ))}
        </tr>
      </div>
    </div>
  );
}
