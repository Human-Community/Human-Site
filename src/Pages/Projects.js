import Project from '../Components/Projects/Project.js'

function Projects(props) {
  var { lang, baseProps } = props;

  return (
    <div id="projects" className="o-wrapper _mvlg o-wrapper--flush">
      <h1 className="_ttu _tac">Nossos principais projetos</h1>
      <div className="">
        {baseProps[lang].projects.map((project, key) => {
          return <Project project={project} key={key} />
        })}
      </div>
    </div>
  );
}

export default Projects;
