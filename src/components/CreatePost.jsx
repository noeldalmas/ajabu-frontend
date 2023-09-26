import { useState } from "react";

function CreatePost({ isVisible, setIsVisible}) {

  const handleCloseClick = () => {
    setIsVisible(false);
  }

  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const selectedImages = e.target.files;

    if (selectedImages.length > 0) {
      const imageArray = Array.from(selectedImages);
      const imageUrls = [];

      imageArray.forEach((image) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          imageUrls.push(event.target.result);

          if (imageUrls.length === imageArray.length) {
            setImages(imageUrls)
          }
        };
        reader.readAsDataURL(image)
      });
    }
    
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

      <div className="uploaded-img">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={"Updated ${index}"}
            className="image-post"
          />
        ))}
      </div>
      <div className="media-post">
        <div className="media">
          <input
            type="file"
            name="upload__image"
            id="upload__image"
            accept="image/*"
            multiple
            hidden
            onChange={handleImageUpload}
          />
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