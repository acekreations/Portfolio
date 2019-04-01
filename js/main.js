//Portfolio section logic
const portfolioBtn = document.getElementById("portfolioBtn");
const portfolioContainer = document.getElementById("portfolioContainer");
const projectInfo = document.getElementById("projectInfo");
const portfolioMenuItems = portfolioMenu.querySelectorAll("li");
const portfolioArrowForward = document.getElementById("portfolioArrowForward");
const portfolioArrowBackward = document.getElementById(
    "portfolioArrowBackward"
);
let currentProjectKey = 0;

//remove portfolio animation meant only for when landing on site
setTimeout(function() {
    portfolioContainer.classList.remove("animated", "fadeIn", "delay-1s");
}, 2000);

portfolioBtn.addEventListener("click", function(e) {
    e.preventDefault();

    closeAllContainers();

    portfolioContainer.style.display = "flex";

    //load first project
    getProjectData(portfolioMenuItems[0]);
});

portfolioMenuItems.forEach(function(elem, key) {
    elem.dataset.key = key;
    elem.addEventListener("click", function() {
        getProjectData(this);
    });
});

portfolioArrowForward.addEventListener("click", function() {
    if (currentProjectKey < portfolioMenuItems.length - 1) {
        const key = parseInt(currentProjectKey) + 1;
        getProjectData(portfolioMenuItems[key]);
    } else {
        getProjectData(portfolioMenuItems[0]);
    }
});
portfolioArrowBackward.addEventListener("click", function() {
    if (currentProjectKey > 0) {
        const key = parseInt(currentProjectKey) - 1;
        getProjectData(portfolioMenuItems[key]);
    } else {
        getProjectData(portfolioMenuItems[portfolioMenuItems.length - 1]);
    }
});

function getProjectData(elem) {
    const name = elem.dataset.name;
    const github = elem.dataset.github;
    const link = elem.dataset.link;
    const role = elem.dataset.role;
    const tech = elem.dataset.tech;
    const description = elem.dataset.description;
    const image = elem.dataset.image;
    displayProject(name, github, link, role, tech, description, image);
    selectedProjectUnderline(elem);

    //set project key
    const key = elem.dataset.key;
    currentProjectKey = key;
}

function displayProject(name, github, link, role, tech, description, image) {
    document.getElementById("projectName").textContent = name;
    document.getElementById("projectLink").href = link;
    document.getElementById("projectRole").textContent = role;
    document.getElementById("projectTech").textContent = tech;
    document.getElementById("projectDescription").textContent = description;
    document.getElementById("projectImage").src = "/images/portfolio/" + image;

    const projectGithub = document.getElementById("projectGithub");
    if (github.length <= 0) {
        projectGithub.href = "";
        projectGithub.innerHTML =
            "<i class='fas fa-eye-slash'></i> Source Private";
    } else {
        projectGithub.href = github;
        projectGithub.innerHTML = "<i class='fab fa-github'></i> View Source";
    }
}

function selectedProjectUnderline(clickeElem) {
    portfolioMenuItems.forEach(function(elem) {
        elem.classList.remove("selected");
    });
    clickeElem.classList.add("selected");
}

//About section logic
const aboutBtn = document.getElementById("aboutBtn");
const aboutContainer = document.getElementById("aboutContainer");

aboutBtn.addEventListener("click", function(e) {
    e.preventDefault();
    closeAllContainers();

    aboutContainer.style.display = "flex";
});

//Contact section logic
const contactBtn = document.getElementById("contactBtn");
const contactContainer = document.getElementById("contactContainer");

contactBtn.addEventListener("click", function(e) {
    e.preventDefault();
    closeAllContainers();

    contactContainer.style.display = "flex";
});

//Site wide logic
function closeAllContainers() {
    aboutContainer.style.display = "none";
    portfolioContainer.style.display = "none";
    contactContainer.style.display = "none";
}
