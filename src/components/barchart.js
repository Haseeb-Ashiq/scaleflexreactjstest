import React, { useEffect } from "react";
const BarChart=()=>{
    useEffect(()=>{
        const drawBarChart=(data)=>{
            let html='';
            let x=0;
            for(let i=0;i<data.length;i++)
            {
                html+=`<rect x=${x} y=${500-data[i]} width='20' height=${data[i]} />`;
                x+=25;
            }
            document.getElementById('bar_chart').innerHTML=html;
        }
        drawBarChart([50,25,34,12,120,200,56,23,34,11]);
    },[])
    return (<>
    <svg width='400' height='500' id='bar_chart' fill='lightblue' style={{border:'1px solid black'}}></svg>
    </>)
}
export default BarChart;