import Calculator from './src/calc.jsx';
const container = document.getElementById('calc-app');

if (container) {
    ReactDOM.createRoot(container).render(<Calculator />);
    console.log('Calculator component rendered');
}