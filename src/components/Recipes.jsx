import Recipe from "./Recipe";
import {useState, useEffect} from "react"

const Recipes = ({deleteRecipe}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const apiUrl = "/api/recipes"
            try{
                const res = await fetch(apiUrl);
                const data = await res.json();
                setRecipes(data)
            } catch(error){
                console.log("Error fetching data", error)
            }
        }

        fetchRecipes();
    })



    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    {recipes.map((recipe) => (
                        <Recipe key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Recipes