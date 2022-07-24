import Navbar from "../components/Navbar";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1>Here are a few of my projects</h1>
        <div className="projectContainer">
          <div className="projectText">
            <h1 className="projectTitle">Fake Instagram</h1>
            <h2>text text text</h2>
          </div>
          <div>
            <div className="player">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FmDe9hQfXco"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectText">
            <h1 className="projectTitle">Fake Instagram</h1>
            <h2>text text text</h2>
          </div>
          <div>
            <div className="player">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FmDe9hQfXco"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
