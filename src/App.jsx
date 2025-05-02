import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AddRecipePage from "./pages/AddRecipePage";
import EditRecipePage from "./pages/EditRecipePage.jsx";

const App = () => {

  const addRecipe = async (newRecipe) => {
    try{
      const res = await fetch("api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "applications/json"
        },
        body: JSON.stringify(newRecipe)
      })
    } catch(error){
      console.log(error)
    }
    return;
  }

  const updateRecipe = async (recipe) => {
    try{
      const res = await fetch(`/api/recipes/${recipe.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "applications/json"
        },
        body: JSON.stringify(recipe)
      })
    } catch (error){
      console.log(error)
    };
    return
  }

  const deleteRecipe = async (id) => {
    try{
      const res = await fetch(`/api/recipes/${id}`, {
        method: "DELETE",
      })
    } catch(error){
      console.log(error)
    };
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage deleteRecipe={deleteRecipe}/>} />
        <Route path="/add-recipe" element={<AddRecipePage addRecipeSubmit={addRecipe}/>} />
        <Route path="/edit-recipe/:id" element={<EditRecipePage updateRecipeSubmit={updateRecipe}/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App