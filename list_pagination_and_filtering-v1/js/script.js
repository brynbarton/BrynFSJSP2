//Global variables
const studentList = document.getElementsByClassName("student-item cf");
let totalPages = Math.ceil(studentList.length / 10); // Total pages = total students divided by 10, rounded up
const h2 = document.querySelector("h2");
let oldPagination = document.getElementsByClassName("pagination");

//Dynamically adding search function

const searchDiv = document.createElement("div");
searchDiv.classList.add("student-search");
h2.parentNode.insertBefore(searchDiv, h2.nextSibling);
const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.placeholder = "Search for students...";
const searchButton = document.createElement("BUTTON");
searchDiv.appendChild(searchButton);
searchButton.innerHTML = "Search";
searchDiv.appendChild(searchInput);

// Set up for if no results are found in the search bar

const noResults = document.getElementsByClassName("student-search")[0];
const nRtext = document.createElement("h4");
nRtext.classList.add("student-h4");
nRtext.innerHTML = "Error, no search results, please try again!";
noResults.appendChild(nRtext);
const h4 = document.querySelector("h4");
h4.style.display = "none";

// Making it to where we can call this function so that only 10 students display for each page

const showPage = (list, page) => {
  const firstItem = 10 * page - 10;
  const lastItem = 10 * page - 1;
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none";
    if (i >= firstItem && i <= lastItem) {
      list[i].style.display = "";
    }
  }
};

const appendPageLinks = list => {
  if (oldPagination[0]) {
    oldPagination[0].parentNode.removeChild(oldPagination[0]);
  }
  // Creating the different divs and the ul for the pagination.
  let totalPages = Math.ceil(list.length / 10); // Total pages = total students divided by 10, rounded up
  const paginationDiv = document.createElement("div");
  paginationDiv.classList.add("pagination");
  const pageDiv = document.querySelector(".page");
  pageDiv.appendChild(paginationDiv);
  const pageUl = document.createElement("ul");
  paginationDiv.appendChild(pageUl);

  //creating the list of links to pages
  for (let i = 1; i <= totalPages; i++) {
    // totalPages does NOT have .length since it is already a number
    const pageLi = document.createElement("li");
    const aTag = document.createElement("a");
    pageUl.appendChild(pageLi);
    pageLi.appendChild(aTag);
    aTag.textContent = i; //makes the links text content the appropriate number
  }

  const allATags = document.querySelectorAll("a"); //grab all the a tags
  if (allATags > 0) {
    allATags[0].classList.add("active");
  }
  for (let i = 0; i < totalPages; i++) {
    allATags[i].addEventListener("click", e => {
      //create an event listener for all the a tags
      let pageLink = e.target.textContent;
      showPage(list, pageLink); // shows the appropriate page for that link

      for (let i = 0; i < allATags.length; i++) {
        //
        allATags[i].classList.remove("active"); // removing the 'active' class from all a tags
      }
      e.target.classList.add("active"); // adding the active class to the link thats just been clicked.
    });
  }
};

// Adding functionality to search function

const studentsName = document.querySelectorAll("h3");
function searchList() {
  let filterResults = [];
  const sFilter = searchInput.value.toUpperCase();
  h4.style.display = "";
  for (let i = 0; i < studentList.length; i++) {
    let a = studentsName[i];
    studentList[i].style.display = "none";

    // If no results are turned
    if (a.innerHTML.toUpperCase().indexOf(sFilter) > -1) {
      filterResults.push(studentList[i]);
      h4.style.display = "none";
    }
  }
  showPage(filterResults, 1);
  appendPageLinks(filterResults);
  return;
}
// to run the searchList function on searchButton click
searchButton.addEventListener("click", function(e) {
  searchList();
});

appendPageLinks(studentList);
showPage(studentList, 1); //to show first page on load
