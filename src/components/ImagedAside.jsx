function ImagedAside() {
  const imagedside = [
    {
      id: 1,
      name: "Trend1",
      img: "profile.jpg",
    },
    {
      id: 2,
      name: "Trend2",
      img: "profile.jpg",
    },
    {
      id: 3,
      name: "Trend3",
      img: "profile.jpg",
    },
    {
      id: 4,
      name: "Trend4",
      img: "profile.jpg",
    },
    {
      id: 5,
      name: "Trend5",
      img: "profile.jpg",
    },
  ];
  return (
    <>
      <h4 className="trend-title">Most Active Questions</h4>
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
