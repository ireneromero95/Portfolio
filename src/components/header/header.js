import './header.css'

const headerTemplate = () =>{
  return `
  <div>
    <h1>Irene Romero </h1>
    </div>
    <div>
    <nav>
    <ul>
    <li>
    <a href="#aboutme">About me</a>
    </li>
    <li>
    <a href="#education">Education</a>
    </li>
    <li>
    <a href="#experience">Experience</a>
    </li>
    <li>
    <a href="#projects">Projects</a>
    </li>
    </ul>
    </nav>
    </div>`
}
export const printHeader = () =>{
 document.querySelector("header").innerHTML = headerTemplate();
}

