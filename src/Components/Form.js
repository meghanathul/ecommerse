import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <>
<div className='form'>
    <h2>Place Your Order</h2>
    <hr/>
    <form>
        <input id='phone' placeholder='Phone' require/><br/>
        <input id='fname' placeholder='First Name' require/><br/>
        <input id='lname' placeholder='Last Name' require/><br/>
        <input id='address' placeholder='Address' require/><br/>
        <input id='email' placeholder='Email'/>
    </form>
    <hr/>
    <Link to='/home'><button className='cancle'>Cancle</button></Link>
    <Link to='/order'><button className='order' type='submit'>Place Order</button></Link>
</div>
    </>
  )
}

export default Form