import React, { useEffect, useRef } from 'react';
const { tableau } = window;

const Tableau =()=> {
  const ref = useRef(null);
  console.log(ref)
  const url =  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard"
  // const url =  "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"

  function initViz(){
    new tableau.Viz(ref.current, url);
  } 
  
  useEffect(() => {
    initViz
  }, [])
  
  console.log(new tableau.Viz(ref.current, url))

  return (
    <div> 
      <p>This is my Tableau dashboard</p>
      <div ref={ref} style={{width:'70%', margin:'auto'}}></div>
    </div>
  )
}

export default Tableau