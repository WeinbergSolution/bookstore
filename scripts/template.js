function commentsTamplate(bookIndex, commentsIndex) {
  return `
 
   <table>
    <tr>
      <td>${books[bookIndex].comments[commentsIndex].name}</td>
      <td >${books[bookIndex].comments[commentsIndex].comment}</td>
    </tr>
  </table>
 `;
}

function cardTamplate(bookIndex) {
  return `
 <div class="card">
    <h2>${books[bookIndex].name}</h2>
    <div class="book-container">
    <img src="${src}" alt="${alt} + " " + ${books[bookIndex].name}}">
 </div>
      <div class="card-content">
        <p>${books[bookIndex].price} €</p>
          <div class="like-area">
            <p>${books[bookIndex].likes}</p>
            <img src="${srcUnLikeHeart}" alt="Like Button">
          </div>
      </div>
      <table>
        <tr>
          <td>Author</td>
          <td>:${books[bookIndex].author}</td>
        </tr>
        <tr>
          <td>Erscheinungsjahr</td>
          <td>:${books[bookIndex].publishedYear}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>:${books[bookIndex].genre}</td>
        </tr>
      </table>
      <div class="table-wrapper">
      ${getComments(bookIndex)}
      </div>
      <div class="card-comment-input-area">
        <input id="comment-input" type="text" alt="Coments input field" placeholder="schreibe dein kommentar" />
        <img src="${send}" alt="Message send Button">
      </div>
  </div>`;
}
