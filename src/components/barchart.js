import React, { useEffect } from "react";
const BarChart=(props)=>{
    useEffect(()=>{
        const drawBarChart=(data)=>{
            let html='';
            // let month='';
            let x=0;
            for(let i=0;i<data.length;i++)
            {
                html+=`<rect x=${x} y=${500-data[i]} width='20' height=${data[i]} />`;
                x+=25;
            }
            // console.log(month)
            document.getElementById('bar_chart').innerHTML=html;
            // document.querySelector('.month_name').innerHTML=month;
        }
        drawBarChart(props.data);
    },[])
    return (<>
    <svg width='400' height='500' id='bar_chart' fill='lightblue' style={{border:'1px solid black'}}></svg>
    <div className="month_name" style={{width:'400px',border:'1px solid black',display:'flex',margin:'0 auto'}}></div>
    </>)
}
export default BarChart;