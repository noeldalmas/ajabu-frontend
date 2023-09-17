function Card() {
  const trendingGroups = [
    {
      id: "tg01",
      profile: "profile.jpg",
      groupName: "Page Meme",
      groupDescription: "Lorem",
    },
  ];
  return (
    <>
      <div className="metadata-left tdata">
        <img src="profile.jpg" alt="profile photo" />
        <div className=" uname-time">
          <p className="user-name">Page Meme</p>
            <span>Group Description</span>
        </div>
      </div>

      <div className="metadata-left tdata">
        <img src="profile.jpg" alt="profile photo" />
        <div className=" uname-time">
          <p className="user-name">Page Meme</p>
            <span>Group Description</span>
        </div>
      </div>
    </>
  );
}

export default Card;
