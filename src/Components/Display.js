// import React from 'react'

// const Display = () => {
//   return (
//     <div>hii</div>
//   )
// }

// export default Display



import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router'
import { DataContext } from './DataContext'
const Display = () => {

    const [items,setItems] = useContext(DataContext)
    const { id } = useParams()
    return (
        <>
            <div className='main-container'>

                {
                    items.filter((ele) =>ele.productId===id).map((e,index)=> {

                        return (
                            <>
                                {

                                    <div className='container'>
                                        <div key={index} >
                                            <div>
                                                <img src={e.imgageURL}
                                                    alt={e.name + " image"}
                                                />
                                            </div>

                                            <h3>{e.name}</h3>

                                            <span >${e.price}</span>

                                        </div>
                                        <hr />
                                    </div>
                    }
                            </>
                        )
                }
            
                    )}                 
        </div>
                                                          
             
                                
        </>
    )
}

export default Display