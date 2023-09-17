import ActualPost from "./ActualPost";
import AsideNoImaage from "./AsideNoImaage"
import CreatePost from "./CreatePost";
import ImagedAside from "./ImagedAside"
import { useState } from "react";
import Card from "./Card";

function MainInterface() {

  const [showStartNewPost, setShowStartNewPost] = useState(false);

  const handleStartNewPost = () => {
    setShowStartNewPost(!showStartNewPost);
  }
  return (
    <main>
      <div className="left-side">
        <section className="side aside-no-image bg-white">
          <AsideNoImaage />
        </section>
        <section className="imaged-side">
          <Card /> 
        </section>
      </div>
      <div className="middle-part">
        <nav className="up-middle-nav">
          <span>All</span>
          <span>Following</span>
          <span>Events</span>
          <span>Questions</span>
          <span>Pages</span>
        </nav>
        <div className="side lower-middle">
          <button onClick={handleStartNewPost}>Start Post</button>
          {showStartNewPost && <CreatePost />}
          <ActualPost />
        </div>
      </div>
      <div className="right-side">
        <section className="side bg-white">
          <ImagedAside />
        </section>
      </div>
    </main>
  );
}

export default MainInterface