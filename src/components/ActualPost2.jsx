import { useState } from "react";
function ActualPost2() {

  const [posts, setPosts] = useState([
    {
      id: 5,
      time: "5 hours ago",
      text: "Lorem ipsum dolor sit ",
      images: [],
    },
    {
      id: 3,
      time: "23 hours ago",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: ["image-post-1.jpg"],
    },
    {
      id: 3,
      time: "23 hours ago",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: ["image-post-1.jpg"],
    },
    {
      id: 3,
      time: "23 hours ago",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: ["image-post-1.jpg", "image-post-2.jpg"],
    },
    {
      id: 2,
      time: "23 hours ago",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: [
        "image-post-1.jpg",
        "image-post-2.jpg",
        "image-post-1.jpg",
        "image-post-2.jpg",
      ],
    },
  ]);
  return (
    <>
      {posts.map((post, id) => (
          <div className="one-post" key={id}>
            <div className="post-metadata">
              <div className="metadata-left">
                <img src="profile.jpg" alt="profile photo" />
                <div className=" uname-time">
                  <p className="user-name">User Name</p>
                  <p>
                    <span>@name</span>
                    <span> - {post.time}</span>
                  </p>
                </div>
              </div>
              <div className="metadata-right">
                <i className="fas fa-share mgn-05"></i>
                <i className="fas fa-ellipsis-vertical mgn-05"></i>
              </div>
            </div>

            <div className="post-content">
              <p>{post.text}</p>
              <div className="post-images">
                {post.images.map((image, id) => {
                  return (
                    <img src={image} alt="image" id="image-post" />
                  );
                })}
              </div>
            </div>

            <div className="post-actions">
              <div>
                <i className="fas fa-comment-alt"></i>
                <span className="mgn-05">3</span>
              </div>
              <div>
                <i className="fas fa-heart"></i>
                <span className="mgn-05">3</span>
              </div>
              <div>
                <i className="fas fa-thumbs-down"></i>
                <span className="mgn-05">0</span>
              </div>
              <div>
                <i className="fas fa-share-alt"></i>
                <span className="mgn-05">0</span>
              </div>
            </div>
            <div className="post-replies">
              <img src="profile.jpg" alt="profile photo" />
              <div className="reply-methods border">
                <input type="text" placeholder="Reply..." />
                <i className="fas fa-microphone mgn-010"></i>
                <i className="fas fa-camera"></i>
                <i className="fas fa-smile mgn-010"></i>
              </div>
              <button>Send</button>
            </div>
          </div>
        ))}
    </>
  );
}

export default ActualPost2