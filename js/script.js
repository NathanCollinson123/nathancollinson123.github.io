// controller that would respond to button events
//so pressing on a project button would show the project div
//and hide the other divs

window.addEventListener("load",init);
function init(){
    initProjectController();
    loadProjects();
}


const projectSearch = {
    projects: [],
    searchProject(projectName){
        return this.projects.filter(project => project.name === projectName);
    },
    selectProject(projectName){
        this.projects.forEach(project => {
            if(project.name === projectName){
                project.toggle();
            }
        });
    },
};

function initProjectController() {
    bindEvents();
}
  

function loadProjects() {
    projectSearch.projects.push(
      new Project("Night Calc", "nightCalc", "This is the description for nightCalc", ["imgs/nightCalc"])
    );
    projectSearch.projects.push(
      new Project("Chaps Challenge", "chapsChallenge", "This is the description for Chaps Challenge", ["img/chapsChallenge.png"])
    );
  
    initProjectController(); // Call the function to initialize event listeners
}
  

function bindEvents() {
    // Remove existing event listeners
    document.querySelector("#nightCalc").removeEventListener("click", handleProjectClick);
    document.querySelector("#chapsChallenge").removeEventListener("click", handleProjectClick);
  
    // Bind updated event listeners
    document.querySelector("#nightCalc").addEventListener("click", handleProjectClick);
    document.querySelector("#chapsChallenge").addEventListener("click", handleProjectClick);
}

function handleProjectClick(event) {
    var projectKey = event.currentTarget.id;
    var project = projectSearch.searchProject(projectKey)[0];
  
    document.getElementById("projectName").innerText = project.title;
    document.getElementById("projectDescription").innerText = project.desc;
}

// Wrap your event listener code in a function
function setupCarouselUpdatedEvent() {
    var carousel = document.querySelector('.js-carousel');
    if (carousel) {
      carousel.addEventListener('carousel-updated', function(event) {
        initProjectController();
      });
    }
}

  // Call the setupCarouselUpdatedEvent function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    setupCarouselUpdatedEvent();

});
