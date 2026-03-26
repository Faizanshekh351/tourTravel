const Stats = () =>{
  return(
<div style={{display:"flex" ,justifyContent:"space-around" ,padding:"50px 20px" ,backgroundColor:"#e9ecef" ,borderTop:"1px solid #ddd" ,marginTop:"30px"}}>

      <div style={{display:"flex" ,alignItems:"center" ,gap:"15px"}}>
    <span style={{fontSize:"2.5rem"}}>📝</span>
        <div>
      <h3 style={{color:"#28a745" ,margin:0, fontSize:"1.8rem"}}>80000</h3>
          <p style={{color:"#777", margin:"5px 0 0 0"}}>Enquiries</p>
        </div>
      </div>

  <div style={{display:"flex" ,alignItems:"center" ,gap:"15px"}}>
        <span style={{fontSize:"2.5rem"}}>👤</span>
    <div>
          <h3 style={{color:"#28a745",margin:0,fontSize:"1.8rem"}}>19000</h3>
      <p style={{color:"#777",margin:"5px 0 0 0"}}>Registered users</p>
    </div>
  </div>

      <div style={{display:"flex" ,alignItems:"center" ,gap:"15px"}}>
    <span style={{fontSize:"2.5rem"}}>📊</span>
    <div>
      <h3 style={{color:"#28a745" ,margin:0 ,fontSize:"1.8rem"}}>7,00,00,000+</h3>
      <p style={{color:"#777" ,margin:"5px 0 0 0"}}>Booking</p>
    </div>
  </div>

</div>
  )
}

export default Stats
