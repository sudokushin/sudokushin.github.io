const cards = document.querySelectorAll(".project-card");



cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => {
      if(c !== card) c.style.transform = 'scale(0.9)';
      else c.style.transform = 'scale(1.2)';
    });
  });

  card.addEventListener('mouseleave', () => {
    cards.forEach(c => c.style.transform = 'scale(1)');
  });
});