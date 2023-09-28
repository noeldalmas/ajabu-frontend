import { useState } from "react";
import Modal from "./Modal";

function AsideMaster({ title, data }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };
  const handleCloseShowMore = () => {
    setShowMore(false);
  };

  return (
    <section className="side img-1-side  bg-white sticky">
      <h3 className="trend-title">{title}</h3>
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
      <button className="show-more" onClick={handleShowMore}>
        Show More
      </button>

      <Modal isOpen={showMore} setIsOpen={setShowMore}>
        <ShowMore title={title} data={data} />
        <button className="show-more" onClick={handleCloseShowMore}>
          Close
        </button>
      </Modal>
    </section>
  );
}

const ShowMore = ({ title, data }) => {
  return (
    <>
      <h3 className="trend-title">{title}</h3>
      {data.map((data, index) => {
        // if (showMore || index <= 4)
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
};

export default AsideMaster;
