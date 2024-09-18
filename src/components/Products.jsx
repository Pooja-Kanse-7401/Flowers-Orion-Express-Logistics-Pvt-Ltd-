import Cards from "./Cards"


function Products() {
    return (
        <>
            <div id="products" className="h-[100%] w-[100%] flex justify-start pt-10 items-center flex-col bg-gradient-to-br from-pink-100 to-pink-400 overflow-y-auto">
                <h1 className="text-4xl font-bold">Latest<span className="text-pink-700"> Products</span></h1>
                <div id="cards" className="flex justify-center items-center w-[80%] flex-wrap ">
                    <Cards/>
                    <Cards/>
                </div>
            </div>
        </>
    )
}

export default Products
