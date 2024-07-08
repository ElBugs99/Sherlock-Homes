import React, { useEffect, useState } from "react";
import "./graficos.css";
import { PieChart } from '@mui/x-charts/PieChart';

export default function Graficos({ valor, ciudad}) {



  const data = [
    { id: 0, value: Number(valor), label: 'Valor CLP Propiedad actual' },
    { id: 1, value: 284262254, label: `Promedio Valor CLP ${ciudad}`}
  ];
  
  const colors = ['#47e0af', '#3b6978', '#3c6e71', '#e68459'];

  return (

    <div className="grficoPie">
        <h4 className="textoPie"> Gráfico Comparativo de Precios</h4> 

        <PieChart
              series={[
                {
                  data,
                  highlightScope: { 
                    faded: 'global', 
                    highlighted: 'item' 
                    
                  },
                  faded: { 
                    innerRadius: 40, 
                    additionalRadius: 0, 
                    color: 'gray'
                  },
                  highlighted: { 
                    additionalRadius: 5,
                    innerRadius: 10
                  },
                  color: colors
                },
               
              ]}
              margin={{ top: 10, bottom: 50, left: 10, right:10 }}
              width={500}
              height={237}
              
              colors={colors}
              slotProps={{
                legend: {
                  direction: 'row',
                  position: { vertical: 'bottom', horizontal: 'middle' },
                  padding:1,
                  itemMarkWidth: 10,
                  itemMarkHeight:20,
                  markGap: 4,
                  itemGap: 15,
                  
                },
              }}
              

              
            />
     
    </div>
   
    
  );
}
