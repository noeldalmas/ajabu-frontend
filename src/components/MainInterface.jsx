import AsideNoImaage from "./AsideNoImaage"
import ImagedAside from "./ImagedAside"

function MainInterface() {
  return (
    <main>
      <div className="left-side">
        <section className="side-no-image">
          <AsideNoImaage />
        </section>
        <section className="imaged-side"></section>
      </div>
      <div className="middle-part">
        <nav className="up-middle-nav">
          <span>All</span>
          <span>Following</span>
          <span>Events</span>
          <span>Questions</span>
          <span>Pages</span>
        </nav>
        <div className="down-middle">Something</div>
      </div>
      <div className="right-side">
        <ImagedAside />
      </div>
    </main>
  );
}

export default MainInterface