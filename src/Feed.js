import Share from "./Share";
import "./feed.css";

export default function Feed() {
  console.log("In feed.jsx");
  // Call fetchAllOpinions endpoint here
  // fetch('http://localhost:8080/opinion/findall',{
  //   method: 'GET',
  //   headers: {"Content-Type": "application/json"},
  // }).then(()=>{
  //   console.log("Fetched opinions")
  // })
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/*{Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}*/}
      </div>
    </div>
  );
}
