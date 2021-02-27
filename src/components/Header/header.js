import React, { useState } from "react";
import user from "../Data/user";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import app from "../../assets/database/base";
function WebsiteHeader(props) {
  const [userModal, setUserModal] = useState(false);

  return (
    <header className="header_Main">
      <div className="logo">
        <h5>
          <Link to="/">
            <a href="#" className="h5-logo" style={props.style}>
              Learning App
            </a>
          </Link>
        </h5>
      </div>
      <div className="header_user" onClick={() => setUserModal(!userModal)}>
        {user.map((u) => {
          return <Usr key={u.id} {...u} />;
        })}
      </div>
      {userModal ? (
        <UserModalWindow onClick={props.onClick} dark={props.dark} />
      ) : null}
    </header>
  );
}

function Usr({ img, name }) {
  return (
    <div style={{ display: "flex" }}>
      <img src={img} alt="user's img" />
      <h6>{name}</h6>
    </div>
  );
}

function UserModalWindow(props) {
  return (
    <div className="user_modal">
      {user.map((u) => {
        return <UserData key={u.id} {...u} />;
      })}
      <button className="user_modal_btn" onClick={() => app.auth().signOut()}>
        Log out
      </button>
      <button className="user_modal_darkmode_btn" onClick={props.onClick}>
        {props.dark ? <BiMoon className="dm" /> : <BsSun className="dm" />}
      </button>
    </div>
  );
}

function UserData({ lvl, progres, name }) {
  return (
    <div>
      <h6>name: {name}</h6>
      <h6>level: {lvl}</h6>
      <h6>
        progres: <span>{progres}%</span>
      </h6>
    </div>
  );
}
export default WebsiteHeader;
