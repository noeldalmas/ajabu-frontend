
function AsideNoImaage({trend}) {
    
  return (
    <section className="side aside-no-image bg-white">
      <div className="aside-trend-card">
        <h3>Most Trending</h3>
        <div>
          <i className="fas fa-credit-card mgn-05"></i>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div>
        {trend.map((trend, id) => {
          return <p key={id} className="trends">#{trend.name}</p>;
        })}
        <p className="show-more">Show more</p>
      </div>
    </section>
  );
}

export default AsideNoImaage