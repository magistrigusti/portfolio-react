import {useParams} from "react-router-dom";
import BtnGitHub from "../btnGitHub/BtnGitHub";
import {projects} from "./../../helpers/projectsList";
import img from "./../../img/projects/02-big.jpg";


const Project = () => {
  const {id} = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{project.title}</h1>
          
          <img src={project.imgBig} alt={project.title} className="project-details__cover" />

            <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
            </div>

            <BtnGitHub link="https://github.com/magistrigusti/portfolio-react" />

        </div>
      </div>
    </main>
  );
}

export default Project;