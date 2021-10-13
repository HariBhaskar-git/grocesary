import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'http://api.grocerydunia.com/' : 'http://localhost:50416/api/'
export const productsUrl = baseUrl + '/product'
export const cartUrl = baseUrl + '/cartitems'
export const wishlistUrl = baseUrl + '/wishlist'
export const loginUrl = baseUrl + '/login'
export const registerUrl = baseUrl + '/register'
export const productmasterUrl = baseUrl + '/product'
