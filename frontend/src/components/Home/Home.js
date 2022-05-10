import React from 'react'
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from './Product'
import MetaData from "../layout/MetaData"
import { getProduct } from "../../actions/productAction"
import { useSelector, useDispatch } from "react-redux"
import Loader from '../layout/Loader/Loader'
import { useAlert } from 'react-alert'
const product = {
    name: "Blue Tshrit",
    images: [{ url: 'https://i.ibb.co/DRST11n/1.webp' }],
    price: "3000",
    _id: 'abhishek',
};
const Home = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, error, product, productsCount } = useSelector(state => state.products);
    React.useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        dispatch(getProduct())
    }, [dispatch, error, alert])
    return (
        <React.Fragment>
            {loading ? <Loader /> : (
                <React.Fragment>
                    <MetaData title="ECOMMERCE" />
                    <div className="banner">
                        <p>Welcome to Ecommerce</p>
                        <h1>FIND AMAZING PRODUCTS BELOW</h1>
                        <a href="#container">
                            <button>
                                Scroll <CgMouse />
                            </button>
                        </a>
                    </div>
                    <h2 className="homeHeading">Featured Products</h2>
                    <div className="container" id="container">
                        {product && product.map((product) => {
                            return (<Product product={product} />)
                        })}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Home