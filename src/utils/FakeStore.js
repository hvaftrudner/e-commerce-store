

const FakeStore = {

    getAccessToken(){
        return fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                //use whatever from database
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    },

    getAllCategories(){
        return fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },

    getProductsOfCategory(category){
        return fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, 

    getAllProducts(){
        return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },

    getSingleProduct(id){
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
    },

    getAllCarts(){
        return fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },

    getASingleCart(cartId){
        return fetch(`https://fakestoreapi.com/carts/${cartId}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
    },

}