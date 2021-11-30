const galleryItems = document.querySelectorAll('.gallery-item');
const drawingsToggle = document.querySelector('.drawings-toggle');
const paintingsToggle = document.querySelector('.paintings-toggle');
const yearToggle = document.querySelector('.years-toggle');
const yearFilters = document.querySelectorAll('.year-filter');
const yearList = document.querySelector('.year-list');
const tagToggle = document.querySelector('.tags-toggle');
const tagFilters = document.querySelectorAll('.tag-filter');
const tagList = document.querySelector('.tag-list');
let isDrawingsFilterActive = false;
let isPaintingsFilterActive = false;
let isTagsFilterActive = false;
let isYearsFilterActive = false;

//GALLERY ITEM ZOOM
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

// FILTERS
tagFilters.forEach(filter => {
  filter.addEventListener('click', function() {
    galleryItems.forEach(item => {
      let tags = item.getAttribute('tags').split(',');
      if (tags.includes(filter.getAttribute('tag')))
        item.classList.remove('hidden');
      else 
        item.classList.add('hidden');
    });
    clearAllTagFilters();
    filter.classList.add('active');
  });
});

function closeTagList() {
  isTagsFilterActive = false;
  tagList.classList.add('hidden');
  tagToggle.classList.remove('active');
}

function openTagList() {
  isTagsFilterActive = true;
  tagList.classList.remove('hidden');
  tagToggle.classList.add('active');
  clearAllTagFilters();
  showAllArtworks();
}

function clearAllTagFilters() {
  tagFilters.forEach(filter => {
    filter.classList.remove('active');
  });
}

function toggleTagList() {
  if (isTagsFilterActive) {
    clearAllToggles();
    showAllArtworks();
  } else {
    clearAllToggles();
    openTagList();
  }
}

tagToggle.addEventListener('click', function() {
  toggleTagList();
});

yearFilters.forEach(filter => {
  filter.addEventListener('click', function() {
    galleryItems.forEach(item => {
      let year = item.getAttribute('year');
      if (!year.localeCompare(filter.getAttribute('year')))
        item.classList.remove('hidden');
      else 
        item.classList.add('hidden');
    });
    clearAllYearFilters();
    filter.classList.add('active');
  });
});

function closeYearList() {
  yearList.classList.add('hidden');
  yearToggle.classList.remove('active');
  isYearsFilterActive = false;
}

function openYearList() {
  isYearsFilterActive = true;
  showAllArtworks();
  clearAllYearFilters();
  yearList.classList.remove('hidden');
  yearToggle.classList.add('active');
}

function clearAllYearFilters() {
  yearFilters.forEach(filter => {
    filter.classList.remove('active');
  });
}

function toggleYearList() {
  if (isYearsFilterActive) {
    clearAllToggles();
    showAllArtworks();
  } else {
    clearAllToggles();
    openYearList();
  }
}

yearToggle.addEventListener('click', function() {
  toggleYearList();
});

function clearAllToggles() {
  closeTagList();
  closeYearList();
  paintingsToggle.classList.remove('active');
  drawingsToggle.classList.remove('active');
  isDrawingsFilterActive = false;
  isPaintingsFilterActive = false;
}


function showAllArtworks() {
  galleryItems.forEach(item => {
    item.classList.remove('hidden');
  });
}

paintingsToggle.addEventListener('click', function() {
  if (isPaintingsFilterActive) {
    clearAllToggles();
    showAllArtworks();
  } else {
    clearAllToggles();
    galleryItems.forEach(item => {
      if (item.getAttribute('medium') == "dessin")
        item.classList.add('hidden');
      else
        item.classList.remove('hidden');
    });
    paintingsToggle.classList.add('active');
    isPaintingsFilterActive = true;
  }
});

drawingsToggle.addEventListener('click', function() {
  if (isDrawingsFilterActive) {
    clearAllToggles();
    showAllArtworks();
  } else {
    clearAllToggles();
    galleryItems.forEach(item => {
      if (item.getAttribute('medium') == "peinture")
        item.classList.add('hidden');
      else
        item.classList.remove('hidden');
    });
    drawingsToggle.classList.add('active');
    isDrawingsFilterActive = true;
  }
});