document.addEventListener("DOMContentLoaded", () => {
    const newPostBtn = document.querySelector('.docbt');
    const newDocsBtn = document.querySelector('.docbt2');
  
    if (newPostBtn) {
      newPostBtn.addEventListener('click', () => {
        window.location.href = '/new';
      });
    }
  
    if (newDocsBtn) {
      newDocsBtn.addEventListener('click', () => {
        window.location.href = '/new'; // Change this if you want a different route
      });
    }
  });
  