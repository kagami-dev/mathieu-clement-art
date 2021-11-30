const galleryItems = document.querySelectorAll('.gallery-item');
const drawingsFilter = document.querySelector('.drawings-filter');
const paintingsFilter = document.querySelector('.paintings-filter');
const seriesToggle = document.querySelector('.series-toggle');
const seriesFilters = document.querySelectorAll('.series-filter');
let drawingsToggle = true;
let paintingsToggle = true;

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

function toggleSeriesFilters() {
  document.querySelector('.tag-list').classList.toggle('hidden');
  seriesToggle.classList.toggle('active');
}
seriesToggle.addEventListener('click', function() {
  toggleSeriesFilters();
});

function clearAllSeriesFilters() {
  seriesFilters.forEach(filter => {
    filter.classList.remove('active');
  });
}


seriesFilters.forEach(filter => {
  filter.addEventListener('click', function() {
    galleryItems.forEach(item => {
      let tags = item.getAttribute('tags').split(',');
      if (tags.includes(filter.getAttribute('tag')))
        item.classList.remove('hidden');
      else 
        item.classList.add('hidden');
    });
    clearAllSeriesFilters();
    filter.classList.add('active');
  });
});

paintingsFilter.addEventListener('click', function() {
  paintingsFilter.classList.toggle('active');
  paintingsToggle = paintingsFilter.classList.contains('active');
  galleryItems.forEach(item => {
    if (item.getAttribute('medium') == "peinture") {
      if (paintingsToggle)
        item.classList.remove('hidden');
      else
        item.classList.add('hidden');
    }
  });
  // clearAllFilters();
});

drawingsFilter.addEventListener('click', function() {
  drawingsFilter.classList.toggle('active');
  drawingsToggle = drawingsFilter.classList.contains('active');
  galleryItems.forEach(item => {
    if (item.getAttribute('medium') == "dessin") {
      if (drawingsToggle)
        item.classList.remove('hidden');
      else
        item.classList.add('hidden');
    }
  });
  // clearAllFilters();
});