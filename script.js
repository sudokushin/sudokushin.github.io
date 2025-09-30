const cards = document.querySelectorAll(".project-card");



cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => {
      if(c !== card) c.style.transform = 'scale(0.9)';
      else {c.style.transform = 'scale(1.2)'; c.style.boxShadow = "0 0 10px white";}
    });
  });

  card.addEventListener('mouseleave', () => {
    cards.forEach(c => c.style.transform = 'scale(1)');
    cards.forEach(c => c.style.boxShadow = '0 0 0');
  });
});