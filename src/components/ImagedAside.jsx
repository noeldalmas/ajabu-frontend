function ImagedAside() {
  const imagedside = [
    {
      id: 1,
      name: "Question1",
      img: "profile.jpg",
    },
    {
      id: 2,
      name: "Question2",
      img: "profile.jpg",
    },
    {
      id: 3,
      name: "Question3",
      img: "profile.jpg",
    },
    {
      id: 4,
      name: "Question4",
      img: "profile.jpg",
    },
    {
      id: 5,
      name: "Question5",
      img: "profile.jpg",
    },
  ];
  return (
    <>
      <h3 className="trend-title">Most Active Questions</h3>
      <div>
        {imagedside.map((trend, id) => {
          return (
            <div key={id}>
              <p className="active-qns">
                <img src={trend.img} alt="photo" />
                <span>#{trend.name}</span>
              </p>
            </div>
          );
        })}
      </div>
      <p className="show-more">Show more</p>
    </>
  );
}

export default ImagedAside;
