function toggleCard(card) {
    const cardInner = card.querySelector('.card-inner');
    if (cardInner.style.transform === 'rotateY(180deg)') {
        cardInner.style.transform = 'rotateY(0deg)'; // Desvira o card
    } else {
        cardInner.style.transform = 'rotateY(180deg)'; // Vira o card
    }
}