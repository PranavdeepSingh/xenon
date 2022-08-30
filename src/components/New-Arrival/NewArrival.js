import React from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

// Styled Components
import { Section, NewArrivalTitle, NewArrivalH1, ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from './NewArrival.styled';

const NewArrival = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <NewArrivalTitle>
          <NewArrivalH1>NEW ARRIVALS</NewArrivalH1>
          <p>All the latest picked from designer of our store</p>
        </NewArrivalTitle>
        <ProductCenter>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('')}>
              <Link to="">
                <ProductThumbImg src={require("../../assets/images/product-1.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>WOMEN'S CLOTHES</span>
              <ProductInfoLink to="">Quis Nostrud Exercitation</ProductInfoLink>
              <h4>Rs 900</h4>
            </ProductInfo>
           
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('')}>
              <Link to="">
                <ProductThumbImg src={require("../../assets/images/product-3.jpg")} alt="" />
              </Link>
              <span>50%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>WOMEN'S CLOTHES</span>
              <ProductInfoLink to="">Purple Hodie</ProductInfoLink>
              <h4>Rs. 2750</h4>
            </ProductInfo>
            
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('')}>
              <Link to="">
                <ProductThumbImg src={require("../../assets/images/product-2.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>ACCESSORIES</span>
              <ProductInfoLink to="">Red Bag Courage Outdoor</ProductInfoLink>
              <h4>Rs 2250</h4>
            </ProductInfo>
           
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('')}> 
              <Link to="">
                <ProductThumbImg src={require("../../assets/images/product-4.jpg")} alt="" />
              </Link>
              <span>50%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="">Grey Man Jacket</ProductInfoLink>
              <h4>Rs. 1800</h4>
            </ProductInfo>
            
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('')}>
              <Link to="">
                <ProductThumbImg src={require("../../assets/images/product-5.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="">Black Man Jacket</ProductInfoLink>
              <h4>Rs. 2000</h4>
            </ProductInfo>
            
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('')}>
              <Link to="">
                <ProductThumbImg src={require("../../assets/images/product-6.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="">Green Shirt Men</ProductInfoLink>
              <h4>Rs. 850</h4>
            </ProductInfo>
          
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('')}>
              <Link to="">
                <ProductThumbImg src={require("../../assets/images/product-7.jpg")} alt="" />
              </Link>
              <span>50%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="">Blue Shirt Men</ProductInfoLink>
              <h4>Rs. 950.</h4>
            </ProductInfo>
            
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('')}>
              <Link to="">
                <ProductThumbImg src={require("../../assets/images/product-9.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>ACCESSORIES</span>
              <ProductInfoLink to="">Dark Blue Shoes by Hardrock</ProductInfoLink>
              <h4>350.000</h4>
            </ProductInfo>
            
          </ProductItem>
        </ProductCenter>
      </Section>
    </>
  );
};

export default NewArrival;