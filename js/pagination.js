// Storing different elements with classes in varibales to be used in code later
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll(".popmenu__item");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

// Setting the defaults for the pagination feature
const paginationLimit = 6;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

// Making the disabled button feature in pagnation to be added in the next and prev buttons when the page count starts or finishes
const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

// Adding the disabled feature in button if the currentPage is 1
const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  // Adding the feature if the currentPage is equal to the total pages available and disabling the next button
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

// Adding the styles included in the .active class if the current page is equal to the page index
const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};
// Setting the number inside the buttons to the index number of the page
const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);

  // Appending the page numbers into the element stored in variable paginationNumbers
  paginationNumbers.appendChild(pageNumber);
};
// Appending the pages till the total pages
const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

// Code for adding the feature of making the menu items appear and dissapear according to the paginationLimit
const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};
// Calling the functions above on window load
window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  // Adding the feature of previous button and next button to change pages
  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });
  // Adding the feature of the button changing after clicking on it if the pageIndex is set
  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});