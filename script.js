const title = document.getElementById('title');

title.addEventListener('click', () => {
  title.style.animation = 'none';
  title.style.color = '#ff4081';
  title.style.transform = 'scale(1.2) rotate(5deg)';
  setTimeout(() => {
    title.style.animation = 'blink 1.5s infinite';
    title.style.color = '#ffffff';
    title.style.transform = 'scale(1) rotate(0deg)';
  }, 1000);
});
