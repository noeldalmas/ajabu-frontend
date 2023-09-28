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
import Modal from "../components/Modal";

function MainInterface() {
  const [showStartNewPost, setShowStartNewPost] = useState(false);

  const handleStartNewPost = () => {
    setShowStartNewPost(true);
  };

  return (
    <main>
      <div className="left-side">
          <AsideNoImaage trend={trending} />
          <AsideMaster title="Most Trending Groups" data={groupTrends} />
      </div>
      <div className="middle-part">
        
        <div className="side lower-middle">
          <button onClick={handleStartNewPost}>Start Post</button>
          <ActualPost2 posts={posts} />
        </div>
      </div>
      <div className="right-side">
        <AsideMaster title="Most Active Questions" data={activeQuestions} />
        <AsideMaster title="Newest Events" data={newestEvents} />
        <AsideMaster title="Most Active Pages" data={activePages} />
      </div>

      <Modal isOpen={showStartNewPost} setIsOpen={setShowStartNewPost}>
        <CreatePost
            isVisible={showStartNewPost}
            setIsVisible={setShowStartNewPost}
          />
      </Modal>
    </main>
  );
}

export default MainInterface;
