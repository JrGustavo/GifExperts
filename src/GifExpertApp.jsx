import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch ', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
      //categories.push(newCategory)
       setCategories([newCategory, ...categories])
   // setCategories([newCategory, ...categories])

    }

    return (
   <>
       {/* Titulo */}
       <h1> Eres un ejemplo </h1>

       {/* Input */}
       <AddCategory
           onNewCategory={(value) => onAddCategory(value)}/>

       {/* Listado de GIFs */}


       <ol>
           { categories.map(category  => {
               return <li key={category}> {category} </li>
           }) }


       </ol>
       {/*  GIF Item */}

   </>
    )
}
