import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";
import {GifGrid} from "./components/GifGrid.jsx";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch '])

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;


       setCategories([newCategory, ...categories])

    }

    return (
   <>

       <h1> Eres un ejemplo </h1>


       <AddCategory
           onNewCategory={(value) => onAddCategory(value)}
       />
       {

           categories.map(category  => (
               <GifGrid key={category}
                        category={category}
               />
           ))
       }
   </>
    )
}
