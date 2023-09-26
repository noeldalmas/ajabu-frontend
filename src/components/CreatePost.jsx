
function CreatePost({ isVisible, setIsVisible}) {

  const handleCloseClick = () => {
    setIsVisible(false);
  }

  return (
    <div className="create-post bg-white">
      <div className="title">
        <span className="center">Create Post</span>
        <div className="">
          <i className="fas fa-remove" onClick={handleCloseClick}></i>
        </div>
      </div>
      <div className="post-field">
        <div className="user">
          <img src="profile.jpg" alt="" />
          <span>User Name</span>
        </div>
        <textarea
          placeholder="Create your post, User!"
          name="new-post"
          id=""
          cols="20"
          rows="5"
        ></textarea>
      </div>
      <div className="media-post">
        <div className="media">
          <input type="file" name="upload__image" id="upload__image" hidden />
          <label htmlFor="upload__image">
            <i className="fas fa-camera-retro mgn-010"></i>
          </label>
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