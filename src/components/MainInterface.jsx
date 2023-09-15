import AsideNoImaage from "./AsideNoImaage"
import ImagedAside from "./ImagedAside"

function MainInterface() {
  return (
    <main>
      <div className="left-side">
        <section className="side">
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
        <div className="side">Something</div>
      </div>
      <div className="right-side">
        <section className="side">
          <ImagedAside />
        </section>
      </div>
    </main>
  );
}

export default MainInterface