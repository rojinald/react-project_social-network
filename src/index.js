import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Корги' },
  { id: 2, name: 'Овчарка' },
  { id: 3, name: 'Лобрадор' },
  { id: 4, name: 'Доберман' },
  { id: 5, name: 'Щпиц' }
]

let messages = [
  { id: 1, message: 'Гав Гав!' },
  { id: 2, message: 'Хочу кусать себя за хвост!' },
  { id: 3, message: 'Пора грызть тапки' },
  { id: 4, message: 'Пошли гулять' },
  { id: 5, message: 'Обними меня' }
]

let posts = [
  { id: 1, message: 'Давай дружить!', likesCount: 50 },
  { id: 2, message: 'Это мой первый пост :)', likesCount: 10 },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
