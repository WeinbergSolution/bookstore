let bookCardRef = document.getElementById("bookCard");
let hearImageChange = document.getElementById("heartImg");
let srcLikeHeart = "./assets/icons/heart_like.png";
let srcUnLikeHeart = "./assets/icons/heart_unlike.png";
let send = "./assets/icons/send.png";
let src = "./assets/img/book-cover.png";
let alt = "Book Cover";

console.log(books);

function renderCard() {
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
console.log(document.getElementById("heartImg2").attributes[1].value);
console.log(document.getElementById("heartImg"));

function changeHeart() {
  if (
    document.getElementById("heartImg").attributes[1].value == srcUnLikeHeart
  ) {
    document.getElementById("heartImg").attributes[1].value = srcLikeHeart;
  } else {
    document.getElementById("heartImg").attributes[1].value = srcUnLikeHeart;
  }
}

function changeHeartt() {
  if (
    document.getElementById("heartImg2").attributes[1].value == srcUnLikeHeart
  ) {
    document.getElementById("heartImg2").attributes[1].value = srcLikeHeart;
  } else {
    document.getElementById("heartImg2").attributes[1].value = srcUnLikeHeart;
  }
}
