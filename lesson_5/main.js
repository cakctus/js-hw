let container
let prevIndicator = null

function createContainer() {
  container = document.createElement("div")
  container.setAttribute("style", "carousel")
  document.querySelector("body").appendChild(container)
}

function createSlides(num) {
  const ul = document.createElement("ul")
  let li
  let a
  for (let i = 0; i < num; i++) {
    li = document.createElement("li")
    a = document.createElement("a")
    ul.setAttribute("class", "slides")
    li.setAttribute("class", "slides__item")
    a.setAttribute("href", "#")
    li.appendChild(a)
    ul.appendChild(li)
  }
  container.appendChild(ul)
}

function createIndicators(num) {
  const div = document.createElement("div")

  for (let i = 0; i < num; i++) {
    const span = document.createElement("span")
    span.setAttribute("class", "indicators__item")
    span.setAttribute("data-slide-to", i)
    div.setAttribute("class", "indicators")
    div.appendChild(span)
  }
  let first = div.firstElementChild
  first.setAttribute("class", "indicators__item active")
  container.appendChild(div)
}

function createControls(num) {
  const div = document.createElement("div")

  for (let i = 0; i < num; i++) {
    const div2 = document.createElement("div")
    const idiv = document.createElement("i")
    div2.appendChild(idiv)
    if (i === 0) {
      div2.setAttribute("class", "controls__item controls_prev")
      idiv.setAttribute("class", "fas fa-chevron-left")
    }
    if (i === 1) {
      div2.setAttribute("class", "controls__item controls_next")
      idiv.setAttribute("class", "fas fa-chevron-right")
    }
    if (i === 2) {
      div2.setAttribute("class", "controls__item controls_pause")
      idiv.setAttribute("class", "fas fa-play")
    }
    div.appendChild(div2)
  }
  div.setAttribute("class", "controls")
  container.appendChild(div)
}

function createStyle() {
  styleContainer = document.createElement("style")
  let styleCode = `
    .controls,
    .slides {
      position: relative;
    }
    .indicators {
      display: flex;
    }
    .indicators__item {
      display: block;
      width: 15px;
      height: 15px;
      background-color: silver;
      margin: 5px;
      border-radius: 50%;
    }`

  styleContainer.innerHTML = styleCode
  container.appendChild(styleContainer)
}

function indicatorsHandler(e) {
  let target = e.target

  if (target.classList.contains("indicators__item")) {
    target.style.backgroundColor = "red"

    if (prevIndicator !== null) prevIndicator.removeAttribute("style")

    prevIndicator = target
  }
}

function setListener() {
  let indicatorsContainer = document.querySelector(".indicators")

  indicatorsContainer.addEventListener("click", indicatorsHandler)
}

function createCarousel(slidesCount) {
  createContainer()
  createSlides(5)
  createIndicators(5)
  createControls(3)
  createStyle()
  setListener()
}

createCarousel()
