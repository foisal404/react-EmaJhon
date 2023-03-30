import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {category,id,img,name,price,ratings,seller}=props.product;
    // here props.stateChanger return a function  not array or object so it can't distruturing 
    const stateChange=props.stateChanger;
    // console.log(stateChange);
    // onclick function 
    // const stateChange=()=>{
    //     console.log("update");
    // }
    return (
        <div className='product'>
            <img src={img} alt="image" />
            <h6 className='name-title'>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} start</p>
            {/* onClick={()=>stateChange(key)} because in onclick we can"t pass key so use arrow function */}
            <button className='added-cart' onClick={()=>stateChange(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;