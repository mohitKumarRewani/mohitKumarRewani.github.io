const arrowButton = document.getElementById("arow");
arrowButton.addEventListener("click", function () {
    arrowButton.style.transform = 'rotate(360deg)';
    const classesToToggle = ["first1", "second2", "hai", "shit"];
    classesToToggle.forEach(function (className) {
        const elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.style.display === "none") {
                element.style.display = "";
            } else {
                arrowButton.style.transform = 'rotate(180deg)';
                element.style.display = "none";
            }
        }
    });
});


var img = document.querySelector('.i');
var r_sidebar = document.querySelector('.right-sidebar');

let isToggle = false;

function handleClick() {
    isToggle = !isToggle;

    if (isToggle) {

        r_sidebar.style.transform = 'translate(0%, 35%)';
    } else {
        r_sidebar.style.transform = 'translate(74%, 35%)';
    }
}

var aow = document.querySelector('.l-arow');
var black = document.querySelector('.black');
var white = document.querySelector('.white');
var crt = document.querySelector('.crt');
var ul = document.querySelector("#white-ul");

let isToggle2 = false;

function handleClickLeft() {
    isToggle2 = !isToggle2;

    if (isToggle2) {
        black.style.transform = 'translateX(0%)';
        white.style.transform = 'translateX(0%)';
        crt.style.opacity = '0';
        ul.style.opacity = '1';

    } else {
        black.style.transform = 'translateX(-72%)';
        white.style.transform = 'translateX(-72%)';
        crt.style.opacity = '1';
        ul.style.opacity = '0';
    }
}

aow.addEventListener('click', handleClickLeft);
img.addEventListener('click', handleClick);


// Fetch the JSON data from the test.json file
fetch('test.json')
    .then(response => response.json())
    .then(jsonData => {
        // Accessing the task title and description
        var taskTitle = jsonData.tasks[0].task_title;
        var taskDescription = jsonData.tasks[0].task_description;

        // Appending the values to html
        document.getElementById("taskTitle").innerText = taskTitle;
        document.getElementById("taskDescription").innerText = taskDescription;

        var assets = jsonData.tasks[0].assets;
        var desElements = document.getElementsByClassName('des');

        // Loop through the desElements and assign corresponding asset_description
        Array.from(desElements).forEach((desElement, index) => {
            if (index < assets.length) {
                var asset = assets[index];
                var h5 = document.createElement('h5');
                var span = document.createElement('span');
                span.textContent = "Description: ";
                var descriptionText = document.createTextNode(asset.asset_description);
                h5.appendChild(span);
                h5.appendChild(descriptionText);
                desElement.appendChild(h5);
            }
        });
    })
    .catch(error => console.log(error));



  








