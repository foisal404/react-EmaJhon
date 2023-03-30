import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    // load data 
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    // event handler 
    const [state,setState]=useState([]);
    const stateChange=(props)=>{
        setState([...state,props])
        // console.log(props);
        // console.log(state.length);
        // console.log(state);
    }

    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(product=><Product key={product.id} product={product}
                        stateChanger={stateChange}></Product>)
                }
            </div>
            <div className='cart'> 
                <h5>Order Summary</h5>
                <p>Selected Items: {state.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;