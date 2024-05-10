import { useState } from 'react'
import ContactList from './components/ContacList'
import Modal from './components/Moda'


function App() {
  const defaultContac = [{
    id: 1,
    name: 'Enzio',
    email: 'ej@gmail.com',
    phone: '12314'
  }]
  const [data, setData] = useState(defaultContac);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="container">
        <h1>Lista de Contactos</h1>
        <ContactList data={data} />
        <button id="addContactBtn" onClick={() => setIsOpen(true)}>+</button>
      </div>
    {isOpen &&
      <Modal  closeModal={() => setIsOpen(false)} setData={setData} data={data}/>
    }
     

    </>
  )
}

export default App
