import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import Comment from "./Comment";
import Share from "./Share";

export default function Post({ post }) {
  // const [like, setLike] = useState(post.like);
  // const [isLiked, setIsLiked] = useState(false);
  // const [show_cmnts, set_cmnts] = useState(false); //[var,def]=
  // const [newsletter, setNewsletter] = useState(false);
  // const likeHandler = () => {
  //   setLike(isLiked ? like - 1 : like + 1);
  //   setIsLiked(!isLiked);
  // };
  // const show_table = () => {
  //   set_cmnts(!show_cmnts);
  // };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
          <span className="postText">{post?.opinionDes}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomRight">
            <span className="postCommentText">
              {post.userComments} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
