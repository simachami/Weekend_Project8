import { Shop } from './ShoppingCart/shoppingCart'
import { setupUserForm } from './forms/login_form'
import { initializeShopItems, shopItems } from './forms/shop'


const shop = new Shop()

console.log(setupUserForm)
console.log(initializeShopItems(shop))
console.log(shopItems)


//const user = new User("Sima", 21)
//let desktop:Item
//let monitor:Item
//let candle:Item



// if(shop != null && user != null) {
//     if(shop.items.length >= 3) {
//         desktop = shop.items[0]
//         monitor = shop.items[1]
//         candle = shop.items[2]

//         user.addToCart(desktop)
//         user.addToCart(monitor)
//         user.addToCart(candle)

//         user.printCart()
//         console.log(`Cart Total: ${user.cartTotal()}`)
    
//         user.addToCart(monitor)
//         user.addToCart(candle)
//         user.addToCart(monitor)

//         user.printCart()
//         console.log(`Cart Total: ${user.cartTotal()}`)

//         user.removeFromCart(monitor)

//         user.printCart()
//         console.log(`Cart Total: ${user.cartTotal()}`)

//         user.addToCart(desktop)
//         user.addToCart(candle)
//         user.addToCart(desktop)
//         user.addToCart(monitor)
//         user.addToCart(candle)
//         user.addToCart(desktop)

//         user.printCart()
//         console.log(`Cart Total: ${user.cartTotal()}`)

//         user.removeQuantityFromCart(desktop, 2)

//         user.printCart()
//         console.log(`Cart Total: ${user.cartTotal()}`)
//     }
// }
