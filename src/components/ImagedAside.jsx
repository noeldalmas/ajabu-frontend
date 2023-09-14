
function ImagedAside() {
     const imagedside = [
        {
            id: 'title',
            title: "Most Active Questions",
        },
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
        <h3>Most Active Questions</h3>
      <div className="">
        {imagedside.map((trend, id) => {
            if (trend.id === 'title') {
                return <span key={id}>{trend.title}</span>
            }
            return (
              <div key={id}>
                <div className="border">
                  <img src={trend.img} alt="photo" />
                  <span>#{trend.name}</span>
                </div>
              </div>
            );
        })}
      </div>
    </>
  );
}

export default ImagedAside