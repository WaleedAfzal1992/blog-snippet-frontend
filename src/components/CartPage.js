import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CartPage.css';


function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setCartItems(response.data.cart_items || []);
      } catch (error) {
        console.error('Error fetching cart:', error);
        if (error.response?.status === 401) {
          alert('Please login to view your cart');
          window.location.href = '/login';
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, []);

const handleCheckout = async () => {
  if (cartItems.length === 0) return;

  const firstItem = cartItems[0];

  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/jazzcash-payment/',
      {
        course_id: firstItem.course.id,
        quantity: firstItem.quantity
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        }
      }
    );

    console.log("JazzCash Response:", response.data);
    const { redirect_url, post_data } = response.data;

    // Create a form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = redirect_url;

    // Add all post_data as hidden inputs
    Object.keys(post_data).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = post_data[key];
      form.appendChild(input);
    });

    // Submit the form
    document.body.appendChild(form);
    form.submit();

  } catch (error) {
    console.error("Checkout error:", error);
    alert("Failed to initiate JazzCash payment.");
  }
};


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (parseFloat(item.course.price) * item.quantity);
    }, 0).toFixed(2);
  };

  if (isLoading) return <div className="loading">Loading cart...</div>;

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/courses" className="btn-continue">Browse Courses</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.course.image} 
                  alt={item.course.title} 
                  className="course-image"
                />
                <div className="item-details">
                  <h3>{item.course.title}</h3>
                  <p>Price: Rs {item.course.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: Rs {(item.course.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>Rs {calculateTotal()}</span>
            </div>
            <div className="summary-row">
              <span>Discount:</span>
              <span>Rs 0.00</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>Rs {calculateTotal()}</span>
            </div>
            <button className="btn-checkout" onClick={handleCheckout}>Proceed to Checkout</button>
            <Link to="/courses" className="btn-continue">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;