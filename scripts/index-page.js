const comments = [
  {
    name: "Victor Pinto",
    comment:
      "This is art. This is iexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverance. Let us appreciate this for what it is and what it contains",
    date: "11/02/23",
  },
  {
    name:"Christina Cabrera",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "10/28/2023",
  },
  {
    name: "Isaac Tadesse",
    comment: "I can t stop listening. Every time I hear one of their songs the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
    date: "10/20/2023",
  }
];

const form = document.getElementById("commentForm");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nameValue = e.target.name.value;
    const commentValue = e.target.comment.value;
    const dataToObject = {
        name: nameValue,
        comment: commentValue,
        date: new Date().toLocaleDateString(),
    };
    comments.unshift(dataToObject);
    form.reset();
    insertDataComments();
});

function insertDataComments() {
    let commentsBio = document.getElementById("data");
    commentsBio.innerHTML = "";
    let div = "";
    comments.forEach((x) => {
      div += '<div class="comment-section__container">';
      div +=
        '<img class= "comment-section__img">'+
        '</img>'+
        '<div class="comment-section__wrapper">'+
        '<div class ="comment-section__name-date-wrapper">' +
        '<p class="comment-section__name">' +
        x.name +
        "</p>" +
        '<p class="comment-section__date">' +
        x.date +
        "</p>" +
        "</div>" +
        '<p class="comment-scetion__comment">' +
        x.comment +
        "</p>" +
        "</div>"
  
      div += '</div class="shows__element">';
    });
    commentsBio.innerHTML += div;
  }
  insertDataComments();

//   const commentName = document.createElement('p');

//     commentName.classList.add(".comments-section__name");

//     commentName.innerText = x.name;

//     const commentComment = document.createElement('p');

//     commentName.classList.add(".comments-section__name");

//     commentName.innerText = x.name;

// // -------------------------------------------------------------------------------------------

// const commentDataWrapper = document.createElement('div');
// commentDataWrapper.classList.add(".comments-section__name-date-wrapper");

// const commentName = document.createElement('p');
// commentName.classList.add(".comments-section__name");
// commentName.innerText = x.name;

// commentDataWrapper.appendChild(commentName);

// function insertDataComments() {
//     let commentsBio = document.getElementById("data");
//     comments.forEach((x) => {
//         const commentDataWrapper = document.createElement('div');
//         commentDataWrapper.classList.add(".comments-section__name-date-wrapper");
        
//         const commentName = document.createElement('p');
//         commentName.classList.add(".comments-section__name");
//         commentName.innerText = x.name;
        
//         commentDataWrapper.appendChild(commentName);
//         commentsBio.insertBefore(commentDataWrapper, commentName);
  
//     });
//     console.log(insertDataComments);
//   }
//   insertDataComments();