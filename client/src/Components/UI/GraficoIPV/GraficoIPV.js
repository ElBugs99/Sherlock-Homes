import React from "react";
import "./graficoipv.css";
import { BarChart } from '@mui/x-charts/BarChart';


const IPVusadas = [ 115.64, 125.34,	131.00,	143.26,	156.33,	165.12,	167.95,	177.56,	198.79,	213.03,	216.58,	241.07,	218.55,	217.14,
];
const IPVnuevas = [104.18,118.54,	129.72,	135.89,	143.52,	157.52,	160.13,	167.25,	175.71,	184.43,	195.66,	203.93,	213.81,215.54	
];


    


const xLabels = [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023'
  ];


export default function GraficoIpv(){



   return(
        <div className="GraficoIPV">
            <BarChart 
                width={600}
                height={300}
                grid={{ horizontal: true }}
                series={[
                    { data: IPVusadas, label: 'IPV Casas Usadas', stack: 'stack1' },
                    
                    { data: IPVnuevas, label: 'IPV Casas Nuevas', stack: 'stack2' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
                yAxis={[{label:'Millones de Pesos (CLP)'}]}
                
               
                
                
            />
            
                <p className="textoGraficoIPV">
                    Índice del Precio de las Viviendas (Base de Datos Estadísticos)
                </p>

                <bar datakey="IPVusadas" fill="#fefae0"/>
        </div>


   )

}