
import react, { createContext, useState } from 'react'
export const DataContext = createContext()
export const DataProvider = (props) => {
  const [items, setItems] = useState([
    {
      "name": "EUROLINE 810 POP UP 700 W Pop Up Toaster  (White)",
      "productId": "1",
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
      "productId": "2",
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
    {
      "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
      "productId": "3",
      "brandName": "Fitbit",
      "category": "Smart Bands",
      "companyAssured": true,
      "rating": "3.9",
      "price": "17992",
      "discount": "",
      "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
      "sellerName": "RetailNet",
      "isNewProduct": true
    },
    {
      "productId": "4",
      "name": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", "category": "men's clothing",
      "imageURL": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": "4.7",
      "discount": "500"
    },
    {
      "productId": "5",
      "name": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": "22.3",
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "imageURL": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": "4.1",
      "discount": "259"
    },
    {"productId":"6",
    "name":"Solid Gold Petite Micropave ",
    "price":"168",
    "description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category":"jewelery",
    "imageURL":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating":"3.9",
    "discount":"70"},
    {"productId":7,
    "name":"White Gold Plated Princess",
    "price":"9.99",
    "description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category":"jewelery",
    "imageURL":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating":"3",
    "discount":"400"},
    {"productId":"8",
    "name":"Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price":"10.99",
    "description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category":"jewelery",
    "imageURL":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating":"1.9",
    "discount":"100"},
    {"productId":"9",
    "name":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price":"64",
    "description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category":"electronics",
    "imageURL":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating":"3.3",
    "discount":"203"},
    {"productId":"10",
    "name":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price":"109",
    "description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category":"electronics",
    "imageURL":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating":"2.9",
    "discount":"470"}
  ]
  )
  return (
    <div>

      <DataContext.Provider value={[items, setItems]}>
        {props.children}
      </DataContext.Provider>
    </div>
  )

}
