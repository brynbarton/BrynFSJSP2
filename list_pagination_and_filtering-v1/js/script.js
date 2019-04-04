/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
const studentList = document.getElementsByClassName("student-item cf");
/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

const showPage = (list, page) => {
  const firstItem = 10 * page - 10;
  const lastItem = 10 * page - 1;
  for (i = 0; i <= studentList.length; i++) {
    studentList[i].style.display = 'none';
    if (i >= firstItem && i <= lastItem) {
      studentList[i].style.display = '';
    }
  }
};

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  const pageCount = studentList/10;
  const paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination';
  const pageDiv = document.querySelector('.page');
  pageDiv.appendChild(paginationDiv);
  const pageUl = document.createElement('ul');
  paginationDiv.appendChild(pageUl);
  pageUl.innerHTML = '<li <a id="page1" href="#">>1</li> ' +
                     '<li <a id="page2" href="#">>2</li> ' +
                     '<li <a id="page3" href="#">>3</li> ' +
                     '<li <a id="page4" href="#">>4</li> ' +
                     '<li <a id="page5" href="#">>5</li> ' +
                     '<li <a id="page6" href="#">>6</li> ';

  const pageOne = document.getElementById('page1');
  pageOne.addEventListener('click', () => {
    showPage(10,1);
  });
  const pageTwo = document.getElementById('page2');
  pageTwo.addEventListener('click', () => {
    showPage(10,2);
  });
  const pageThree = document.getElementById('page3');
  pageThree.addEventListener('click', () => {
    showPage(10,3);
  });
  const pageFour = document.getElementById('page4');
  pageFour.addEventListener('click', () => {
    showPage(10,4);
  });
  const pageFive = document.getElementById('page5');
  pageFive.addEventListener('click', () => {
    showPage(10,5);
  });
  const pageSix = document.getElementById('page6');
  pageSix.addEventListener('click', () => {
    showPage(10,6);
  });
  }
appendPageLinks();

/*
1. Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page
2. Create a div, give it the “pagination” class, and append it to the .page div
3. Add a ul to the “pagination” div to store the pagination links
4. for every page, add li and a tags with the page number text
5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page
6. Loop over pagination links to remove active class from all links
7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/


// Remember to delete the comments that came with this file, and replace them with your own code comments.
