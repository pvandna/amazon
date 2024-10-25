import React from 'react';
import { useContext,useEffect,useState } from 'react';
import { SearchContext } from './../../Context/SearchContext'


import './Cart.css'


function Cart() {
    const { cartItems,removeFromCart,clearCart } = useContext(SearchContext);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        // Calculate the subtotal whenever cartItems change
        const total = cartItems.reduce((acc, item) => acc + (item.price * 82), 0);
        setSubtotal(total);
    }, [cartItems]);

    const handleRemoveFromCart = (index) => {
        removeFromCart(index); // Call the function to remove item from cart
      
       
       
    };
    return (
        <div className='cart'>
            <div className='cart-left'>
                <div>
                    Shopping Cart

                </div>
                <div className='deselect'>
                    <div onClick={clearCart} style={{ cursor: 'pointer', color: 'blue' }}>Deselect all items </div>
                    <div>Price</div>
                </div>

                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div className='cart-card' key={index}>
                            <div className='cart-img'>
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className='inside-cart-card'>
                                <div className='cartItemProductName'>{item.title}</div>
                                <div className='inStockCart'>In stock</div>
                                <div className='elgFreeShp'>Eligible for FREE Shopping</div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABNVBMVEX///8AAAD///37+/v/fwD/+PDCwsL//fr/9Of/69L/rGHX19d1dXX/egD//Pf+xIX+h0JfX18VFRX/lDCGhobs7OxGRkb/nFf/cAD09PUaGhusrKwODQ2hoKC9vb3+awD/052Xl5f/r2//wnb/5cBQUFD+YwD+jjH/sl//oVX/t3v/q1QgICAqKir/dQD+9Nj/l0D+eBf/3r/+9d//iDXh4eH/hQD/xH5/f3/+jR//1qc6Ojqzs7NYWFg8PDxsbGz+pkj/y5T+/+7+zZT+37b+SwD/xJv/njGRj4v/2b//s4D+vov/nmL/zZ7/kUv/mkD97MD/SgD/7uj/lh//3q3/lWb/jQD/nT/+88z+yoT+5LX/59D+sFD+fjT+hGb+elL/waL+ilX+eEb/0K3+qm7+fjn/tmvW5WqkAAAPNUlEQVR4nO2ai1/aShbHhzx4xYQioEEeEY2ICEFAAkGUh/jo9dre3XZrrdu9e7dd/v8/YeeZBKQtvVqLd+f36SOPmUnmO2fOnDMBAC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4urr+OhB9Q8v9BqZaipNDBHCzfJiWwNlrpR3qfZzM6IgCF5Er8+GTtuJ8s+G4ovWCwF0Q8csmVlZVknpRO5Tor/U5SwTWxUFeVQrJ/vHO0E8d3XOULmSnlCi1KBlbOJzuo3ULKV6GVCeZ7PfTQIHpoJ5dadpLBnYCnnR6johytVioblQJI98mt1QzqdPCInFU6Hj+QTla9Jip9t2mlGlidUjbgDlDweINWOEq6FVLHWfjQ1RwA/Qq+l13zj8byqRUPTOsSQxFBhpx2Uh5d2KueVzDuTtTWTBOBIL2Rm70RCPSprXX8F49YhSB9qL/m8vITQPp4tn/ZDDEq2pOkryMbStpfEhuSIIBUdraNNTpFe7M3AoEVDF28nL7K+CnEiguKz5qrPwXNYirc7+AOcTcU38mJ71Z/xV8w3gJoBFKz9hvAdoo0x/owPjFTmbl8QoySYpt+zvKaH2AjnIMLAnvdDHZqwftdD0ybWTWICoq5VYo92cmwiX6MyIrzrA/7Ode4OoW4/zq7kZ16UPwn8vm6kuQFN3qCmE5Tbxcgrt/DV/WvLYEN1xzhNBc957naEtMgRZcZ6P2QBacLlwX4J5fPsEpHyJQE+qRqJi36agAfVwjNferG0i6+pFdZMj0YCGIILr5eC7QK7KRSUFJuHy/TEB9bigFeidkqgmF4vW4xF5tDV1khHAqBvvtU0cNXzYN0hi3yTwxlccWr1Y1s4ISeUVe1g08YvgIO69bYGbol0qCigPApa6iJwDFpIrXm4vOZTItZEjHsPLUv4jvp0GwE/fjwgF4uOz4FBqm5FWYqHj7Bw0cCQbZSAt9ynS2gySvCJjLJTotEgWwdofjIXzFJfVmVLBB91xKRWsR3VnrAm7zJdNo720jde+9lkvt2mTn4TsjEpvhwECGKKz58WCKLAWfwTbXLZitbryg+QG0ZuQKGjxZcew74oBRFyRSSa3Pwxcm70xmGF0FR7PgmL4r80H+tYDCYyXVW7+Nzg8UCpT2Dj7o4tForBGWFrDwM32Ml0j9E6XwuXlldDbiah4/O6xV07OLLYetDHU0pybXVrK8NPz6WYBzTYJquHBs9ep+OGkrPPHy+O8uMT1SmQtQv4iPeC7t+UUz68UF4yZPZNnz4GL0qNSmguOdEdF05Trn4qMdYfnzp5Gz8/1V81PooPjx5YRxybwA8fAJQGFo2V9nCW6UOjlnfTuv54WOmka3GC/n+9+LD1ucmbdmjfi9TncIneIF0PM3skeFj1ncf39ozwceik2qvlRLnrrzfxJdiIxBXWil3d4tZn1hg9thyZzOdvBXm+9jkfX746JuvpXDKMC9s/iY+lnXsCHgz9diPD56zTb2ctzs4u/LuPFfrC5K3XaVv68MnLur70szxkSbY7iDGJ3gxC0VFDHAGH3WOO8pzw0d3DCq4W6Jw+QB8xGRBatr3MbZrcGJTCMI9fLRKxwubnwm+FYYPq0V9OExfBdFNTL+Bj6WzfTI5p7YMmJeDRXfi8WQmp+BCAvWWdN+ezu+NHnhu+PpT+BSamVZayPoWxMc2E+IEX4HyggmG4O0UMJ108FY2pUrDE1qlEnyu+EhSmWa7Ksh0Frc+tt1HWnRJKRBfbyMwq9VOatZE6UusgGeHz02n4IxK+/bcgwvigyuvG9f1RVjJ2yVGG1gZXxbnCgXLLF5SRNH96oGf87zwBd3dydxUVxGz78UXOO5NfT3Lz8e3ikzO3T6MX7KchOzIPy98bLNjVsfKwviE/BfayH0FH8jPTutjkhA/M3zKVB9WqDXGW/cnLzmjWwZs6UQ5rzhlc4FkocLoUeY7uTxWYc3Dly5M09uhvObnvMu735f09aGfJpRWUr6vZPibmbs84uhOFOmE7eD9vpbvmyxacbEPzdBKR0GUDWKJqRYaLZKqiVPfMOlDXKdYndqwWm2BpRWzv2wWr7fQlHKouzgBzmaziClSgZyR7VKU2KJvifhTEXDXzkC2igufsHQ2lWzNfiNrZdhRyp3Z2UvN9zboMUcuPnRWWdrJi6R04vF+ko1w3t2pS+UVhf7sCuD9aEXJu3WCCvxDjmHp9GUftuH+1qdz78O2ps1eQY2sHMeh/D9LAukefEyQ8WqhV8gvsfH9eGl3L19+Oh++fPnybh7Dv56ER/wsbZ7/kpBU1bIsVd29kv23arWm9tUf8jXf10aP9iJPJgE01mFHQ4/QUG1rV0XgVNtxHFtXIx6tD78eHLza02ZryNdbpwIuFI6+2n29Pg51t36DZ9db15oAIuVz+SFj+xS/VoB9kM4SY/wJ7WHtmIdnhuRcDAaDC1tyHEl673ageagXi2d/+/tslfCBMRDQyGkDHZWINd6pDjyNGvuyALalF5EHvdPTSI4WjTeRr0+tBTR6a8pw1dDQwvFWdSSn5t76rFtbI/mDPFslvK4ifNBwi+peJBQBLx1jD4BQVI9CfDGE7wHv9Jv1pvHnay8o+H7hcl23oo3wg03QbVIrqXYizM61fxiv5haE+Pax37gtOqSnjZj2aPi6Z9KPx4ckXx8aqho9R3PlIc4G0Q+HQUgAZR3iI01BJ3ZoTMhNd3gEJGp90H/s69EROgAhDa1lfny4Hi3vP/C1I7Bj33349y0ak8cxiG9IM/cMVVIHV+/hSejPPRF3vzncW4dDPhpY0kRm7ZiHxqZXzHdEJy/Q9o0rf0uz1heaqeoNwvT/TKQHEcN5GusDaOmzVEdVE6VTQEl8l0iND9HXkn42BODunWU3aC9HkU3H2q6ZNTin39dYnFQzQ2jyWgMIr1m7sUrvIya6/GFm8gLw3kTOtN3+gLHV2u3bMGB2Dczb29sP9GVHyLlqt+1T5HSFWi1mOd2m+fCYYiFpHw4suF6q0ruSiby/sGhACMshA9LMkm1DCzZuR2jeSIk7Ul9+p0o2XIct6Q7cqXaDVKnZBvRyGJ9WtmxYQLWKMXC3W5xMWx84VQ+bf4cDK6kX8EllSZcku02ZNN5Iqm5Jqonetbl/di3EbHhb+qcGGqqEH2uUfhCvWQgwzvqowohNct5clMxwWAPMl3yxDvFnIBQO300S6MVtZ7AJb8jbRalN11lt718vbLv+j99f3IGxbmGbhPisYhnh0weC9u/f/4AV//j9P0PQ2C3uwzpbPnwx44W5Xv+lfFDXt0JXxf+Uox91/RQ33ZX0F1uxrY9F6RMcwebN2fDaqr9aP7TUqND444+6bb/41+/lJ/qxKpxbjT3HTlwkYND7LjG4bkSabqAr3BP1QKFmpHG9n7ChHBumGjVktpFdy2FzF4RDY0dva81wCJiqzfA59aHGJu9o9Nraajbh0+4O9G2Ez/LwbdpOQh0DrRZVD08Pf21q4U+7uoPMLaLqTkPTZHOvCC0brT83jjpsyuOEpY6F8OhWt8fa6F609MPwwa52SxAg5AcJ2s5FKXbdjUS+mEs1zXF3GL1x4HRBiYalXkVk3M64rk80z2rN3SIxF1N1GL5dhg8VE/f0X3CBufhU5xOuDOfiLnKG2pZqwFECe8bhGM/iLvYEEJ8tXSM/0v2olgHyIPaTLR1UwqhbkqQEEmV4Myi1h8NN06zVajgmHsEDc3x6etou3SQcCZODpVVp0sXGKgjhSTHR9HlOiO8W4MTkHj6y8soDo4xd7Tx8jjUII5MOD1T1HLfaVfUu9DV1a4vMDqFd3AtjfG0ZzQvtwPoML28WpcaC/vsRNepOJNXBBPFEht5Zh+cXFzc3g32Ykg1uLi4u3kCnjZJbXCSRsC1nu0tnOsyi6/pbf4vU+r6MDwYuZVxyHj6pHpNxYretJwiOxkc9Bgup9a4ghKDAUKqPQbhkJEx8PzQp7o0Qvie3PhxCyWYsIUkORUgt0YZLg4ok4SXCf88+fL1pem5Si6He+fQ1fDjr+Aa+Lo6KtHZxQOLAyCF6wGf1xUiTkUJdp76pySVjP4I9hrZtQGuE+J4u7vOEXkBudKOv0CLswzRHaJ22d9cnZiREcw5UXx4Op1driG8T/Gl8dn1MoRRLTQ+f8KvqTGJlpKuorZdluVScNFlJhK/7U/AB3FMhHBlGB44tfQkhJFdX7d3oZBwOs5/VE4XkmZDR3MVZx3x8C0xeMiUJPiSML7yOYkkYU+JFX20jfNskzf75+NAoauFmNxbdh9MWhqaS42JE7tBS3zk30fLwTpYF8C3/7MNn/5nJOwZ08vrxNV9JzmmXaRgBS4QPSUBbSTAZM0/bk9LNxRu4YCTQP1A3++XtYbcWQpAXyO8eDd/+FD71FfCHoeHlwocUYnBGTdMcj8fdLvzHNN1QcLHc2MUXkQi+EOg6D8UHPusvNPSCaPWFf5YRH8BGOJdRaPGtIBffnUR24EJgIkkPxmd9NNkbhuVlxUd0L2P7HlF8kI6kow7BwHZg2YsvHfPxXUvqFcnKwXivHFlqfA8SwyeE3+hRfGUIl6Lvtr7taXzaoXVAvoU0BxYMqO/he/sXwwfkiVqEEy60CbMU+2v49PmBix+fACZFawtdqMFWt/HSMWH4cNjcNOzrp+/s48s8JFsGMJ2zVWPSmBj66WsL7fe90knOe1Pcwsn/3a4xgf9F9T2Ir239F+Gz6m8FDx86Mj+StObGMKTh5unrYrEEaYX3XXwkaQPvrMSwcX33U/r8iDLrZ5vkSL5yVKNYVLeEA7zfd1i8wPgSZ5/x/cghsiNhr3ggI+tCa0PMMOjknZzd0KzjoxFDg9GE2YZhFQ0Jw2renFHrlEtn6+hK11ald9Lkifabf5jCn85JvwRBbpQHg3JXDn06vwsB+dM5TshC4yvipeAF5M5eXjU0GCUOr6E1Ra6viE2FGucN2V8KHVz9c1C6+oQva+PzhkZLXnXx1sG4PRgMxk++6fLDhPYjIpE5O5jCvFN6MfSlrAZlRs0I+/GHP1NksYEMbz9340PyfSSb+dL4xZIkPQFeTih4B75LXw+jvjvI4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uJ6bP0P8kIECcUp6xkAAAAASUVORK5CYII=" alt={item.title} />


                                <div className='removeFromCart'onClick={() => handleRemoveFromCart(index)}>Remove From Basket</div>
                            </div>
                            <div>₹{(item.price * 82).toFixed(2)}</div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}








            </div>











            <div className="right-cart">
                <div className="subTotalTitle">Subtotal  : <span className='subTotalTitleSpan'>Rs {subtotal.toFixed(2)} </span></div>
                <div className="giftAddto">
                    <input type='checkbox' />
                    <div>This Order Contains a gift</div>
                </div>
                <div className="proceedToBuy">Proceed To Buy</div>

            </div>
        </div>
    )
}

export default Cart