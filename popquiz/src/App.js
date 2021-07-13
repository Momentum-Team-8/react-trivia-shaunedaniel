import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';


const API_URL = 'https://opentdb.com/api_category.php';
function App() {
  const[categories, setCategories] = useState([])
    useEffect(() => {
      axios.get(API_URL)
        .then(res => setCategories(res.data.trivia_categories))

    }, [])

  return (
  <> 
    {categories.map((category)=> {
      console.log(category)
      return (
          <div key={category.id}>
            <p>{category.name}
            </p></div>
      )
     })}
     </>)
}

export default App;
