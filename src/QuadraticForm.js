import React, { useState } from 'react';
import Swal from 'sweetalert2';

const QuadraticForm = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  const calcular = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      return Swal.fire({
        icon: 'error',
        title: 'Datos inválidos',
        text: 'Por favor ingresa todos los coeficientes correctamente.',
        background: '#1e3c72',
        color: '#fff',
        confirmButtonColor: '#5e60ce',
      });
    }

    if (aNum === 0) {
      return Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'El coeficiente "a" no puede ser cero.',
        background: '#1e3c72',
        color: '#fff',
        confirmButtonColor: '#5e60ce',
      });
    }

    const discriminante = bNum * bNum - 4 * aNum * cNum;

    if (discriminante < 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Sin soluciones reales',
        text: 'El discriminante es negativo.',
        background: '#1e3c72',
        color: '#fff',
        confirmButtonColor: '#5e60ce',
      });
    }

    const x1 = (-bNum + Math.sqrt(discriminante)) / (2 * aNum);
    const x2 = (-bNum - Math.sqrt(discriminante)) / (2 * aNum);

    Swal.fire({
      icon: 'success',
      title: 'Resultado',
      html: `<strong>x₁ = ${x1.toFixed(2)}</strong><br><strong>x₂ = ${x2.toFixed(2)}</strong>`,
      background: '#1e3c72',
      color: '#fff',
      confirmButtonColor: '#5e60ce',
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 bg-dark bg-opacity-75 border-0 rounded-4">
        <h2 className="text-center mb-4 text-light">Calculadora de Fórmula Cuadrática</h2>
        <div className="mb-3">
          <label className="form-label text-light">Coeficiente a:</label>
          <input type="number" className="form-control" value={a} onChange={(e) => setA(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label text-light">Coeficiente b:</label>
          <input type="number" className="form-control" value={b} onChange={(e) => setB(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label text-light">Coeficiente c:</label>
          <input type="number" className="form-control" value={c} onChange={(e) => setC(e.target.value)} />
        </div>
        <button className="btn btn-primary w-100" onClick={calcular}>
          Calcular
        </button>
      </div>
    </div>
  );
};

export default QuadraticForm;
