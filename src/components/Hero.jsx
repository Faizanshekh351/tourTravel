import bgImage from '../assets/head.jpg'

const Hero = () =>{

  let myStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize:"cover",
    backgroundPosition : "center",
    height:"400px",
    display:"flex",
    alignItems:"center",
    justifyContent :"center",
    color:"white"
  }

console.log("hero loaded")

  return(
    <div style={myStyle}>
      <h1 style={{fontSize:"2.5rem" , textShadow:"2px 2px 5px black" , textAlign:"center"}}>
          Tourism Management System
      </h1>
    </div>
  )
}

export default Hero
