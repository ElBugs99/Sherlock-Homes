import React from "react";
import "./graficos.css"
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Graficos({bed,bath,mts,valor}){
    const data = [
        { id: 0, value: Number(valor), label: 'Valor CLP Propiedad actual' },
        { id: 1, value: 400000000, label: 'Promedio Valor CLP Viña del Mar' }
        
      ];
      const colors =['#edc949','#ff9da7']
      
      
      const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
      const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
      const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
      ];

return(

    
    
    <PieChart
    
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={430}
      
      margin={{
        left: 0,
        right: 280,
        
        bottom: 10, 
        top: 130,
      }}
      
      colors={colors}
      
      
    />
        
    



)


}