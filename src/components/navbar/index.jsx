

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-5 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-2xl font-semibold">Food Recipes</h2>
            <form>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for recipes..."
                    className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
                />
            </form>
        </nav>
    );
}

export default Navbar;