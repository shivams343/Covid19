import React, { } from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'
const Charts=({data:{confirmed,recovered,deaths}
    ,country})=>{
    //const[dailyData, setDailyData]=useState({});

   /* useEffect(()=>{
         const fetchAPI= async()=>{
             setDailyData(await fetchDailyData());
         }
         console.log(dailyData)
         fetchAPI();
    });
    
    const lineChart=(
         (<Line
           data={{
               labels:'',
               datasets: [{},{}]
           }}
         />)
         
    );
     */
 //console.log(confirmed,recovered,deaths);
     const barChart=(
         confirmed?(
             <Bar
               data={{
                  labels:['Infected','Recovered','Deaths'],
                  datasets:[{
                      label:'People',
                      
                      backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                      data:[confirmed.value,recovered.value,deaths.value]
                  }]
               }}
               options={{
                   legend:{display:false},
                   title:{display:true,text:`Current state in ${country}`}
               }}
             />
         )
         :null
     )
    return (
        <div className={styles.conatiner}>
            {barChart}
        </div>
    )
}

export default Charts
