
function CreatePost() {
  return (
    <div className="create-post bg-white">
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
        <textarea
          placeholder="Create your post, User!"
          name=""
          id=""
          cols="20"
          rows="5"
        ></textarea>
      </div>
      <div className="media-post">
        <div className="media">
          <i className="fas fa-camera-retro mgn-010"></i>
          <i className="fas fa-tasks mgn-05"></i>
          <i className="fas fa-lightbulb mgn-010"></i>
          <i className="fas fa-smile mgn-05"></i>
        </div>
        <button>Post</button>
      </div>
    </div>
  );
}

export default CreatePost