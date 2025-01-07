import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipesList from "../../components/recipesList";



const Home = () => {

    const { recipes, loading } = useContext(GlobalContext);

    if (loading) {
        return <div className="text-2xl text-center mt-12">Loading...</div>
    }

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-12">
            {
                recipes && recipes.length > 0 ?
                    recipes.map((item) => <RecipesList item={item} />)
                    : <div className="text-2xl text-center mt-12">No recipes found</div>
            }
        </div>
    )
}

export default Home;