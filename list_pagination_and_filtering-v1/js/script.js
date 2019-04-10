
//Global variables
const studentList = document.getElementsByClassName("student-item cf");
const totalPages = Math.ceil(studentList.length / 10); // Total pages = total students divided by 10, rounded up
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

  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination');
  const pageDiv = document.querySelector('.page');
  pageDiv.appendChild(paginationDiv);
  const pageUl = document.createElement('ul');
  paginationDiv.appendChild(pageUl);

  for (let i = 1; i <= totalPages; i++) { // totalPages does NOT have .length since it is already a number
    const pageLi = document.createElement('li');
    const aTag = document.createElement('a');
    pageUl.appendChild(pageLi);
    pageLi.appendChild(aTag);
    aTag.textContent = i;
  }

  const allTags = document.querySelectorAll('a');
  for (let i = 0; i < totalPages; i++) {
    allTags[i].addEventListener('click', (e) => {
      let pageLink = e.target.textContent;
      showPage(studentList, pageLink);

      for (let i = 0; i < allTags.length; i++) {
        allTags[i].classList.remove('active');
      }
      e.target.classList.add('active');
    });
  }



}


appendPageLinks();
showPage(studentList,1); //to show first page on load
