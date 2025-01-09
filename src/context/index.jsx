import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [favoriteList, setFavoriteList] = useState([]);

   const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();
            if (data?.data?.recipes) {
                setRecipes(data.data.recipes);
                setLoading(false);
                setSearchParam('');
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
            setSearchParam('');
            navigate('/');
        }
    }

    function handleAddToFavorite(getCurrentItem) {
        console.log(getCurrentItem);
        let cypFavoritesList = [...favoriteList];
        const index = cypFavoritesList.findIndex(item => item.id === getCurrentItem.id);

        if (index === -1) {
            cypFavoritesList.push(getCurrentItem);
        } else {
            cypFavoritesList.splice(index, 1); // Fix: Properly remove the item
        }

        setFavoriteList(cypFavoritesList);
    }

    console.log(favoriteList, 'favoriteList');

    return (
        <GlobalContext.Provider value={{
            searchParam,
            setSearchParam,
            handleSubmit,
            loading,
            recipes,
            recipeDetails,
            setRecipeDetails,
            handleAddToFavorite,
            favoriteList
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
