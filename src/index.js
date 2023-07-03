import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  author: 'Rebecca Yarros',
  title: 'Iron Flame',
  img: './images/iron.jpg'
}

const secondBook = {
  author: 'Alex Michaelides',
  title: 'The Silent Patient',
  img: 'https://m.media-amazon.com/images/I/41j1-YNROeL._SX324_BO1,204,203,200_.jpg'
}

const author = 'Rebecca Yarros';
const title = 'Iron Flame 777';
const img = './images/iron.jpg'

function BookList() {
  return (
    <section className='booklist'>
      <Book 
        author={firstBook.author} 
        title={firstBook.title} 
        img={firstBook.img} 
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores?
        </p>
        <button>click me</button>      </Book>
      <Book 
        author={secondBook.author} 
        title={secondBook.title} 
        img={secondBook.img} 
      />
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
}

const Book = ({img, title, author, children}) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

const Image = () => <img src='./images/iron.jpg' alt='Iron Flame' />;
const Title = () => {
  return <h2>Iron Flame</h2>;
};
const Author = () => {
  const inlineHeadingStyles = { color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }
  return (<h4 style={inlineHeadingStyles}>Rebecca Yarros</h4>)};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);