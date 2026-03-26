const Card = ({pkg}) =>{

  if(!pkg){
    return <div>loading...</div>
  }

    return(
<div style={{display:"flex" ,border:"1px solid #ddd" ,marginBottom:"20px" ,backgroundColor:"white" , overflow:"hidden"}}>

  <img src={pkg.imageUrl} alt={pkg.name} style={{width:"250px" ,height:"200px" , objectFit:"cover"}} />

  <div style={{padding:"20px" ,flex:1}}>
    <h3 style={{color:"#28a745" ,marginBottom:"10px" ,fontSize:"1.1rem"}}>{pkg.name}</h3>
    <p style={{marginBottom:"5px"}}><b>Package Type :</b> {pkg.type}</p>
    <p style={{marginBottom:"5px"}}><b>Package Location :</b> {pkg.location}</p>
    <p style={{color:"#888" ,marginTop:"8px"}}><b>Features :</b> {pkg.features}</p>
  </div>

  <div style={{padding:"20px" ,borderLeft:"1px solid #eee" ,minWidth:"160px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#fafafa"}}>
    <p style={{fontWeight:"bold", marginBottom:"15px",color:"#555"}}>Rs {pkg.price}</p>
    <button
      style={{backgroundColor:"#28a745",color:"white",border:"none",padding:"8px 20px",cursor:"pointer",borderRadius:"4px"}}
      onClick={() => alert("Details comming soon!")}
    >
    Details
    </button>
  </div>

</div>
  )
}

export default Card
