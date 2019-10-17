import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
               {(value) => {
                    const {modalOpen,closeModal} = value;
                    const {img,price,title} = value.modalProduct;
    
                    if (!modalOpen) {
                        return null
                    } else{
                        return (<ModalContainer>
                            <div className="container">
                                <div  className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 
                                    col-lg-4 text-center text-capitalize p-5">
                                            <h5>item added to cart</h5>
                                            <img src={img} className="img-fluid" alt="product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted" >Price : ${price}</h5>
                                            <Link to="/" ><ButtonContainer onClick={() => closeModal()}>
                                                Continue Shopping</ButtonContainer></Link>
                                                <Link to="/cart">
                                                    <ButtonContainer  cart onClick={() => closeModal()}>
                                                        Go to the Cart
                                                    </ButtonContainer>
                                                </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>)
                    }
               }}


            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div `
position:fixed;
bottom:0;
top:0;
right:0;
left:0;
background:rgba(0,0,0,0.4);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}

`;