let sourceBook = "./assets/img/book-cover.png";

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function commentsTamplate(bookIndex, commentsIndex) {
  const name = escapeHtml(books[bookIndex].comments[commentsIndex].name);
  const comment = escapeHtml(books[bookIndex].comments[commentsIndex].comment);

  return `
    <li class="comment-item">
      <span class="comment-user">${name}</span>
      <span class="comment-msg">${comment}</span>
    </li>
  `;
}

function cardTamplate(bookIndex) {
  const liked = !!books[bookIndex].liked;
  const heartSrc = liked ? srcLikeHeart : srcUnLikeHeart;

  const title = escapeHtml(books[bookIndex].name);
  const author = escapeHtml(books[bookIndex].author);
  const genre = escapeHtml(books[bookIndex].genre);

  const commentCount = books[bookIndex].comments.length;

  const commentsBlock =
    commentCount > 0
      ? `<ul class="comment-list" role="list">${getComments(bookIndex)}</ul>`
      : `<p class="empty-comments" role="note">Noch keine Kommentare – schreib den ersten.</p>`;

  return `
    <article class="product-card" role="listitem" aria-label="Buch: ${title}">
      <div class="product-top">
        <span class="genre-badge" aria-label="Genre">${genre}</span>

        <button
          type="button"
          id="heartBtn-${bookIndex}"
          class="like-btn"
          onclick="changeHeart(${bookIndex})"
          aria-label="${liked ? "Gefällt mir entfernen" : "Gefällt mir"} für ${title}"
          aria-pressed="${liked}"
        >
          <img id="heartImg-${bookIndex}" src="${heartSrc}" alt="" aria-hidden="true" />
          <span id="likeCount-${bookIndex}" class="like-count" aria-live="polite">${books[bookIndex].likes}</span>
        </button>
      </div>

      <div class="cover-stage" aria-hidden="true">
        <div class="cover-shadow"></div>
        <img class="cover" src="${sourceBook}" alt="">
      </div>

      <header class="product-header">
        <h2 class="product-title">${title}</h2>
        <p class="product-sub">
          <span class="by">von</span>
          <span class="author">${author}</span>
          <span class="dot" aria-hidden="true">•</span>
          <span class="year">${books[bookIndex].publishedYear}</span>
        </p>
      </header>

      <div class="buy-row" aria-label="Preisbereich">
        <div class="price-tag">
          <span class="price-label">Preis</span>
          <span class="price-value">${books[bookIndex].price.toFixed(2)} €</span>
        </div>

        <button type="button" class="ghost-buy" aria-label="Jetzt entdecken (Demo)">
          Entdecken
        </button>
      </div>

      <details class="comments" aria-label="Kommentare zu ${title}">
        <summary class="comments-summary">
          <span>Kommentare</span>
          <span class="count-pill" aria-label="Anzahl Kommentare">${commentCount}</span>
        </summary>

        <div class="comments-body">
          ${commentsBlock}
        </div>
      </details>

      <div class="comment-form" aria-label="Kommentar schreiben">
        <label class="sr-only" for="comment-input-${bookIndex}">Kommentar für ${title}</label>

        <input
          id="comment-input-${bookIndex}"
          class="comment-input"
          type="text"
          placeholder="Dein Kommentar…"
          autocomplete="off"
        />

        <button
          type="button"
          class="send-btn"
          onclick="addCommentToLocalStorage(${bookIndex})"
          aria-label="Kommentar senden für ${title}"
        >
          <img src="${send}" alt="" aria-hidden="true" />
          <span class="sr-only">Senden</span>
        </button>
      </div>
    </article>
  `;
}
