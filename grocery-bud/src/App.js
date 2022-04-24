import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })

  const handleSubmit = e => {
      e.preventDefault()
      if(!name) {
          showAlert(true,'Please enter a name','danger' )
          return
      } else if(name && isEditing) {
          setAlert({ show: true, message: 'Success', type: 'danger' })
          setList(list.map(item => item.id === editID ? { id: editID, name: name } : item))
          setIsEditing(false)
          setEditID(null)
          setAlert({ show: false, message: '', type: '' })
          setName('')
          return
      } else {
          const newGrocery = {
              id: Date.now(),
              name: name,
          }
          setList((item) => {
              return [...item, newGrocery]
          })
          setAlert({ show: true, message: 'Grocery added', type: 'success' })
          setName('')
      }
  }

  const showAlert = (show= false, message = '', type = '') => {
    setAlert({ show, message, type })
  }

  const removeItem = (id) => {
      setAlert({ show: true, message: 'Grocery removed', type: 'success' })
      const newList = list.filter(item => item.id !== id)
      setList(newList)
  }
  const editItem = (id) => {
      const targetItem = list.find(item => item.id == id)
      setName(targetItem.name)
      setIsEditing(true)
      setEditID(id)
  }

  return (
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
            <h3>grocery bud</h3>
            <div className='form-control'>
                <input type='text'
                       className='grocery'
                       id='name'
                       value={name}
                       placeholder='add grocery item'
                       onChange={e => setName(e.target.value)} />
                <button type='submit'
                        className='submit-btn'>
                    {isEditing ? 'edit' : 'submit'}
                </button>
            </div>
        </form>
        <div className='grocery-container'>
          <List list={list} editItem={editItem}  removeItem={removeItem}/>
          <button className='clear-btn' onClick={() => setList([])}>{list.length>0 ? 'clear items' : 'no items'}</button>
        </div>
      </section>
  )
}

export default App
