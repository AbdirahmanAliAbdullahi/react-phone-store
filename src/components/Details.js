import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'


export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {value => {
                const {id,info,price,title,inCart,img,company} = value.detailProduct;
                return (
                    <div className="container py-5">
                        {/* title */} 
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* endtitle */}
                        {/* product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alti="product" />                              
                            </div>
                            <div className="col-10 my-3 mx-auto col-md-6 text-capitalize">
                                <h3>model:{title}</h3>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by : <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price : <span>$</span>{price}
                                    </strong>
                                </h4>
                                    <p className="text-capitalize font-weight-bold my-3">
                                        Some Info About Product:
                                    </p>
                                    <p className="text-muted my-3">{info}</p>
                            </div>
                            {/* button */}
                            <Link to="/" >
                                <ButtonContainer>Back To Products</ButtonContainer>
                            </Link>
                            <ButtonContainer
                            cart
                            disabled={inCart?true:false}
                            onClick={() =>{
                                value.addToCart(id);
                                value.openModal(id);

                            }}
                            >
                                {inCart?'In Cart':'Add To Cart'}
                            </ButtonContainer>
                        </div>
                    </div>
                )
               }
            }
               
           </ProductConsumer>
        )
    }
}
