import React from 'react'
const final={
    width:'500px',
    height:'250px',
    marginLeft:'30%',
    padding:'10px',
    boxShadow:'10px 10px 10px gray'
}
const icon={
    fontSize:'60px',
    // margin:'40px',
    marginLeft:'200px',
    padding:'30px',
    color:'green'
}
const Order = () => {
  return (
    <>
    <div style={final}>
    <i style={icon} className="fas fa-check-circle"></i>
          <h2 style={{marginLeft:'60px'}}>Your Order Placed Succesfully..
    </h2>
        </div>
    </>
  )
}

export default Order