import Card from './Card'
import {packagesData} from '../data/mockData'

const Packages = () =>{

console.log(packagesData)

  let total = packagesData.length
  console.log("total packages = " + total)

  return(
    <div style={{padding:"30px" ,maxWidth:"1100px" ,margin:"0 auto"}}>

    <h2 style={{color:"#28a745" ,marginBottom:"20px" ,fontSize:"1.8rem"}}>Package List</h2>

      {packagesData.map((pkg) =>(
          <Card key={pkg.id} pkg={pkg} />
      ))}


      <div style={{marginTop:"20px"}}>
        <button
          style={{backgroundColor:"#28a745",color:"white",border:"none",padding:"10px 22px",cursor:"pointer",borderRadius:"4px",fontSize:"1rem"}}
          onClick={()=> alert("more pakages comming soon")}
        >
          View More Packages
        </button>
      </div>

    </div>
  )
}

export default Packages
