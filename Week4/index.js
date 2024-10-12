const projects =['Project 1: Pizza Place', 'Project 2: Portfolio Webpage', 'Project 3: Capstone Webpage']

document.addEventListener('DOMContentLoaded', () => {
  projects;

  const projectListId = document.getElementById('project-list');

  // for (let project of projects) {
  //   const listItem = document.createElement('li');
  //   listItem.textContent = project;
  //   projectListId.appendChild(listItem);
  // }

  projects.forEach(project => {
   const li = document.createElement('li');
     li.textContent = project;
     projectListId.appendChild(li);
  });

});

