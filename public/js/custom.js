document.addEventListener('DOMContentLoaded', () => {
  const memeRows = document.querySelectorAll('[id^="meme-row-"]');
  memeRows.forEach(row => {
      const memeId = row.id.split('-')[2];
      if (sessionStorage.getItem('viewedMeme-' + memeId) === 'true') {
          row.classList.add('viewed-meme');
      }
  });
});


function open_new_window(location) {
  window.location.href = location;

}

function markAsViewed(memeId) {
  const row = document.getElementById('meme-row-' + memeId);
  if (row) {
    row.classList.add('viewed-meme');
    sessionStorage.setItem('viewedMeme-' + memeId, 'true');
  }
}