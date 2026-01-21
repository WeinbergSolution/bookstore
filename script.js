let bookCardRef = document.getElementById("bookCard");

let srcLikeHeart = "./assets/icons/heart_like.png";
let srcUnLikeHeart = "./assets/icons/heart_unlike.png";
let send = "./assets/icons/send.png";
let alt = "Book Cover";

function renderCard() {
  getFromLocalStorage();
  bookCardRef.innerHTML = "";

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    bookCardRef.innerHTML += cardTamplate(bookIndex);
  }
}

function getComments(bookIndex) {
  let comments = "";
  for (
    let commentsIndex = 0;
    commentsIndex < books[bookIndex].comments.length;
    commentsIndex++
  ) {
    comments += commentsTamplate(bookIndex, commentsIndex);
  }
  return comments;
}

function changeHeart(bookIndex) {
  changeLikeCount(bookIndex);
  const heartImg = document.getElementById(`heartImg-${bookIndex}`);
  const heartBtn = document.getElementById(`heartBtn-${bookIndex}`);

  if (heartImg) {
    heartImg.src = books[bookIndex].liked ? srcLikeHeart : srcUnLikeHeart;
  }

  if (heartBtn) {
    heartBtn.setAttribute("aria-pressed", String(books[bookIndex].liked));
    heartBtn.setAttribute(
      "aria-label",
      books[bookIndex].liked
        ? `Gefällt mir entfernen für ${books[bookIndex].name}`
        : `Gefällt mir für ${books[bookIndex].name}`,
    );
  }
  saveToLocalSTorage();
}

function changeLikeCount(bookIndex) {
  const likeEl = document.getElementById(`likeCount-${bookIndex}`);
  books[bookIndex].liked = !books[bookIndex].liked;

  if (books[bookIndex].liked) {
    books[bookIndex].likes += 1;
  } else {
    books[bookIndex].likes -= 1;
  }

  if (likeEl) {
    likeEl.textContent = books[bookIndex].likes;
  }
}

function saveToLocalSTorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  let myBooksArray = JSON.parse(localStorage.getItem("books"));
  if (myBooksArray !== null) {
    books = myBooksArray;
  }
}

function addCommentToLocalStorage(bookIndex) {
  const inputRef = document.getElementById(`comment-input-${bookIndex}`);
  const commentText = inputRef.value.trim();

  if (commentText === "") return;

  books[bookIndex].comments.unshift({
    name: "Anonymous",
    comment: commentText,
  });

  saveToLocalSTorage();
  renderCard();
  inputRef.value = "";
}

/* wichtig für inline onload + onclick */
window.renderCard = renderCard;
window.changeHeart = changeHeart;
window.addCommentToLocalStorage = addCommentToLocalStorage;
