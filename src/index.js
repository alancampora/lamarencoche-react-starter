import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';

const App = () => <Content content="hello world" /> 


ReactDOM.render(<App />, document.getElementById('root'));

