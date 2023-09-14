
function AsideNoImaage() {
    const trending = [
        {
            id: 1,
            name: 'Trend1'
        },
        {
            id: 2,
            name: 'Trend2'
        },
        {
            id: 3,
            name: 'Trend3'
        },
        {
            id: 4,
            name: 'Trend4'
        },
        {
            id: 5,
            name: 'Trend5'
        }
        
        
    ]
  return (
    <>
      <div className="flex">
        <h3>Most Trending</h3>
        <div>
          <i className="fas fa-credit-card"></i>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div>
        {trending.map((trend, id) => {
          return <p key={id}>#{trend.name}</p>;
        })}
        <p>Show more</p>
      </div>
    </>
  );
}

export default AsideNoImaage