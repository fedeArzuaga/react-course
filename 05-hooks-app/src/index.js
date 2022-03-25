import React from 'react';
import ReactDOM from 'react-dom';
import { Memorize } from './components/06-memos/Memorize';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHooks';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HookApp } from './HooksApp';
// import { CounterWithCustomHook } from './CounterWithCustomHook';
import './index.css';

ReactDOM.render(
    <Memorize />,
    document.getElementById('root')
)
