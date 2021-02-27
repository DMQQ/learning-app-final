import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import Data from "../Data/data";
import { Link } from "react-router-dom";

const arr = Data;

function TopicsList(props) {
  return (
    <main className={"topicsList_container "}>
      <div className="topicList_info">
        <h1>Topics</h1>
      </div>
      {arr.map((a) => {
        return <Subject key={a.id} {...a} color={props.color} />;
      })}
    </main>
  );
}

function Subject(props) {
  const [show, setShow] = useState(false);
  return (
    <ul className="subject">
      <div className="subject_container">
        <h4>{props.title}</h4>
        <div className="subject_btn_container">
          <button onClick={() => setShow(!show)}>
            {show ? (
              <AiFillCaretUp style={props.color} />
            ) : (
              <AiFillCaretDown style={props.color} />
            )}
          </button>
        </div>
      </div>
      {show ? (
        <SubTopicContainer
          name={props.name}
          name2={props.name2}
          name3={props.name3}
          color={props.color}
          link={props.link}
          link2={props.link2}
          link3={props.link3}
        />
      ) : null}
    </ul>
  );
}

function SubTopicContainer(props) {
  return (
    <div>
      <SubTopic name={props.name} color={props.color} link={props.link} />
      <SubTopic name={props.name2} color={props.color} link={props.link2} />
      <SubTopic name={props.name3} color={props.color} link={props.link3} />
    </div>
  );
}

function SubTopic({ name, link, color }) {
  return (
    <div className="subtopic ">
      <li>
        <Link to={link}>
          <a href={link} style={color}>
            {name}
          </a>
        </Link>
      </li>
    </div>
  );
}
export default TopicsList;
