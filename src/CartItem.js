import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
         price:999,
         title:'Mobile-phone',
         qty:1,
         img:''
        }
    }
    render(){
        const{price,title,qty}=this.state
        return(
          <div className="cart-item">
              <div className="left-block">
                <img style={styles.image}></img>
              </div>
              <div className="right-block">
                  <div style={{fontSize:25}}>{title}</div>
                  <div style={{color:'grey'}}>Rs.{price}</div>
                  <div style={{color:'grey'}}>Qty: {qty}</div>
                  <div className="cart-item-actions">
                      {/* {Buttons} */}
                      <img alt="increase" className="action-icons" src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"></img>
                      <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1619427117~hmac=2840ebc328d8b30a4b6c9a432d0c52ed"></img>
                      <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"></img>

                  </div>

              </div>
          </div>  
            
        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#ccc'
    }
}

export default CartItem;