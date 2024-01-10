import { useState } from 'react'

const AddStock = ({ onAdd }) => {
  const [type, setType] = useState('')
  const [total, setTotal] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!type) {
      alert('Please add stock type')
      return
    }

    onAdd({ type, total})

    setType('')
    setTotal('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Type</label>
        <input
          type='text'
          placeholder='Add stock type'
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Total</label>
        <input
          type='text'
          placeholder='Add total'
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </div>

      <input type='submit' value='Save' className='btn btn-block' />
    </form>
  )
}

export default AddStock