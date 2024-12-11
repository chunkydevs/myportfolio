// Get the theme toggle button and body element
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference in localStorage (if exists)
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
} else {
  body.classList.add('light-theme');
}

// Toggle between light and dark themes on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  
  // Save the theme preference in localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Slider functionality
const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider => {
    let currentIndex = 0;
    const images = slider.querySelectorAll('img');
    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');

    function showImage(index) {
        images.forEach((image, i) => {
            image.classList.remove('active');
            if (i === index) image.classList.add('active');
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
}

function updateProgressBar() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight; // Total page height minus the viewport height
    const scrollPosition = window.scrollY; // The current scroll position

    // Calculate the progress as a percentage
    const progress = (scrollPosition / totalHeight) * 100;

    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}

// Listen for scroll events and update progress bar
window.addEventListener('scroll', updateProgressBar);

// Call the function once on page load to set the initial progress
window.addEventListener('load', updateProgressBar);