const showList = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Fransico, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Fransico, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Fransico, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Fransico, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Fransico, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Fransico, CA",
    button: "BUY TICKETS",
  },
];

function insertData() {
  let table = document.getElementById("datas");
  table.innerHTML = "";
  let tr = "";
  showList.forEach((x) => {
    tr += '<tr class="shows__table-elem">';
    tr +=
      '<td class="shows__table-elem-td shows__table-elem-td-bold">' +
      x.date +
      "</td>" +
      '<td class="shows__table-elem-td">' +
      x.venue +
      "</td>" +
      '<td class="shows__table-elem-td">' +
      x.location +
      "</td>" +
      '<td class="shows__table-elem-td">' +
      '<button class="shows__element-button">' +
      x.button +
      "</button>" +
      "</td>";
    tr += "</tr>";
  });
  table.innerHTML += tr;
}
insertData();

function insertDataMobile() {
  let showsMobile = document.getElementById("data");
  showsMobile.innerHTML = "";
  let div = "";
  showList.forEach((x) => {
    div += '<div class="shows__element">';
    div +=
      '<p class="shows__element-title">' +
      "DATE" +
      "</p>" +
      '<p class="shows__element-bold-text shows__element-padding">' +
      x.date +
      "</p>" +
      '<p class="shows__element-title">' +
      "VENUE" +
      "</p>" +
      '<p class="shows__element-padding">' +
      x.venue +
      "</p>" +
      '<p class="shows__element-title">' +
      "Location" +
      "</p>" +
      '<p class="shows__element-padding">' +
      x.location +
      "</p>" +
      '<button class="shows__element-button">' +
      x.button +
      "</button>";

    div += '</div class="shows__element">';
  });
  showsMobile.innerHTML += div;
}
insertDataMobile();
