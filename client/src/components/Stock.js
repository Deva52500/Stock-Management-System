import { FaTimes } from 'react-icons/fa'

const Stock = ({ stock, onDelete }) => {
  

  return (
    <>
    <h4>Inventory List</h4>
      <table class="table">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Type</th>
      <th scope="col">Total Packets</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {stock.map((stock, index) => (
    <tr>
      <td>{stock._id}</td>
      <td>{stock.type}</td>
      <td>{stock.total} </td>
      <td>{' '}
         <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(stock._id)}
        /></td>
    </tr>
    ))} 
   </tbody>
 </table> 
    </>
  )
}

export default Stock

