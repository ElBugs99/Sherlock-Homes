
import React, { useState, useEffect } from 'react'
import './calculator.css'
import { addDotsToNumber } from '../../../utils/numberUtils';
import { useParams } from 'react-router-dom';


export default function Calculator({ valor }) {
  const [propertyPrice, setPropertyPrice] = useState(valor || '');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalCost, setTotalCost] = useState(null);

  const truncate = (num, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.floor(num * factor) / factor;
  };

  const calculateMortgage = () => {
    const loanAmount = propertyPrice - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    if (loanAmount <= 0 || monthlyInterestRate <= 0 || numberOfPayments <= 0) {
      alert('Por favor, ingrese valores válidos.');
      return;
    }

    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    const totalCost = monthlyPayment * numberOfPayments;
    const totalInterest = totalCost - loanAmount;

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
    setTotalCost(totalCost.toFixed(2));
  };

    

  return (
    <div className="calculadora">
      <h3 className='titulo-calc'>Simula tu Credito Hipotecario</h3>
      <div className="form-group">
        <label className='label-calc' htmlFor="propertyPrice">Precio de la propiedad:</label>
        <div className='input-calc'>
          <input
            type="number"
            id="propertyPrice"
            value={valor}
            onChange={(e) => setPropertyPrice(e.target.value)}
            className='calc-input'
          />
        </div>

      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="downPayment">Pago inicial:</label>
        <div className='input-calc'>
          <input
            type="number"
            id="downPayment"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className='calc-input'

          />
        </div>

      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="interestRate">Tasa de interés anual (%):</label>
        <div className='input-calc'>
          <input
            type="number"
            id="interestRate"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className='calc-input'
          /></div>

      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="loanTerm">Plazo del préstamo (años):</label>
        <div>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className='calc-input'
          />
        </div>

      </div>
      <button className='boton-Calc' onClick={calculateMortgage}>Calcular</button>
      {monthlyPayment && (
        <div id="results">
          <p>Pago mensual: ${addDotsToNumber(truncate(monthlyPayment,0))}</p>
          <p>Total de intereses a pagar: ${addDotsToNumber(truncate(totalInterest,0))}</p>
          <p>Costo total del préstamo: ${addDotsToNumber(truncate(totalCost,0))}</p>
        </div>
      )}
    </div>

  )
}