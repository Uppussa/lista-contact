import React from 'react'
import Input from './Input'

const Form = () => {
    return (
        <form id="contactForm">
            
            <Input id="name" label="Nombre" type="text"/>
            <Input id="email" label="Correo" type="email"/>
            <Input id="phone" label="telefono" type="tel"/>
            <button type="submit">Agregar</button>
        </form>
    )
}

export default Form
