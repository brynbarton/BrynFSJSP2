
//Global variables
const list = document.getElementsByClassName("student-item cf");
const pages = document.querySelectorAll('a');

// Making it to where we can call this function so that only 10 students display for each page
const showPage = (list, page) => {
  const firstItem = 10 * page - 10;
  const lastItem = 10 * page - 1;
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = 'none';
    if (i >= firstItem && i <= lastItem) {
      list[i].style.display = '';
    }
  }
};

// Creating the different divs and the ul for the pagination.
const appendPageLinks = (list) => {
  const paginationDiv = document.createElement('div')
  paginationDiv.classList.add('pagination');
  const pageDiv = document.createElement('div');
  pageDiv.classList.add('page');
  pageDiv.appendChild(paginationDiv); //Making pageDiv the parent function of paginationDiv
  const pageUl = document.createElement('ul');
  paginationDiv.appendChild(pageUl); // making paginationDiv the parent function of pageUl
}
  // function to remove active status from unclicked links
  function removeActive() {
  for (let i = 0; i < pages.length; i++) {
  pages[i].classList.remove('active');
  }};

  //loop to display the correct pages when links are clicked
for (let i = 0; i < pages.length; i++) {
    pages[i].addEventListener('click', (e) => {
      let pagesSelect = e.target.textContent;
      showPage(list, pagesSelect)
      removeActive(); //remove active status from all links
      pages[i].classList.add('active'); // add active status to clicked link
      })
    };

appendPageLinks();
showPage(list,1); //to show first page on load
