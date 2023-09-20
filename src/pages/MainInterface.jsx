import AsideNoImaage from "../components/AsideNoImaage";
import CreatePost from "../components/CreatePost";
import { useState } from "react";
import ActualPost2 from "../components/ActualPost2";
import AsideMaster from "../components/AsideMaster";
import {
  activeQuestions,
  groupTrends,
  newestEvents,
  activePages,
  posts,
  trending
} from "../components/data/data";

function MainInterface() {
  const [showStartNewPost, setShowStartNewPost] = useState(false);

  const handleStartNewPost = () => {
    setShowStartNewPost(true);
  };

  return (
    <main>
      <div className="left-side">
        <section className="side aside-no-image bg-white">
          <AsideNoImaage trend={trending} />
        </section>
        <section className="imaged-side">
          <AsideMaster title="Most Trending Groups" data={groupTrends} />
        </section>
      </div>
      <div className="middle-part">
        
        <div className="side lower-middle">
          <button onClick={handleStartNewPost}>Start Post</button>
          {showStartNewPost && (
            <CreatePost
              isVisible={showStartNewPost}
              setIsVisible={setShowStartNewPost}
            />
          )}
          <ActualPost2 posts={posts}/>
        </div>
      </div>
      <div className="right-side">
        <AsideMaster title="Most Active Questions" data={activeQuestions} />
        <AsideMaster title="Newest Events" data={newestEvents} />
        <AsideMaster title="Most Active Pages" data={activePages} />
      </div>
    </main>
  );
}

export default MainInterface;
