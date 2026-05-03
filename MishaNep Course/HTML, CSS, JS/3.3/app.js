document
  .querySelectorAll('.progress-bar__fg-bar')
  .forEach((bar) => (bar.style.width = bar.dataset.barPercentage + '%'))
