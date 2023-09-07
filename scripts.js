document.addEventListener("DOMContentLoaded", function() {
    const myLibrary = [];

    function Book(author, title, pages, status) {
    this.author = author
    this.title = title
    this.pages = pages
    this.status = status
    return;
    }

    function addBookToLibrary(author, title, pages, status) {
        const newBook = new Book(author, title, pages, status);
        myLibrary.push(newBook);
    }

    // Get references to elements
    var openButton = document.getElementById("add-button");
    var modal = document.getElementById("myModal");
    var closeButton = document.getElementById("closeButton");
    var form = document.getElementById("myForm");

    // Open the modal when the button is clicked
    openButton.onclick = function() {
        modal.style.display = "flex";
    }

    // Close the modal when the close button is clicked
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Prevent form submission (you can handle form submission as needed)
    form.onsubmit = function(event) {
        event.preventDefault();
        // Handle form submission logic here
    }
});