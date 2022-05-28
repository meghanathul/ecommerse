
import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router'
import { DataContext } from './DataContext'
import { Link } from 'react-router-dom'
const Details = () => {

    const [items, setItems] = useContext(DataContext)
    const { id } = useParams()
    return (
        <>
            <div className='back'>
                <div className='main-container'>
                    {
                        items.map((e, index) =>
                            // <Link className='list' key={index} to={`details/${e.productId}`}>
                            <div className='container' >
                                <div >
                                    <img className='image' src={e.imageURL} alt={e.name} />
                                </div>
                                <h3>{e.name}</h3>
                                <span>${e.price} USD <span style={{ color: 'crimson', fontSize: '20px', textDecoration: 'none' }}>Discount: {e.discount}</span></span>
                                <br /> <span> Rating: {e.rating}</span>
                            </div>
                            // </Link>

                        )
                    }
                </div>
            </div>
            <div className='main-container'>

                {
                    items.filter((ele) => ele.productId === id).map((e, index) => {

                        return (
                            <>
                                {

                                    <div className='container' style={{ width: '950px', height: '90vh', backgroundColor: 'white', position: 'fixed', marginLeft: '130px', marginTop: '-120%' }}>
                                        <Link to='/home' className='back-btn'><i class="fas fa-times"></i></Link>

                                        <div key={index} >
                                            <div>
                                                <img src={e.imageURL}alt={e.name + " image"} style={{ width: '25vw', marginLeft: '-550px', padding: '20px' }} />
                                                <div className='info'>
                                                <h3 >{e.name}</h3>
                    
                                                <span className='price'>Price: ${e.price} USD </span>
                                                <br/><span className='span0'>Discount:{e.discount}</span>
                                                <br /> <span className='span1'> Rating: {e.rating}</span>
                                                <p>Category:{e.category}</p>

                                                </div>
                                                
                                            </div>
                                            <button className='buy-btn'><Link className='buy-link' to='/form'>Buy</Link></button>



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