import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserForm = () => {
  const navigate = useNavigate()
    const [data, setData] = useState({
      name: '',
      age: '',
      email: '',
    })
    const initialState = {
        name: '',
        age: '',
        email: '',
       }
       
 const clearState = () => {
    setData({ ...initialState })
   }

   const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`sending data… ${data.name} ${data.email} ${data.age}`)
    clearState()
    setTimeout(() => {
      navigate('/HomeMenu')
    }, 1000)


   // Guarda los datos en el localStorage cuando se envía el formulario
    event.preventDefault();
    localStorage.setItem('data', JSON.stringify(data));
    alert('Datos guardados en el localStorage');
   }

   useEffect(() => {
    // Recupera datos del localStorage cuando el componente se monta
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

   

   const [btnDisabled, setBtnDisabled] = useState(true)
   const [message, setMessage] = useState('')

const handleInputChange = (event) => {
    console.log('nombre input', event.target.name)
    console.log('valor inpunt', event.target.value)

    if (data.name.length + 1 < 3) {
        setMessage('Tiene que tener 3 caracteres')
        setBtnDisabled(true)
      } else {
        setMessage(null)
        setBtnDisabled(false)
      }

    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
   }


 return (
    <>
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="name"
         value = {data.name}
         onChange={handleInputChange}
         name="name"
       />
        <input
         type="text"
         placeholder="age"
         value = {data.age}
         onChange={handleInputChange}
         name="age"
       />
       <input
         type="email"
         placeholder="email"
         value = {data.email}
         onChange={handleInputChange}
         name="email"
       />
       <button type="submit" disabled = {btnDisabled}>Enviar</button>
       <p>{message}</p>
     </form>
    </>
 )

}


export default UserForm
