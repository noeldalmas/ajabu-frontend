
function AsideMaster({title, data}) {
 
  const handleShowMore = () => {

  }
  
  return (
    <section className="side img-1-side  bg-white">
      <h3 className="trend-title">{title}</h3>
      <ShowMoreItems data={data} />
      <button className="show-more" onClick={handleShowMore}>Show more</button>
      
    </section>
  );
}

const ShowMoreItems = ({data}) => {
  return (
    <>
      {data.map((data, index) => {
        if (index <= 4)
          return (
            <div key={index} className="metadata-left active-qns">
              <img src={data.img} alt="profile photo" />
              <div className=" uname-time">
                <p className="user-name">{data.name}</p>
                <p>{data.description && data.description}</p>
              </div>
            </div>
          );
      })}
    </>
  );
}

export default AsideMaster;
