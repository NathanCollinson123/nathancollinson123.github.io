// controller that would respond to button events
//so pressing on a project button would show the project div
//and hide the other divs

window.addEventListener("load",init);
function init(){
    bindEvents();
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

function loadProjects(){
    projectSearch.projects.push(new Project("nightCalc","This is the asdf for nightCalc",["imgs/nightCalc"]));
    projectSearch.projects.push(new Project("chapsChallenge","This is the description for chapsChallenge",["img/chapsChallenge.png"]));

}

function bindEvents(){
    document.querySelector("#nightCalc").addEventListener("click",function() {
        updateProject("nightCalc");
    });
    document.querySelector("#chapsChallenge").addEventListener("click",function() {
        updateProject("chapsChallenge");
    });
}

function updateProject(project){
    document.getElementById("projectName").innerText = projectSearch.searchProject(project)[0].name;
    document.getElementById("projectDescription").innerText  = projectSearch.searchProject(project)[0].desc;
}