import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
// import CounterAppTwo from './CounterAppTwo';
import './index.css';

const root = document.querySelector('#root');

// ReactDOM.render( <PrimeraApp greeting="Salude caramba!" />, root );
ReactDOM.render( <CounterApp value={100} />, root );
// ReactDOM.render( <CounterAppTwo value={25} />, root );