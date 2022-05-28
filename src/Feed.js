import Post from "./Post";
import Share from "./Share";
import "./feed.css";

export default function Feed() {
  console.log("In feed.jsx");
  var content;
  (async () => {
    const rawResponse = fetch("http://localhost:8080/api/opinion/findall", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    content = rawResponse.text();
    content = JSON.parse(content);
    console.log(content);
    flag = true;
    console.log(typeof content);
  })();
  let Posts = [
    {
      id: 5,
      photo: "assets/post/5.jpeg",
      date: "5 hours ago",
      userId: 5,
      like: 23,
      comment: 5,
    },
  ];
  console.log(typeof Posts);
  console.log(Posts);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {content.map((p) =>
          // <Post key={p.oid} post={p} />
          console.log(p)
        )}
      </div>
    </div>
  );
}
