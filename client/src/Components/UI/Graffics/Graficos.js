import React from "react";
import "./graficos.css";
import { PieChart } from '@mui/x-charts/PieChart';

export default function Graficos({ bed, bath, mts, valor }) {
  const data = [
    { id: 0, value: Number(valor), label: 'Valor CLP Propiedad actual' },
    { id: 1, value: 284262254, label: 'Promedio Valor CLP Viña del Mar' }
  ];
  
  const colors = ['#fefae0', '#3b6978', '#3c6e71', '#e68459'];

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { 
            faded: 'global', 
            highlighted: 'item' 
          },
          faded: { 
            innerRadius: 30, 
            additionalRadius: 0, 
            color: 'gray'
          },
          highlighted: { 
            additionalRadius: 10,
            innerRadius: 30
          },
          color: colors
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
  );
}
