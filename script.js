const arrowButton = document.getElementById("arow");
arrowButton.addEventListener("click", function() {
  const classesToToggle = ["first1", "second2", "hai", "shit"];
  classesToToggle.forEach(function(className) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.style.display === "none") {
        element.style.display = "";
      } else {
        element.style.display = "none";
      }
    }
  });
});

// var touch = document.querySelector('.sidebar');
// var black = document.querySelector('.black');
// var white = document.querySelector('.white');
// var text = document.querySelectorAll('.close');

// let counter = 0;

// function handleClick() {
//     if (counter % 2 == 0) {

//         black.style.width = '9vw';
//         white.style.width = '9vw';
//         text.forEach(function(item) {
//             item.style.display = 'none';
//         })
//     } else {
//         black.style.width = '31vw';
//         white.style.width = '31vw';
//         text.style.transitionDelay = '.8s'
//         text.forEach(function(item) {
//             item.style.display = 'block';
//         })
//     }

//     counter += 1;
// }

// touch.addEventListener('click', handleClick);

// var touch = document.querySelector('.sidebar');
// var black = document.querySelector('.black');
// var white = document.querySelector('.white');
// var text = document.querySelectorAll('.close');

// let isToggled = false;

// function handleClick() {
//     isToggled = !isToggled;

//     if (isToggled) {
//         black.classList.add('right-position');
//         white.classList.add('right-position');
//     } else {
//         black.classList.remove('right-position');
//         white.classList.remove('right-position');
//     }
// }

// touch.addEventListener('click', handleClick);

var jsonData = {
    "tasks": [
      {
        "task_id": 18882,
        "task_title": "Explore the world of management",
        "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "status": "notworkyet",
        "assets": [
          {
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
          },
          {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
          },
          {
            "asset_id": 18885,
            "asset_title": "Structure your pointers",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "article"
          },
          {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
          }
        ]
      }
    ]
  };
  
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
  
  








