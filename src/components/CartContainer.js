import React from 'react'
import CartItem from './CartItem'


const CartContainer = ({cart}) => {
    if(cart.length === 0){
    return (
        <section className="cart">
          <header>
            <h2>Your Bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
    )
  }
  else {
      return(
          <section>
            <header>
             <h2>Your Bag</h2>
             <h4 className="empty-cart">is currently empty</h4>
            </header>
            <article>
              {cart.map(item=>{
                  return <CartItem key={item.id} {...item} />
              })}
            </article>
            <footer>
              <hr/>
              <div className="cart-total">
                <h4>
                 total <span>$0.00</span>
                </h4>
              </div>
              <button className="btn clear-btn">Clear Cart</button>
            </footer>
          </section>
      )
  }
}

export default CartContainer
