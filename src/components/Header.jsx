import Troll from "../assets/images/troll-face.png"

export default function Header () {
  return (
    <header className="head">
      <div className="head--section">
        <img src={Troll} className="head--icon" />
        <h1 className="head--title">Meme Generator</h1>
      </div>
      <p className="head--description">React Course - Project 3</p>
    </header>
  )
}