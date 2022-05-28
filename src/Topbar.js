import "./topbar.css";
import { Link, Navigate, Redirect } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import Feed from "./Feed";

export default function Topbar() {
  const onLogOut = () => {
    localStorage.removeItem("currentUser");
  };
  const onSetting = () => {
    <Navigate to="/setting" />;
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <h1 className="logo">Your Opinion Matters</h1>
      </div>
      <div className="topbarRight">
        <div>
          <Link to="/setting">
            <span className="leftFont" onClicked={onSetting}>
              Settings
            </span>
          </Link>
        </div>
        <div>
          <Link to="/">
            <span className="leftFont" onClicked={onLogOut}>
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
