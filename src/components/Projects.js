const projects = [
{ title: 'Project 1', description: 'This is project 1.' },
{ title: 'Project 2', description: 'This is project 2.' },
{ title: 'Project 3', description: 'This is project 3.' },
{ title: 'Project 4', description: 'This is project 4.' },
];
function Projects() {
return (
<div className="projects-grid">
{projects.map((project, index) => (
<div key={index} className="project-card">
<h3>{project.title}</h3>
<p>{project.description}</p>
</div>
))}
</div>
);
}

export default Projects;