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
        <span className="logo"> You Matter</span>
      </div>
      <div className="topbarRight">
        <Link to="/setting">
          <span className="leftFont">Settings</span>
        </Link>
        <Link to="/">
          <span className="leftFont" onClicked={onLogOut}>
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
}
