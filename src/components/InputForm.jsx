import React from 'react'

//import './InputForm.style.css'src\scss\_custom.scss

const InputForm = (onAdd, onChange) => {
  return (
    <div>
      <form className="form" onSubmit={onAdd} id="myForm">
        <input
          className="input"
          type="text"
          placeholder="Yeni Kriter"
          onChange={onChange}
        />
        <button className="button">Kriter Ekle</button>
      </form>
    </div>
  )
}

export default InputForm
