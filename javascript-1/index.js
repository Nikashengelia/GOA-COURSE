const photo = document.getElementById('photo');
const resizeBtn1 = document.getElementById('resizeBtn1');
const resizeBtn2 = document.getElementById('resizeBtn2');

resizeBtn1.addEventListener('click', function() {
  photo.style.width = '300px';
});

resizeBtn2.addEventListener('click', function() {
  photo.style.width = '500px';
});