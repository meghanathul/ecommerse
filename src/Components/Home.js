import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

const Home = () => {
    const [items, setItems] = useContext(DataContext)

    return (
        <>
            <div className='main-container'>
                {
                    items.map((e, index) =>
                        <Link className='list' key={index} to={`details/${e.productId}`}>
                            <div className='container' >
                                <div >
                                    <img className='image' src={e.imageURL} alt={e.name} />
                                </div>
                                <h3>{e.name}</h3>
                                <span>${e.price} USD <span style={{ color: 'crimson', fontSize: '20px', textDecoration: 'none' }}>Discount: {e.discount}</span></span>
                                <br /> <span> Rating: {e.rating}</span>
                            </div>
                        </Link>

                    )
                }
            </div>
        </>
    )
}

export default Home






