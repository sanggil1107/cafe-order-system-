import React, { useEffect, useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './../Services/ServicesElements';
import ProductService from '../../service_backend/ProductService';

const ProductMenu = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        ProductService.getProductList().then(res => {
            setProductList(res.data);
        })
    },[]);

    return (
        <ServicesContainer>
            <ServicesH1>상품</ServicesH1>
            <ServicesWrapper>
                {productList.map((product, i) => (
                    <ServicesCard>
                        <ServicesIcon src={product.image}/>
                        <ServicesH2>{product.name}</ServicesH2>
                    </ServicesCard>
                ))}
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default ProductMenu;
