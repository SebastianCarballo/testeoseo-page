const title = document.getElementById('title');
const button = document.getElementById('pulseBtn');

button.addEventListener('click', () => {
  title.style.transform = 'scale(1.3) rotate(3deg)';
  title.style.color = '#ff4081';
  setTimeout(() => {
    title.style.transform = 'scale(1) rotate(0deg)';
    title.style.color = '#ffffff';
  }, 1000);
});
