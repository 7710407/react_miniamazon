import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books'
import Book from './Book';

const author = 'Rebecca Yarros';
const title = 'Iron Flame 777';
const img = './images/iron.jpg'

const names = ['Susana', 'Arsen', 'Armen'];
const newNames = names.map((name)=> {
  return <h1>{name}</h1>;
});
console.log(newNames);

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book)=> book.id === id)
    console.log(book)
  }

  return (
    <section className='booklist'>
      {/* <EventExamples /> */}
      {books.map((book, index)=>{
        return <Book {...book} key={book.id} number={index} />
      })}
    </section>
  );
}

const Image = () => <img src='./images/iron.jpg' alt='Iron Flame' />;
const Title = () => {
  return <h2>Iron Flame</h2>;
};
const Author = () => {
  const inlineHeadingStyles = { color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }
  return (<h4 style={inlineHeadingStyles}>Rebecca Yarros</h4>)};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);