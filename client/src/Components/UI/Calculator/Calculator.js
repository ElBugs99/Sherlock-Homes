
import React ,{useState, useEffect} from 'react'
import './calculator.css'

import { useParams } from 'react-router-dom';


export default function Calculator(){
    const [propertyPrice, setPropertyPrice] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);
    const [totalCost, setTotalCost] = useState(null);
  
    const calculateMortgage = () => {
      const loanAmount = propertyPrice - downPayment;
      const monthlyInterestRate = (interestRate / 100) / 12;
      const numberOfPayments = loanTerm * 12;
  
      const monthlyPayment = 
        (loanAmount * monthlyInterestRate) / 
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      
      const totalCost = monthlyPayment * numberOfPayments;
      const totalInterest = totalCost - loanAmount;
  
      setMonthlyPayment(monthlyPayment.toFixed(2));
      setTotalInterest(totalInterest.toFixed(2));
      setTotalCost(totalCost.toFixed(2));
    };

    


    
    return(
        <div className="calculadora">
      <h3>Calculadora de Hipoteca</h3>
      <div className="form-group">
        <label className='label-calc' htmlFor="propertyPrice">Precio de la propiedad:</label>
        <input
        type="number"
        id="propertyPrice"
        value={propertyPrice}
        onChange={(e) => setPropertyPrice(e.target.value)}
        
        />
      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="downPayment">Pago inicial:</label>
        <input
          type="number"
          id="downPayment"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
          
        />
      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="interestRate">Tasa de interés anual (%):</label>
        <input
          type="number"
          id="interestRate"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="loanTerm">Plazo del préstamo (años):</label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <button className='boton-Calc' onClick={calculateMortgage}>Calcular</button>
      {monthlyPayment && (
        <div id="results">
          <p>Pago mensual: ${monthlyPayment}</p>
          <p>Total de intereses pagados: ${totalInterest}</p>
          <p>Costo total del préstamo: ${totalCost}</p>
        </div>
      )}
    </div>




    )
}