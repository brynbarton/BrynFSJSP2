
//Global variables
const studentList = document.getElementsByClassName("student-item cf");

// Making it to where we can call this function so that only 10 students display for each page
const showPage = (list, page) => {
  const firstItem = 10 * page - 10;
  const lastItem = 10 * page - 1;
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';
    if (i >= firstItem && i <= lastItem) {
      studentList[i].style.display = '';
    }
  }
};

// Creating the different divs and the ul for the pagination.
const appendPageLinks = (list) => {
  const totalPages = studentList/10;

  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination');
  const pageDiv = document.querySelector('.page');
  pageDiv.appendChild(paginationDiv);
  const pageUl = document.createElement('ul');
  paginationDiv.appendChild(pageUl);
  pageUl.classList.add('pagination');

  for (i = 1; i <= totalPages.length; i++) {
    const pageLi = document.createElement('li');
    pageUl.appendChild(pageLi);
    const aTag = document.createElement('a');
    pageLi.appendChild(aTag);
    aTag.textContent = i;
  }
}
  // function to remove active status from unclicked links


  //loop to display the correct pages when links are clicked


appendPageLinks();
showPage(studentList,1); //to show first page on load
