// const comments = [
//   {
//     name: "Victor Pinto",
//     comment:
//       "This is art. This is iexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverance. Let us appreciate this for what it is and what it contains",
//     date: "11/02/23",
//   },
//   {
//     name:"Christina Cabrera",
//     comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//     date: "10/28/2023",
//   },
//   {
//     name: "Isaac Tadesse",
//     comment: "I can t stop listening. Every time I hear one of their songs the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
//     date: "10/20/2023",
//   }
// ];

import  {apiCall} from "./band-site-api.js";
const dataComment = await apiCall.getComments();
dataComment.sort((a, b) => b.timestamp - a.timestamp);
console.log(dataComment);

function convertDate(Timestamp) {
  const date = new Date(Timestamp);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString(undefined, options);
}


const form = document.getElementById("commentForm");
form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const nameValue = e.target.name.value;
    const commentValue = e.target.comment.value;
    const dataToObject = {
        name: nameValue,
        comment: commentValue,
        timestamp: new Date().toLocaleDateString(),
        
    };
    const dataToObjectApi = {
      name: nameValue,
      comment: commentValue,
      
  };
    await apiCall.postComment(dataToObjectApi);
    dataComment.unshift(dataToObject);
    form.reset();
    insertDataComments();
});
console.log()

// function insertDataComments() {
//     let commentsBio = document.getElementById("data");
//     commentsBio.innerHTML = "";
//     let div = "";
//     comments.forEach((x) => {
//       div += '<div class="comment-section__container">';
//       div +=
//         '<img class= "comment-section__img">'+
//         '</img>'+
//         '<div class="comment-section__wrapper">'+
//         '<div class ="comment-section__name-date-wrapper">' +
//         '<p class="comment-section__name">' +
//         x.name +
//         "</p>" +
//         '<p class="comment-section__date">' +
//         x.date +
//         "</p>" +
//         "</div>" +
//         '<p class="comment-scetion__comment">' +
//         x.comment +
//         "</p>" +
//         "</div>"
  
//       div += '</div class="shows__element">';
//     });
//     commentsBio.innerHTML += div;
//   }
//   insertDataComments();

function insertDataComments() {
  const commentsBio = document.querySelector(".comment-section");
      commentsBio.innerHTML = "";
      dataComment.forEach((x) => {
        const commentDataContainer = document.createElement('div');
        commentDataContainer.classList.add("comment-section__container");
        commentsBio.appendChild(commentDataContainer);

        const userImg = document.createElement('img');
        userImg.classList.add("comment-section__img");
        // userImg.src = x.avatar;
        commentDataContainer.appendChild(userImg);

        const commentDataWrapper = document.createElement('div');
        commentDataWrapper.classList.add("comment-section__wrapper");
        commentDataContainer.appendChild(commentDataWrapper);

        const commentDataNameDate = document.createElement('div');
        commentDataNameDate.classList.add("comment-section__name-date-wrapper");
        commentDataWrapper.appendChild(commentDataNameDate);

        const commentDataName = document.createElement('p');
        commentDataName.classList.add("comment-section__name");
        commentDataName.innerText =  x.name;
        commentDataNameDate.appendChild(commentDataName);

        const commentDataDate = document.createElement('p');
        commentDataDate.classList.add("comment-section__date");
        commentDataDate.innerText =  convertDate(x.timestamp);
        commentDataNameDate.appendChild(commentDataDate);

        const commentDataComment = document.createElement('p');
        commentDataComment.classList.add("comment-section__comment");
        commentDataComment.innerText =  x.comment;
        commentDataWrapper.appendChild(commentDataComment);
});

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