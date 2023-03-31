\const timelineItems = document.querySelectorAll('.timeline-item');

function isInViewPort(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showVisibleItems() {
  timelineItems.forEach(item => {
    if (isInViewPort(item)) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}

window.addEventListener('load', showVisibleItems);
window.addEventListener('resize', showVisibleItems);
window.addEventListener('scroll', showVisibleItems);
