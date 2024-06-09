// const showList = [
//   {
//     date: "Mon Sept 09 2024",
//     venue: "Ronald Lane",
//     location: "San Fransico, CA",
//     button: "BUY TICKETS",
//   },
//   {
//     date: "Tue Sept 17 2024",
//     venue: "Pier 3 East",
//     location: "San Fransico, CA",
//     button: "BUY TICKETS",
//   },
//   {
//     date: "Sat Oct 12 2024",
//     venue: "View Lounge",
//     location: "San Fransico, CA",
//     button: "BUY TICKETS",
//   },
//   {
//     date: "Sat Nov 16 2024",
//     venue: "Hyatt Agency",
//     location: "San Fransico, CA",
//     button: "BUY TICKETS",
//   },
//   {
//     date: "Fri Nov 29 2024",
//     venue: "Moscow Center",
//     location: "San Fransico, CA",
//     button: "BUY TICKETS",
//   },
//   {
//     date: "Wed Dec 18 2024",
//     venue: "Press Club",
//     location: "San Fransico, CA",
//     button: "BUY TICKETS",
//   },
// ];

// function insertData() {
//   let table = document.getElementById("datas");
//   table.innerHTML = "";
//   let tr = "";
//   showList.forEach((x) => {
//     tr += '<tr class="shows__table-elem">';
//     tr +=
//       '<td class="shows__table-elem-td shows__table-elem-td-bold">' +
//       x.date +
//       "</td>" +
//       '<td class="shows__table-elem-td">' +
//       x.venue +
//       "</td>" +
//       '<td class="shows__table-elem-td">' +
//       x.location +
//       "</td>" +
//       '<td class="shows__table-elem-td">' +
//       '<button class="shows__element-button">' +
//       x.button +
//       "</button>" +
//       "</td>";
//     tr += "</tr>";
//   });
//   table.innerHTML += tr;
// }
// insertData();

// function insertDataMobile() {
//   let showsMobile = document.getElementById("data");
//   showsMobile.innerHTML = "";
//   let div = "";
//   showList.forEach((x) => {
//     div += '<div class="shows__element">';
//     div +=
//       '<p class="shows__element-title">' +
//       "DATE" +
//       "</p>" +
//       '<p class="shows__element-bold-text shows__element-padding">' +
//       x.date +
//       "</p>" +
//       '<p class="shows__element-title">' +
//       "VENUE" +
//       "</p>" +
//       '<p class="shows__element-padding">' +
//       x.venue +
//       "</p>" +
//       '<p class="shows__element-title">' +
//       "Location" +
//       "</p>" +
//       '<p class="shows__element-padding">' +
//       x.location +
//       "</p>" +
//       '<button class="shows__element-button">' +
//       x.button +
//       "</button>";

//     div += '</div class="shows__element">';
//   });
//   showsMobile.innerHTML += div;
// }
// insertDataMobile();
import  {apiCall} from "./band-site-api.js";

function insertData() {
  const table = document.querySelector(".shows__table-body-wrapper");
  showList.forEach((x) => {

    const bioElementContainer = document.createElement('tr');
    bioElementContainer.classList.add("shows__table-elem");
    table.appendChild(bioElementContainer);

    const elementDate = document.createElement('td');
    elementDate.classList.add("shows__table-elem-td");
    elementDate.classList.add("shows__table-elem-td-bold");
    elementDate.innerText = x.date;
    bioElementContainer.appendChild(elementDate);

    const elementVenue = document.createElement("td");
    elementVenue.classList.add("shows__table-elem-td");
    elementVenue.innerText = x.venue;
    bioElementContainer.appendChild(elementVenue);

    const elementLocation = document.createElement("td");
    elementLocation.classList.add("shows__table-elem-td");
    elementLocation.innerText = x.location;
    bioElementContainer.appendChild(elementLocation);

    const elementButtonWrapper = document.createElement("td");
    elementButtonWrapper.classList.add("shows__table-elem-td");
    bioElementContainer.appendChild(elementButtonWrapper);
    
    const elementButton = document.createElement("button");
    elementButton.classList.add("shows__element-button");
    elementButton.innerText = "Buy Tickets";
    elementButtonWrapper.appendChild(elementButton);
  });
}

insertData();

function insertDataMobile() {
  const showsMobile = document.querySelector(".shows__wrapper");
  showList.forEach((x) => {
    const showsElementContainer = document.createElement('div');
    showsElementContainer.classList.add("shows__element");
    showsMobile.appendChild(showsElementContainer);

    const showsDateTitle = document.createElement('p');
    showsDateTitle.classList.add("shows__element-title");
    showsDateTitle.innerText ="DATE";
    showsElementContainer.appendChild(showsDateTitle);

    const showsDate = document.createElement('p');
    showsDate.classList.add("shows__element-bold-text");
    showsDate.classList.add("shows__element-padding");
    showsDate.innerHTML = x.date;
    showsElementContainer.appendChild(showsDate);

    const showsVenueTitle = document.createElement('p');
    showsVenueTitle.classList.add("shows__element-title");
    showsVenueTitle.innerHTML ="Venue";
    showsElementContainer.appendChild(showsVenueTitle);

    const showsVenue = document.createElement('p');
    showsVenue.classList.add("shows__element-padding");
    showsVenue.innerHTML = x.venue;
    showsElementContainer.appendChild(showsVenue);

    const showsLocationTitle = document.createElement('p');
    showsLocationTitle.classList.add("shows__element-title");
    showsLocationTitle.innerHTML = "Location";
    showsElementContainer.appendChild(showsLocationTitle);

    const showsLocation = document.createElement('p');
    showsLocation.classList.add("shows__element-padding");
    showsLocation.innerHTML = x.location;
    showsElementContainer.appendChild(showsLocation);

    const showsButton = document.createElement('button');
    showsButton.classList.add("shows__element-button");
    showsButton.innerHTML = "BUY TICKETS";
    showsElementContainer.appendChild(showsButton);
  });

}

insertDataMobile();