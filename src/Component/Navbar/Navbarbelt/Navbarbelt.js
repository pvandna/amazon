import React from 'react';
import './Navbarbelt.css';
import { useContext, useState, useRef, useEffect } from 'react';
import amazonelogo from '../../../Assets/amazon_logo.png';
import flag from '../../../Assets/flag.png';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../../Context/SearchContext'; // Import the context


function Navbarbelt() {
  const [searchInput, setSearchInput] = useState('');
  const { setSearchQuery, suggestions, setSuggestions } = useContext(SearchContext); // Get context values
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);
  const [products, setProducts] = useState([]);
  const location = useLocation();





  // ----------------Define the fetch Products function so that it move / to /product(with the help of navigator)with search data-----------------------------------------

  // Get search query from URL
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query'); // Extract the 'query' parameter from URL
  const fetchProducts = (query) => {

    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // Update the products list

      })
      .catch((error) => {
        console.error('Error fetching products:', error);

      });
  };

  // Fetch products based on the query from URL when the component mounts
  useEffect(() => {
    if (query) {
      fetchProducts(query); // Fetch products based on search query
    }
  }, [query]);
  //---------------------------------------------------------------------------------------------------------------------------------------------

  // Fetch suggestions based on input
  const fetchSuggestions = (query) => {
    if (query.length > 0) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          const suggestionList = data.products.map((product) => product.title);
          setSuggestions(suggestionList);
        })
        .catch((error) => {
          console.error('Error fetching suggestions:', error);
        });
    } else {
      setSuggestions([]); // Clear suggestions if query is too short
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchInput(query);
    fetchSuggestions(query); // Fetch suggestions as the user types

  };

  const handleSearch = () => {
    if (searchInput.trim()) {

      setSearchQuery(searchInput); // Update the search query in context
      setSuggestions([]); // Clear suggestions after search
      navigate(`/products?query=${encodeURIComponent(searchInput)}`); // Navigate to products page with query
      setSearchInput("")
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion); // Set input to the selected suggestion
    setSuggestions([]); // Clear suggestions after selection


  };



  return (
    <div className='navbarbelt'>
      <div className='left'>
        <Link to="/" className='navbar_logo'>
          <img src={amazonelogo} alt="logo" className='navbar-img' />
          <span className='navbar-in'>
            .in
          </span>
        </Link>

        <div className="navbarbelt-second">
          <div className='nav-location'>
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className='description'>
            <div className='pune'>
              Delivery To Pune 411032

            </div>
            <div className='update-location'>
              Update Location
            </div>
          </div>
        </div>




      </div>



      <div className='navbar-search' ref={searchRef}>
        <div className='navbarsearch-div'>
        
          <div className='all'>

            <select id="fruit" name="fruit">
              <option selected="selected" value="search-alias=aps">All Categories</option><option value="search-alias=alexa-skills">Alexa Skills</option><option value="search-alias=fashion">Amazon Fashion</option>
              <option value="search-alias=amazon-devices">Amazon Devices</option><option value="search-alias=nowstore">Amazon Fresh</option>
              <option value="search-alias=freshmeat">Amazon Fresh Meat</option>
              <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
              <option value="search-alias=appliances">Appliances</option>
              <option value="search-alias=mobile-apps">Apps &amp; Games</option>
              <option value="search-alias=audible">Audible Audiobooks</option>
              <option value="search-alias=baby">Baby</option>
              <option value="search-alias=beauty">Beauty</option>
              <option value="search-alias=stripbooks">Books</option>
              <option value="search-alias=automotive">Car &amp; Motorbike</option>
              <option value="search-alias=apparel">Clothing &amp; Accessories</option>
              <option value="search-alias=collectibles">Collectibles</option>
              <option value="search-alias=computers">Computers &amp; Accessories</option>
              <option value="search-alias=todays-deals">Deals</option>
              <option value="search-alias=electronics">Electronics</option>
              <option value="search-alias=furniture">Furniture</option>
              <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
              <option value="search-alias=gift-cards">Gift Cards</option>
              <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
              <option value="search-alias=hpc">Health &amp; Personal Care</option>
              <option value="search-alias=kitchen">Home &amp; Kitchen</option>
              <option value="search-alias=industrial">Industrial &amp; Scientific</option>
              <option value="search-alias=jewelry">Jewellery</option>
              <option value="search-alias=digital-text">Kindle Store</option>
              <option value="search-alias=luggage">Luggage &amp; Bags</option>
              <option value="search-alias=luxury-beauty">Luxury Beauty</option>
              <option value="search-alias=dvd">Movies &amp; TV Shows</option>
              <option value="search-alias=digital-music">MP3 Music</option>
              <option value="search-alias=popular">Music</option>
              <option value="search-alias=mi">Musical Instruments</option>
              <option value="search-alias=office-products">Office Products</option>
              <option value="search-alias=pets">Pet Supplies</option>
              <option value="search-alias=instant-video">Prime Video</option>
              <option value="search-alias=shoes">Shoes &amp; Handbags</option>
              <option value="search-alias=software">Software</option>
              <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</option>
              <option value="search-alias=specialty-aps-sns">Subscribe &amp; Save</option>
              <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
              <option value="search-alias=toys">Toys &amp; Games</option>
              <option value="search-alias=under-ten-dollars">Under ₹500</option>
              <option value="search-alias=videogames">Video Games</option>
              <option value="search-alias=watches">Watches</option>
            </select>


          </div>





          <input
            type='text'
            placeholder='SearchAmazone.in'
            className='navbar-inputbox'
            value={searchInput}
            onChange={handleInputChange} // Call the handleInputChange to fetch suggestions

          />
          <div className='navbarsearch-icon' onClick={handleSearch}>

            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className='suggestions-dropdown' ref={suggestionsRef}>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className='suggestion-item'
                  onClick={() => handleSuggestionClick(suggestion)} // Handle suggestion click
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}


        </div>

      </div>




      <div className='right'>
        <div className='flagdiv'>
          <img src={flag} className='india-flag' />
          <div className='right-arrow '>
            EN

            <i class="fa-solid fa-caret-down " ></i>
          </div>


        </div>


      </div>


      <div className="navbarbelt-second">
        <div className='description'>
          <div className='pune'>
            Hello,users

          </div>
          <div className='update-location'>
            Accounts & Lists
          </div>
        </div>
      </div>


      <div className="navbarbelt-second">
        <div className='description'>
          <div className='pune'>
            Return

          </div>
          <div className='update-location'>
            & Order
          </div>
        </div>
      </div>




      <div className='card-main'>
        <div className='card'>
          <div className='card-div'>
            <span style={{ color: "#febd69" }}>0</span>


            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className='cart-sign '>
            cart


          </div>


        </div>


      </div>



    </div>
  )
}

export default Navbarbelt