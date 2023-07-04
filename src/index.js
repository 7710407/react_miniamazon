import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [

  {
    author: 'Rebecca Yarros',
    title: 'Iron Flame',
    img: './images/iron.jpg',
    id: 1,
  },
  {
    author: 'Alex Michaelides',
    title: 'The Silent Patient',
    img: 'https://m.media-amazon.com/images/I/41j1-YNROeL._SX324_BO1,204,203,200_.jpg',
    id: 2,
  }
]
const author = 'Rebecca Yarros';
const title = 'Iron Flame 777';
const img = './images/iron.jpg'

const names = ['Susana', 'Arsen', 'Armen'];
const newNames = names.map((name)=> {
  return <h1>{name}</h1>;
});
console.log(newNames);

function BookList() {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book)=>{
        return <Book {...book} key={book.id} />
      })}
    </section>
  );
}
const EventExamples = () => {
  const handleFormInput = (e) =>{
    console.log(e);
    console.log('handle form input : ' + e);
  };

  const handleButtonClick = () =>{
    alert('button clicked');
  };

  const handleFormSubmission = (e) =>{
    e.preventDefault();
    console.log('form submitted');
  };

  return (<section>
    <form onSubmit={handleFormSubmission}>
      <h2>Typical Form</h2>
      <input 
        type='text' 
        name='example' 
        onChange={handleFormInput} 
        style={{margin:'1rem 0'}}/>
      <button type='submit'>
        submit
      </button>
      <button onClick={handleButtonClick}>click me</button>
    </form>
  </section>)
}

const Book = (props) => {
  const {img, title, author} = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
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