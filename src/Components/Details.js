
import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router'
import { DataContext } from './DataContext'

const Details = () => {

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

                                    <div className='container' style={{width:'700px',height:'100vh',marginLeft:'250px',marginTop:'-60px'}}>
                                        <div key={index} >
                                            <div>
                                                <img src={e.imageURL}
                                                    alt={e.name + " image"} style={{width:'40vw'}}/>
                                                    <h3 style={{fontSize:'30px',marginTop:'50px'}}>{e.name}</h3>
                                            <span style={{float:'left',fontSize:'20px',marginTop:'80px'}}>Price: ${e.price} USD </span>
                                            <span style={{ color: 'crimson', fontSize: '25px',float:'right' ,textDecoration:'none',marginTop:'80px'}}>Discount: {e.discount}</span>
                       <br/> <span style={{color:'green',marginTop:'80px'}}> Rating: {e.rating}</span>

                                            </div>

                                            
                                        </div>
                                        
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

export default Details