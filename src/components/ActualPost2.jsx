import { useState } from "react";

function ActualPost2({posts}) {

  const [showComments, setShowComments] = useState(false);

  const handleMessageReply = () => {
    setShowComments(true);
  }

  const handleCloseMessageReply = () => {
    setShowComments(false);
  }


 
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
                const imageClass =
                  post.images.length === 1
                    ? "image-post full-width"
                    : "image-post";
                return (
                  <img
                    src={image}
                    alt="image"
                    className={imageClass}
                    key={id}
                  />
                );
              })}
            </div>
          </div>

          <div className="post-actions">
            {showComments ? (
              <i className="fas fa-close red" onClick={handleCloseMessageReply}></i>
            ) : (
              <div>
                <i
                  className="fas fa-comment-alt"
                  onClick={handleMessageReply}
                ></i>
                <span className="mgn-05">3</span>
              </div>
            )}

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
          {showComments && <div className="post-comments border">Comments</div>}
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