 const header = document.querySelector('.left-side');

 window.addEventListener('scroll', () => {
  
   const scrollPosition = window.scrollY;
   const threshold = 200;
   if (scrollPosition > threshold) {
     header.style.backgroundColor = 'rgb(186, 184, 108)'; 
     header.style.transition = 'background-color 0.5s ease'; 
   } else {
     header.style.backgroundColor = '#AA9280';
   }
 });