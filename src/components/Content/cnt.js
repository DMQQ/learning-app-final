import React from "react";
import mainimg from "../../assets/images/mainimg.svg";
import img2 from "../../assets/images/img2.svg";
import img3 from "../../assets/images/img3.svg";
import img4 from "../../assets/images/img4.svg";

function Content() {
  return (
    <div className="content_main">
      <Cnt />
    </div>
  );
}

function Cnt() {
  const imgArr = [mainimg, img2, img3, img4];
  let randomNumber = Math.trunc(Math.random() * imgArr.length);
  let pic = imgArr[randomNumber];
  return (
    <section className="content_section">
      <main className="content_container">
        <div className="content_info">
          <h2 className="h2big">Welcome to my Learning App</h2>
          <h2>Choose topic you want from the nav bar on your left</h2>
        </div>
        <div className="content_img">
          <img src={pic} alt="svg img" />
        </div>
      </main>
    </section>
  );
}
export default Content;
