
const studentList = document.getElementsByClassName("student-item cf");

// Making it to where we can call this function so that only 10 students display for each page
const showPage = (list, page) => {;
  const firstItem = 10 * page - 10;
  const lastItem = 10 * page - 1;
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';
    if (i >= firstItem && i <= lastItem) {
      studentList[i].style.display = '';
    }
  }
};

// Making a list div for the links
const appendPageLinks = (list) => {
  const paginationDiv = document.querySelector('.pagination')
  const pageDiv = document.querySelector('.page');
  pageDiv.appendChild(paginationDiv);
  const pageUl = document.querySelector('.paginationUl');
  paginationDiv.appendChild(pageUl);

  // function to remove active status from unclicked links
  function removeActive() {const pageLinks = document.getElementsByClassName('pages');
  for (let i = 0; i < pageLinks.length; i++) {
  pageLinks[i].classList.remove('active');
  }};

  //Functions to display the correct page when the links are clicked
  const pageOne = document.querySelector('.page1');
  pageOne.addEventListener('click', () => {
    showPage(10,1);
    removeActive();
    pageOne.classList.add('active')
  });
  const pageTwo = document.querySelector('.page2');
  pageTwo.addEventListener('click', () => {
    showPage(10,2);
    removeActive();
    pageTwo.classList.add('active')
  });
  const pageThree = document.querySelector('.page3');
  pageThree.addEventListener('click', () => {
    showPage(10,3);
    removeActive();
    pageThree.classList.add('active')
  });
  const pageFour = document.querySelector('.page4');
  pageFour.addEventListener('click', () => {
    showPage(10,4);
    removeActive();
    pageFour.classList.add('active')
  });
  const pageFive = document.querySelector('.page5');
  pageFive.addEventListener('click', () => {
    showPage(10,5);
    removeActive();
    pageFive.classList.add('active')
  });
  const pageSix = document.querySelector('.page6');
  pageSix.addEventListener('click', () => {
    showPage(10,6);
    removeActive();
    pageSix.classList.add('active')
  });
}

appendPageLinks();
showPage(10,1);
