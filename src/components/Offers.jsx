const Offers = () =>{
return(
<div style={{display:"flex" , justifyContent:"space-around", padding:"25px 20px" ,backgroundColor:"#f4f7f6" ,borderBottom:"1px solid #ddd"}}>


  <div style={{display:"flex" , alignItems:"center", gap:"15px"}}>
    <span style={{fontSize:"2.5rem" ,color:"#29b6f6"}}>₹</span>
    <div>
      <h4 style={{color:"#4caf50" ,margin:0}}>UP TO 50% OFF</h4>
      <p style={{fontSize:"0.85rem",color:"#333" , margin:0 , fontWeight:"600"}}>TRAVEL SMART</p>
    </div>
  </div>


  <div style={{display:"flex",alignItems:"center", gap:"15px"}}>
    <div style={{backgroundColor:"#29b6f6" ,color:"white" ,fontWeight:"bold" ,width:"55px",height:"55px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"2rem"}}>H</div>
    <div>
      <h4 style={{color:"#4caf50",margin:0}}>UP TO 70% OFF</h4>
        <p style={{fontSize:"0.85rem" ,color:"#333" ,margin:0 ,fontWeight:"600"}}>ON HOTELS ACROSS WORLD</p>
    </div>
  </div>


  <div style={{display:"flex" ,alignItems:"center", gap:"15px"}}>
    <span style={{fontSize:"2.5rem"}}>📱</span>
      <div>
      <h4 style={{color:"#4caf50",margin:0}}>FLAT USD. 50 OFF</h4>
      <p style={{fontSize:"0.85rem",color:"#333" ,margin:0 ,fontWeight:"600"}}>US APP OFFER</p>
    </div>
  </div>


</div>
)
}

export default Offers
