
const projects_container = document.getElementById("projects-container");

fetch("projects.json")
  .then(responce => responce.json())
  .then(data => {
    data.projects.forEach(project => {
      if (project.link == "none"){

        projects_container.innerHTML += `
      <div class="project-card" onclick="alert('Project is not ready. There is no link yet.')">
      <small class="bubble-left">${project.description}</small>
      <img src="${project.picture}" class="preview-class">
      <div class="title-row">
      <p class="video-name-text">${project.name}</p>
      </div>
      <small style="margin-top: auto; text-align: center;">${project.version}</small></div>`;

      }
      else{

      projects_container.innerHTML += `
      <a href="${project.link}" style="text-decoration: none; color: inherit;">
      <div class="project-card">
      <small class="bubble-left">${project.description}</small>
      <img src="${project.picture}" class="preview-class">
      <div class="title-row">
      <p class="video-name-text">${project.name}</p>
      </div>
      <small style="margin-top: auto; text-align: center;">${project.version}</small></div></a>`;
    
    }
    });
    
  

const cards = document.querySelectorAll(".project-card");


cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => {
      if(c !== card) c.style.transform = 'scale(0.9)';
      else {c.style.transform = 'scale(1.2)'; c.style.boxShadow = "0 0 20px white";
        c.querySelector(".bubble-left").style.transform = "translateX(-100%)";
        c.querySelector(".bubble-left").style.boxShadow = '0 0 20px white';
      }
      //projects_container.innerHTML += `<h1 class="secondary-main-text" style="font-size: 20px; margin-top: 10px;">${project.description}</h1>`;}
    });
  });

  card.addEventListener('mouseleave', () => {
    cards.forEach(c => c.style.transform = 'scale(1)');
    cards.forEach(c => c.style.boxShadow = '0 0 0');
    cards.forEach(c => c.querySelector(".bubble-left").style.transform = "translateX(0)");
    cards.forEach(c => c.querySelector(".bubble-left").style.boxShadow = '0 0 0');

  });
});});
