import AsideNoImaage from "./AsideNoImaage"
import ImagedAside from "./ImagedAside"

function MainInterface() {
  return (
    <main>
      <div className="left-side">
        <section className="side">
          <AsideNoImaage />
        </section>
        <section className="imaged-side"></section>
      </div>
      <div className="middle-part">
        <nav className="up-middle-nav">
          <span>All</span>
          <span>Following</span>
          <span>Events</span>
          <span>Questions</span>
          <span>Pages</span>
        </nav>
        <div className="side">
          <div className="create-post">
            <div className="title">
              <span className="center">Create Post</span>
              <div className="">
              <i className="fas fa-remove"></i>
              </div>
            </div>
            <div className="post-field">
              <div className="user">
                <img src="profile.jpg" alt="" />
                <span>User Name</span>
              </div> 
              <textarea placeholder="Create your post. Noel!" name="" id="" cols="20" rows="5" ></textarea>      
            </div>
            <div className="media-post">
                <div className="media">
                  <i className="fas fa-camera-retro"></i>
                  <i className="fas fa-tasks"></i>
                  <i className="fas fa-lightbulb"></i>
                  <i className="fas fa-smile"></i>
                </div>
                <button>Post</button>
              </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <section className="side">
          <ImagedAside />
        </section>
      </div>
    </main>
  );
}

export default MainInterface