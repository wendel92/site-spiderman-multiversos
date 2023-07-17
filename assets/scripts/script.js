// quando aplico o mouse no elemento
function handleMouseEnter() {
  this.classList.add('s-card--hovered')
  document.body.id = `${this.id}-hovered`
}

// quando removo o o mouse do elemento
function handleMouseLeave() {
  this.classList.remove('s-card--hovered')
  document.body.id = ''
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card')

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index]
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)
  }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false)

// função responsavel pelo gerenciamento da rotação dos cards
// ao clicar no controler (1,2, ou 3)
function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id
  const carousel = document.querySelector('.s-cards-carousel')
  const transform = carousel.style.transform
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)
  const rotateYDeg = -120 * Number(selectedItem) - 1
  const newTransform = transform.replace(
    rotateY[0],
    `rotateY(${rotateYDeg}deg)`
  )

  carousel.style.transform = newTransform

  const activeButtonElement = document.querySelector(
    '.s-controller__button--active'
  )
  activeButtonElement.classList.remove('s-controller__button--active')
  selectedButtonElement.classList.add('s-controller__button--active')
}

/* Plano cartesiano para criar os cards 3d

y = Vertical (de cima para baixo ou vice-versa)
x = Horizontal (paralela ao horizonte ou nivelado)
z = lado que não visivel de forma frontal, ou 3d.

propriedades css: 
Transform: Manipula elementos dentro dos eixos */
