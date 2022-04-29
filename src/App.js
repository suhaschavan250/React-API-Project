import React,{ useEffect,useState } from 'react';
import Recipe from "./Recipe";
import'./App.css'


function App() {
 const APP_ID="0d8da6e2";
 const APP_KEY= "fea77f4e3061920df0137555f21f2932";


const[recipe,setRecipe]=useState([]);

const[search,newSearch]=useState('');
const[query,setQuery]=useState('chicken')
//  const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
useEffect(()=>{
 getRecipes();
},[]);

const getRecipes= async()=>{
  const response=  await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data= await response.json();
  setRecipe(data.hits);
  console.log(data.hits)
};

const change=(e)=>{
  newSearch(e.target.value);
}
console.log(recipe);



  return (
   
   <div className="App">
   <form className='search-form'>
   <input type="text"  className='search-bar' value={search} onChange={change}/>
   <button className='search-button' type='submit'>Search</button>


   </form>

   {recipe.map(recipe=>(
     <Recipe key={recipe.recipe.label}
             title={recipe.recipe.label}
             calories={recipe.recipe.calories}
             image={recipe.recipe.image}></Recipe>
   ))}
   </div>
  
   
   
  
    
  );
}

export default App;
