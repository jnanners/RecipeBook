import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddRecipePage = ({addRecipeSubmit}) => {
    const [title, setTitle] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [link, setLink] = useState("");

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newRecipe = {
            title,
            cookTime,
            link
        }

        addRecipeSubmit(newRecipe);

        return navigate("/")
    }


    return(
        <section className="bg-amber-500">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-gray-200 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Add Recipe</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Recipe Name</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Name of delicious new recipe"
                                required
                                value={title}
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
                                placeholder="Cook time of new recipe"
                                required
                                value={cookTime}
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
                                placeholder="Name of delicious new recipe"
                                required
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="submit">Add Recipe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddRecipePage