import { Outlet } from "react-router-dom";

const ProductsLayout = () => {

    return (
        <div>
            <h2>Welcome to Products</h2>
            <Outlet/>
        </div>
    )
}

export default ProductsLayout;