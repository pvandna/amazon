import React, { useEffect, useState,useContext } from 'react';
import './Products.css';
import { SearchContext } from '../../Context/SearchContext'; // Import the context for search bar search
import { useLocation } from 'react-router-dom';
function Producs() {

  const location = useLocation();
  const PRODUCT = location.state; // The data passed from Page 1
  let [categories, setCategories] = useState([]);
  let [card, setCard] = useState([]);
  let[catName,setcatName]=useState("");
  const { searchQuery } = useContext(SearchContext); // Get searchQuery from context
 


  const exchangeRate = 82; // Set your USD to INR exchange rate here


  
  

  useEffect(() => {
   
    if (searchQuery) {
      
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => res.json())
        .then((finalRes) => {
          setCard(finalRes.products); // Set products based on search query
        })
        .catch((error) => {
          console.error('Error fetching searched products:', error);
        });
    }
    console.log(searchQuery)
  }, [searchQuery]);



  let getCategories = () => {
    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((finalRes) => {
        setCategories(finalRes);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  };

  let getCardData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((finalRes) => {
        // Filter out products with index 5, 6, and 21-30
        const filteredProducts = finalRes.products.filter((_, index) =>index !== 4 && index !== 5 && index !== 6 && (index < 15 || index > 30));

        setCard(filteredProducts); // Set the filtered products
        console.log(filteredProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    getCategories();
    getCardData();

  }, []);

  useEffect(()=>{
    if( catName!=="")
      fetch(`https://dummyjson.com/products/category/${catName}`)
    .then((res) => res.json())
    .then((finalRes) => {

     const filteredProducts = finalRes.products.filter((_, index) => index < 12);

      setCard(filteredProducts); // Set the filtered products
      console.log(filteredProducts);
     

      
  
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
   

  },[catName])
  return (
    <div className='products'>

      <div className='navbar-products'>

        <ul>
          <li style={{ fontWeight: 'bold' }}>Electronic</li>
          <li>Mobile & Accessories</li>
          <li>Laptop & Accessories</li>
          <li>Tv Home & Entertainment</li>
          <li>Audio</li>
          <li>Cameras</li>
          <li>Music</li>
          <li>Electronic</li>
          <li>Hair</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="main-product">
        <div className="left-product">
        <h3 style={{ margin: '20px 3px 20px 3px' }}>PRODUCTS CATEGORY</h3>
          {categories.map((category, index) => (
            <div onClick={()=>setcatName(category)} key={index}>{category}</div> // Corrected category display
          ))}
        </div>

        <div className='right-product'>





          {card.map((product, index) => (
            <div className="productLongCardItem" key={index}>
              {/* <img className="productLongCardItemImg" src={product.images[0]} alt={product.title} />  */}
              <img className="productLongCardItemImg" src={product.thumbnail} alt={product.title} />

              <div className="productbottomHomeDetail">
                {product.title}
              </div>

              <div className="star">
                {'★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating))}
                {product.rating}
              </div>


              <div className="productLongCardItemImgDetail">
                <div className="productLongCardItemImgTopDetail">
                  <div className="productlimitedTimeDealhomeDetail" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                  ₹{(product.price * exchangeRate).toFixed(2)} {/* Price in INR */}
                  </div>

                  <div className="productPercentageOff">
                    Add To Cart
                  </div>
                </div>

                <div className="productbottomHomeDetail" style={{ color: 'gray' }}>
                  Upto {product.discountPercentage}% off on selected items
                </div>

                <div className="productbottomHomeDetail" style={{ fontWeight: 600 }}>
                  Free Delivery
                </div>
              </div>
            </div>
          ))}





        </div>
      </div>
    </div>

  )
}

export default Producs