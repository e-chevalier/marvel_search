import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [cartCounter, setCartCounter] = useState(0)
    const [subTotal, setSubTotal] = useState(0)


    const addItem = (prodId, qty) => {
        console.log("Calling AddItem" )
    }

    const removeItem = (prodId) => {
        console.log("Calling removeItem");
    }

    const clear = () => {
        console.log("Calling clear");
    }

    return (
        <CartContext.Provider value={{ cartList, cartCounter, subTotal, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )

}


export default CartContextProvider