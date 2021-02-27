import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import WebsiteHeader from "../components/Header/header";
import TopicsList from "../components/Content/TopicsList";
import NavigateTo from "../components/Navigate";

export default function Mainpage() {
  const [dark, setDark] = useState(true);
  const DarkMode = () => {
    setDark(!dark);
  };
  if (dark) {
    document.body.style.color = "white";
    document.body.style.background = "#111111";
  } else {
    document.body.style.color = "black";
    document.body.style.background = "white";
  }
  return (
    <>
      <WebsiteHeader
        onClick={DarkMode}
        dark={dark}
        style={dark ? { color: "white" } : { color: "black" }}
      />
      <Container>
        <TopicsList color={dark ? { color: "white" } : { color: "#111111" }} />
        <Switch>
          <NavigateTo />
        </Switch>
      </Container>
    </>
  );
}
function Container(props) {
  return <section className="MainContainer">{props.children}</section>;
}
