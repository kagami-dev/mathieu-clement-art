const galleryItems = document.querySelectorAll('.gallery-item');

function collapseAllItems() {
  galleryItems.forEach(item => {
    item.classList.remove('occupy-row');
  });
}

galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    if (item.classList.contains('occupy-row')) {
      collapseAllItems();
    } else {
      collapseAllItems();
      item.classList.add('occupy-row');
    }
  });
});