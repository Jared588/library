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
    var addButton = document.getElementById("add-button");
    var modal = document.getElementById("myModal");
    var closeButton = document.getElementById("closeButton");
    var form = document.getElementById("myForm");

    // Open the modal when the button is clicked
    addButton.onclick = function() {
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
        var author = document.getElementById("author").value;
        var title = document.getElementById("title").value;
        var pages = document.getElementById("pages").value;
        var status = document.getElementById("status").value;

        addBookToLibrary(author, title, pages, status);
        modal.style.display = "none";
        updateLibrary();
    }

    // Display all books in library
    function updateLibrary() {
        let index = 0;
        const bookContainer = document.querySelector(".book-container");
        bookContainer.innerHTML = "";

        for (const book of myLibrary) {
            // Create a new div element with the class "book"
            const bookDiv = document.createElement("div");
            bookDiv.className = "book";
            bookDiv.setAttribute("data-index", index);

            // Create the image container div
            const imageContainerDiv = document.createElement("div");
            imageContainerDiv.className = "image-container";

            // Create the "Plan To Read" button
            const readToggleButton = document.createElement("button");
            readToggleButton.id = "read-toggle";
            readToggleButton.textContent = book.status;
            if (book.status === "Completed") {
                readToggleButton.classList.add("read")
            }
            if (book.status === "Plan-to-read") {
                readToggleButton.classList.add("plan-to-read")
            }
            if (book.status === "Currently-reading") {
                readToggleButton.classList.add("reading")
            }
            if (book.status === "Dropped") {
                readToggleButton.classList.add("dropped")
            }

            readToggleButton.setAttribute("status-index", index);
            readToggleButton.addEventListener("click", () => {
                changeStatus(readToggleButton.getAttribute("status-index"));
            });

            // Create the book icon image
            const bookIconImg = document.createElement("img");
            bookIconImg.src = "icons/book-open-blank-variant.svg";
            bookIconImg.alt = "open book icon";
            bookIconImg.id = "book-icon";

            // Create the "Delete" button
            const deleteButton = document.createElement("button");
            deleteButton.id = "delete";
            deleteButton.setAttribute("button-index", index);
            deleteButton.addEventListener("click", () => {
                removeEntry(deleteButton.getAttribute("button-index"));
            })
            const deleteButtonImg = document.createElement("img");
            deleteButtonImg.src = "icons/delete-outline.svg";
            deleteButtonImg.alt = "trash can";
            deleteButton.appendChild(deleteButtonImg);

            // Create the information container div
            const informationContainerDiv = document.createElement("div");
            informationContainerDiv.className = "information-container";

            // Create and add the <p> elements with book information
            const authorParagraph = document.createElement("p");
            authorParagraph.id = "author"
            authorParagraph.innerHTML = book.author;

            const titleParagraph = document.createElement("p");
            titleParagraph.textContent = book.title;

            const pagesParagraph = document.createElement("p");
            pagesParagraph.textContent = book.pages;

            // Append all elements to their respective containers
            imageContainerDiv.appendChild(readToggleButton);
            imageContainerDiv.appendChild(bookIconImg);
            imageContainerDiv.appendChild(deleteButton);

            informationContainerDiv.appendChild(authorParagraph);
            informationContainerDiv.appendChild(titleParagraph);
            informationContainerDiv.appendChild(pagesParagraph);

            bookDiv.appendChild(imageContainerDiv);
            bookDiv.appendChild(informationContainerDiv);

            // Finally, append the entire "book" div to the document body (or another desired location)
            bookContainer.appendChild(bookDiv);
            index++;
        }
    }  

    function removeEntry(index) {     
        myLibrary.splice(index, 1); // Remove the book from the array
        updateLibrary(); // Update the library display
    }

    function changeStatus(index) {
        if (myLibrary[index].status === "Completed") {
            myLibrary[index].status = "Plan-to-read";
        } else if (myLibrary[index].status === "Plan-to-read") {
            myLibrary[index].status = "Currently-reading";
        } else if (myLibrary[index].status === "Currently-reading") {
            myLibrary[index].status = "Dropped";
        } else if (myLibrary[index].status === "Dropped") {
            myLibrary[index].status = "Completed";
        }
        updateLibrary(); // Update the library display
    }
});