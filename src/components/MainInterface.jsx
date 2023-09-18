import AsideNoImaage from "./AsideNoImaage"
import CreatePost from "./CreatePost";
import ImagedAside from "./ImagedAside"
import { useState } from "react";
import Card from "./Card";
import ActualPost2 from "./ActualPost2";

function MainInterface() {

  const [showStartNewPost, setShowStartNewPost] = useState(false);

  const handleStartNewPost = () => {
    setShowStartNewPost(true);
  }
  return (
    <main>
      <div className="left-side border">
        <section className="side aside-no-image bg-white">
          <AsideNoImaage />
        </section>
        <section className="imaged-side">
          <Card /> 
        </section>
      </div>
      <div className="middle-part border">
        <nav className="up-middle-nav">
          <span>All</span>
          <span>Following</span>
          <span>Events</span>
          <span>Questions</span>
          <span>Pages</span>
        </nav>
        <div className="side lower-middle">
          <button onClick={handleStartNewPost}>Start Post</button>
          {showStartNewPost && <CreatePost isVisible={showStartNewPost} setIsVisible={setShowStartNewPost} />}
          <ActualPost2 />
        </div>
      </div>
      <div className="right-side border">
        <section className="side img-1-side  bg-white">
          <ImagedAside />
        </section>
      </div>
    </main>
  );
}

export default MainInterface