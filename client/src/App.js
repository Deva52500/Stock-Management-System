import Header from "./components/Header";
import AddStock from "./components/AddStock";
import Stock from "./components/Stock";
import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [addStock, setAddStock] = useState(false)

  const [stocks, setStock] = useState([])

  //fetch stock
  useEffect(() => {
    const getStocks = async () => {
      const stocksFromServer = await fetchStocks()
      setStock(stocksFromServer)
    }

    getStocks()
  }, [])

  //fetch
  const fetchStocks = async () => {
    const res = await fetch('http://localhost:5000/api')
    const data = await res.json()

    return data
  }

    const addStockDetail = async (stock) => {
      const res = await fetch('http://localhost:5000/api/post', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(stock),
      })
      console.log("res", res)
      if (res.status === 201){
        window.alert("New stock added")
      }
      
      const stocksFromServer = await fetchStocks()
      setStock(stocksFromServer)     
    }

   // Delete Stock  
  const deleteStock = async (id) => {
    console.log("ID", id)
    const res = await fetch(`http://localhost:5000/api/delete/${id}`, {
      method: 'DELETE',
    })
   console.log("RES", res)
    res.status === 200
    ? setStock(stocks.filter((stock) => stock._id !== id))
      : alert('Error Deleting This Stock')
  }

  return (  
    <div className="container">
      <Router>
        <Header className="header"
        onAdd={() => setAddStock(!addStock)}
        showAdd={addStockDetail} 
        />
       
       <Routes>
         <Route
            path='/'
            element={
              <>
                {addStock && <AddStock onAdd={addStockDetail} />}
                {stocks.length > 0 ? (
                  <Stock
                    stock={stocks}
                    onDelete={deleteStock}
                  />
                ) : (
                  'Stock is empty'
                )}
              </>
            }
          />

        </Routes>      

      </Router>
    </div>
  );
}

export default App;


