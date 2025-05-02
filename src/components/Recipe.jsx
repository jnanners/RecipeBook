import { Link, useNavigate } from "react-router-dom"

const Recipe = ({recipe, deleteRecipe}) => {
    const navigate = useNavigate()

    const onDeleteClick = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this recipe")

        if(!confirm) return;

        deleteRecipe(id)

        navigate("/")
    }

    return (
        <div className="p-6 rounded-lg shadow-md text-center">
            <div>
                <a href={recipe.link} target="_blank" className="text-2xl text-blue-400">{recipe.title}</a>
                <p>{recipe.cookTime} minutes</p>
            </div>
            <div className="flex">
                <div className="ml-auto">
                    <Link to={`/edit-recipe/${recipe.id}`} className="text-black hover:bg-gray-900 hover:text-white rounded-md px-2 py-1 font-bold ml-2">Edit</Link>
                    <button onClick={() => onDeleteClick(recipe.id)} className="text-black hover:bg-gray-900 hover:text-white rounded-md px-2 py-1 font-bold ml-2">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Recipe