
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
      <div className="aside-trend-card">
        <h3>Most Trending</h3>
        <div>
          <i className="fas fa-credit-card mgn-05"></i>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div>
        {trending.map((trend, id) => {
          return <p key={id} className="trends">#{trend.name}</p>;
        })}
        <p className="show-more">Show more</p>
      </div>
    </>
  );
}

export default AsideNoImaage