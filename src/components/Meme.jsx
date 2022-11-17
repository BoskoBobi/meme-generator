

export default function Meme () {
  return (
    <main className="meme">
      <div className="form">
        <div className="form--inputs--flex">
          <input className="form--input_text" type="text" 
          placeholder="Shut up" />
          <input className="form--input_text" type="text" 
          placeholder="and take my money" />
        </div>
        <button className="form--button--generator">
          Get a new meme image 🖼
        </button>
      </div>
      
    </main>
  )
}