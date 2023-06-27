import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL600_SR600,400_.jpg' alt='Iron Flame' />;
const Title = () => {
  return <h2>Iron Flame</h2>;
};
const Author = () => <h4>Rebecca Yarros</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);