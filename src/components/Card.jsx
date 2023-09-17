function Card() {
  const cardData = [
    {
      id: "tg01",
      profile: "profile.jpg",
      groupName: "Page Meme",
      groupDescription: "Happy Times Memes",
    },
    {
      id: "tg02",
      profile: "profile.jpg",
      groupName: "Page Meme",
      groupDescription: "Happy Times Memes",
    },
    {
      id: "tg03",
      profile: "profile.jpg",
      groupName: "Page Meme",
      groupDescription: "Happy Times Memes",
    },
    {
      id: "tg04",
      profile: "profile.jpg",
      groupName: "Page Meme",
      groupDescription: "Happy Times Memes",
    },
    {
      id: "tg05",
      profile: "profile.jpg",
      groupName: "Page Meme",
      groupDescription: "Happy Times Memes",
    },
  ];

  return (
    <div className="card">
      <h3 className="trend-title">Most Trending Groups</h3>
      {
        cardData.map((data,id)=>{
          return (
            <>
            <div className="c-box">
            <div key={id} className="c-data">
              <img className="profile-img" src={data.profile} alt="" />
              <div className="c-details">
                <span className="g-name">{data.groupName}</span>
                <p className="description">{data.groupDescription}</p>
              </div>
            </div>
            </div>
            </>      
          );
        }
        )
      }
    </div>
  );
}

export default Card;
