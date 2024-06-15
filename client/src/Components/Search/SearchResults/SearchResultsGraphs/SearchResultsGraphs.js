import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { Typography } from '@mui/material';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import React from 'react';
import '../../search.css';

export default function SearchResultsGraphs({ avgPrice, percentage, cityAvgPrices }) {

  const formatNumber = (num) => new Intl.NumberFormat('es-CL').format(num);

  return (
    <>
      <div className="search-graph">
        <Typography variant="h6" gutterBottom>Comparación del valor promedio de casas por ciudad</Typography>
        <BarChart
          series={[
            { data: [cityAvgPrices?.vina || 0], stack: 'A', label: 'Viña', color: '#38ba8c' },
            { data: [cityAvgPrices?.valparaiso || 0], stack: 'B', label: 'Valparaíso', color: '#264653' },
            { data: [cityAvgPrices?.quilpue || 0], stack: 'C', label: 'Quilpué', color: 'rgb(186, 169, 56)' },
            { data: [cityAvgPrices?.villaAlemana || 0], stack: 'D', label: 'Villa Alemana', color: 'rgb(186, 56, 60)' },
            { data: [avgPrice || 0], stack: 'E', label: 'Búsqueda', color: 'rgb(56, 186, 186)' },
          ]}
          xAxis={[
            { scaleType: 'band', data: ['Ciudades'] }
          ]}
          yAxis={[
            {
              scaleType: 'linear',
              format: (value) => `$${formatNumber(value)}`,
              label: 'Millones de Pesos (CLP)',
            }
          ]}
          width={600}
          height={250}
          margin={{
            left: 80,
          }}
          sx={{
            [`.${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translate(-40px, 0)',
            },
          }}
          options={{
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => `${context.dataset.label}: $${formatNumber(context.raw)}`,
                },
              },
            },
            scales: {
              y: {
                ticks: {
                  callback: (value) => `$${formatNumber(value)}`,
                },
              },
            },
          }}
        />
      </div>
      <div className="search-graph">
        <Gauge width={140} height={140} value={percentage} startAngle={-90} endAngle={90} series={[{ color: '#38ba8c' }]} />
        <div className="gauge-label">El {percentage}% de las casas cumplen con los criterios de búsqueda.</div>
      </div>
    </>
  )
}
