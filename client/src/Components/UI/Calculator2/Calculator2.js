import React, { useState } from 'react';
import './calculator2.css';

export default function PropertyValuationCalculator() {
  const [location, setLocation] = useState('');
  const [totalArea, setTotalArea] = useState('');
  const [usableArea, setUsableArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [valuation, setValuation] = useState(null);

  const calculateValuation = () => {
    // Aquí puedes implementar la lógica para calcular la tasación
    // Puedes utilizar algoritmos específicos o simplemente realizar una estimación básica
    // En este ejemplo, simplemente sumamos el área total y el número de dormitorios y baños
    const valuation = parseFloat(totalArea) + parseFloat(bedrooms) + parseFloat(bathrooms);
    setValuation(valuation.toFixed(2));
  };

  const clearInputs = () => {
    setLocation('');
    setTotalArea('');
    setUsableArea('');
    setBedrooms('');
    setBathrooms('');
    setValuation(null);
  };

  return (
    <div className="calculadora">
      <h3 className='titulo-calc'>Calculadora de Tasación de Propiedades</h3>
      <div className="form-group">
        <label className='label-calc' htmlFor="location">
          Ubicación:
        </label>
        <div className='input-calc'>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='calc-input'
          />
        </div>
      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="totalArea">
          Superficie Total (m²):
        </label>
        <div className='input-calc'>
          <input
            type="number"
            id="totalArea"
            value={totalArea}
            onChange={(e) => setTotalArea(e.target.value)}
            className='calc-input'
          />
        </div>
      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="usableArea">
          Metros Cuadrados Útiles (m²):
        </label>
        <div className='input-calc'>
          <input
            type="number"
            id="usableArea"
            value={usableArea}
            onChange={(e) => setUsableArea(e.target.value)}
            className='calc-input'
          />
        </div>
      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="bedrooms">
          Dormitorios:
        </label>
        <div className='input-calc'>
          <input
            type="number"
            id="bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className='calc-input'
          />
        </div>
      </div>
      <div className="form-group">
        <label className='label-calc' htmlFor="bathrooms">
          Baños:
        </label>
        <div className='input-calc'>
          <input
            type="number"
            id="bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className='calc-input'
          />
        </div>
      </div>
      <div className="button-group">
        <button className='boton-Calc' onClick={calculateValuation}>Calcular Tasación</button>
        <button className='boton-Calc borrar' onClick={clearInputs}>Borrar</button>
      </div>
      {valuation && (
        <div id="results">
          <p>Valor de Tasación Estimado: ${valuation}</p>
        </div>
      )}
    </div>
  );
}
