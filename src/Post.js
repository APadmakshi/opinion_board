import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import Share from "../comments/Share";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [show_cmnts, set_cmnts] = useState(false); //[var,def]=
  const [newsletter, setNewsletter] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const show_table = () => {
    set_cmnts(!show_cmnts);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {(() => {
              if (post?.visibilty) {
                return (
                  <div>
                    <img
                      className="postProfileImg"
                      /*src={
                        Users.filter((u) => u.id === post?.userId)[0]
                          .profilePicture
                      }*/
                      alt=""
                    />
                    <span className="postUsername">
                      {/*Users.filter((u) => u.id === post?.userId)[0].username*/}
                    </span>
                    <span className="postDate">{post.date}</span>
                  </div>
                );
              } else {
                return (
                  <div>
                    <img
                      className="postProfileImg"
                      src="assets/default.png"
                      alt=""
                    />
                    <span className="postUsername">Anonymous</span>
                    <span className="postDate">{post.date}</span>
                  </div>
                );
              }
            })()}
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText" onClick={show_table}>
              {post.comment.length} comments
            </span>
          </div>
        </div>
        <br></br>

        {show_cmnts ? <Share post={post} po={post.id}></Share> : null}
      </div>
    </div>
  );
}
