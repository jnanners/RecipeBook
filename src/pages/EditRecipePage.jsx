import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const EditRecipePage = ({updateRecipeSubmit}) => {
    const {id} = useParams();

    const [recipe, setRecipe] = useState("")

    useEffect(() => {
        const fetchRecipe = async () => {
            try{
                const res = await fetch(`/api/recipes/${id}`);
                const data = await res.json();
                setRecipe(data)
                setTitle(data.title)
                setCookTime(data.cookTime)
                setLink(data.link)
            } catch(error){
                console.log("Error fetching data", error);
            }
        }


        fetchRecipe();
    }, [])

    const [title, setTitle] = useState();
    const [cookTime, setCookTime] = useState();
    const [link, setLink] = useState()

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const updatedRecipe = {
            id,
            title,
            cookTime,
            link
        }

        console.log(updatedRecipe)

        updateRecipeSubmit(updatedRecipe);

        return navigate("/")
    }

    const cancelButton = () => {
        return navigate("/")
    }

    return(
        <section className="bg-amber-500">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-gray-200 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Edit Recipe</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                Value={recipe.title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="cookTime">Cook Time</label>
                            <input
                                type="text"
                                id="cookTime"
                                name="cookTime"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                Value={recipe.cookTime}
                                onChange={(e) => setCookTime(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Link</label>
                            <input
                                type="text"
                                id="link"
                                name="link"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                Value={recipe.link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </div>
                        <div className="flex">
                            <div className="ml-auto">
                                <button type="submit" className="text-black hover:bg-gray-900 hover:text-white rounded-md px-2 py-1 font-bold ml-2">Add Recipe</button>
                                <button onClick={cancelButton} className="text-black hover:bg-gray-900 hover:text-white rounded-md px-2 py-1 font-bold ml-2">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
    
}

export default EditRecipePage