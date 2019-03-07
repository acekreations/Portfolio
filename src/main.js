const portfolioBtn = document.getElementById("portfolioBtn");
// const portfolioMenu = document.getElementById("portfolioMenu");
const portfolioContainer = document.getElementById("portfolioContainer");
const projectInfo = document.getElementById("projectInfo");
const portfolioMenuItems = portfolioMenu.querySelectorAll("li");
const portfolioArrowForward = document.getElementById("portfolioArrowForward");
const portfolioArrowBackward = document.getElementById(
    "portfolioArrowBackward"
);
let portfolioOpen;
let currentProjectKey = 0;

portfolioBtn.addEventListener("click", function(e) {
    e.preventDefault();

    if (portfolioOpen) {
        closePortfolio();
    } else {
        portfolioContainer.style.display = "flex";
        portfolioOpen = true;

        //load first project
        getProjectData(portfolioMenuItems[0]);
    }
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

// portfolioBtn.addEventListener("click", function(e) {
//     e.preventDefault();

//     if (portfolioOpen) {
//         closePortfolio();
//     } else {
//         //remove menu container animation classes
//         portfolioMenu.style.display = "flex";
//         portfolioMenu.classList.remove("fadeOut");
//         portfolioMenu.classList.add("fadeIn");

//         ////remove menu item animation classes
//         for (i = 0; i < portfolioLI.length; i++) {
//             portfolioLI[i].classList.remove("animated", "zoomOut");
//         }

//         //create and shuffle array of random nums
//         let shuffleArr = [];
//         for (i = 0; i < portfolioLI.length; i++) shuffleArr.push(i);
//         shuffleArr = shuffle(shuffleArr);
//         let count = 0;
//         //animate each menu item at a random time
//         function zoomIn() {
//             if (count >= portfolioLI.length) {
//                 return;
//             }

//             portfolioLI[shuffleArr[count]].classList.add(
//                 "animated",
//                 "zoomIn",
//                 "fast"
//             );
//             portfolioLI[shuffleArr[count]].style.opacity = "1";

//             count++;
//             const interval = Math.random() * (100 - 25) + 25;
//             setTimeout(zoomIn, interval);
//         }
//         zoomIn();

//         portfolioOpen = true;
//     }
// });

//handle portfolio display for each li element
// portfolioLI.forEach(function(elem) {
//     elem.addEventListener("click", function() {
//         const name = this.dataset.name;
//         showPortfolioDisplay(name);
//     });
// });

// function showPortfolioDisplay(name) {
//     const portfolioDisplay = document.getElementById("portfolioDisplay");

//     function updateText(name) {
//         portfolioDisplay.querySelector("#name").textContent = name;
//     }

//     if (!portfolioDisplayOpen) {
//         portfolioDisplay.style.display = "block";
//         portfolioDisplay.classList.add("animated", "fadeInRightBig");
//         portfolioDisplayOpen = true;
//         updateText(name);
//     } else {
//         updateText(name);
//     }
// }

function closePortfolio() {
    //toggle menu container animation classes
    // portfolioMenu.classList.remove("zoomIn");
    // portfolioMenu.classList.add("fadeOut");

    portfolioContainer.style.display = "none";
    // portfolioDisplay.classList.remove("animated", "fadeInRightBig");

    //toggle menu item animation classes
    // for (i = 0; i < portfolioLI.length; i++) {
    //     portfolioLI[i].classList.remove("animated", "zoomIn", "fast");
    //     portfolioLI[i].classList.add("animated", "zoomOut");
    //     portfolioLI[i].style.opacity = "0";
    // }

    portfolioOpen = false;
    // portfolioDisplayOpen = false;
}

function shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}
