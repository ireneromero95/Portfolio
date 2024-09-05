import './footer.css'

const templateFooter = () => {
  return `
    <p>Creado por Irene Romero</p>
    `
}

export const printFooter = () => {
  document.querySelector("footer").innerHTML = templateFooter()
}