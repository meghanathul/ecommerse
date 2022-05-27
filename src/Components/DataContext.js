
import react, { createContext, useState } from 'react'
export const DataContext=createContext()
    export const DataProvider=(props)=>{
const [items,setItems]=useState([
    {  
      "name": "EUROLINE 810 POP UP 700 W Pop Up Toaster  (White)",
      "productId": "EURO19938201",
      "brandName": "EUROLINE",
      "category": "Pop Up Toasters",
      "companyAssured": false,
      "rating": "4.2",
      "price": "12232",
      "discount": "50%",
      "imageURL": "https://rukminim1.flixcart.com/image/416/416/k5lcvbk0/pop-up-toaster/2/j/w/euroline-820-pop-up-810-pop-up-original-imafz8h3duveqgh7.jpeg?q=70",
      "sellerName": "telform inc.",
      "isNewProduct": true
    },
    {
      "name": "Morphy Richards 25 L Convection Microwave Oven  (MWO 25CG, Steel)",
      "productId": "EURO19938202",
      "brandName": "Morphy",
      "category": "Microwave Ovens",
      "companyAssured": true,
      "rating": "3.9",
      "price": "10999",
      "discount": "11%",
      "imageURL": "https://rukminim1.flixcart.com/image/416/416/microwave-new/v/q/y/morphy-richard-25cg-original-imaec2ddymudmze3.jpeg?q=70",
      "sellerName": "Kwitch Retails",
      "isNewProduct": false
    },
    {"id":3,
    "name":"Mens Cotton Jacket",
    "price":55.99,
    "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing",
    "imageURL":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating":{"rate":4.7,"count":500}},
    {"id":2,
    "name":"Mens Casual Premium Slim Fit T-Shirts ",
    "price":22.3,
    "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category":"men's clothing",
    "imageURL":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating":{"rate":4.1,"count":259}
}
  ]
  )
        return(
            <div>
                
<DataContext.Provider value={[items,setItems]}>
{props.children}
</DataContext.Provider>
            </div>
)

    }
