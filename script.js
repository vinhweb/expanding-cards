const card_container = document.querySelector('.expanding_cards');
const cards = document.querySelectorAll('.expanding_cards-item');

cards.forEach(card => {
  card.addEventListener('click', () =>{
    // remove all active items
    cards.forEach(item => {
      item.classList.remove('active')
    })

    // add active current item
    card.classList.add('active')
  })
})