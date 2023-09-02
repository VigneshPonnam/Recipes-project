import React,{useState, useEffect} from "react";
import Recipie from "./Recipie";
import "./App.css";

const App=()=>{
  const APP_ID="58997cee";
  const APP_KEY="808ae9c2022cd36c501c6dd898976174";
  const [recipies, setRecipies]=useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState("Chicken");

  useEffect(()=>{
    fetchData();
  },[query]);

  const fetchData= async ()=>{
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipies(data.hits)
    //console.log(data.hits);
  }

  const updateSearch=(e)=>{
    setSearch(e.target.value);
  }
  const updateQuery=(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
      <form onSubmit={updateQuery} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Chicken"/>
        <button type="submit" className="submit-button" >Search</button>
      </form>
      <div className="recipes">
      {recipies.map(recipe=>(
        <Recipie 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;