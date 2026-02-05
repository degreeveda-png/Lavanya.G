// import React from 'react'
// import V2 from '../../public/Image/V2.jpg'
// import about from '../../public/Image/about.jpeg'
// import '../Components/Section.css'

// const Section = () => {
//   return (
 


//           <main id="about">
    
//     <div id="veda">
//       <div>
//       <h2>ABOUT US</h2>
//       </div>
//          Veda Degree College (often referred to as Veda Degree College, Tatipaka) in Tatipaka<br></br>
//     College is a recognized institution established in 2014.<br></br>
//      It offering various undergraduate courses with a focus on skill development and placements.<br></br>
//          It is known for its experienced faculty, academic, and sports infrastructure.<br></br>
//          It is listed among notable degree colleges  <br></br>
//               <div id="image">

//         <img src={V2} height="900" ></img>

// </div> 
         
//      </div>
                    
     
// </main>
//   )
// }

// export default Section






import React from 'react'
import V2 from '../../public/Image/V2.jpg'
import '../Components/Section.css'

const Section = () => {
  return (
    <main id="about">
      <section id="veda">
        <div className="about-container">
          
          <div className="about-text">
            <h2>ABOUT US</h2>

            <p>
              Veda Degree College (often referred to as Veda Degree College,
              Tatipaka) is a recognized institution established in 2014.
            </p>

            <p>
              The college offers various undergraduate courses with a focus on
              skill development and placements.
            </p>

            <p>
              It is known for its experienced faculty, academic, and sports
              infrastructure.
            </p>

            <p>
              It is listed among notable degree colleges.
            </p>
          </div>


<div className="about-image ">
  <img src="/Image/V2.jpg" alt="Veda Degree College" height={300} width={600} />
</div>
        </div>
      </section>
    </main>
    
  )
}

export default Section
