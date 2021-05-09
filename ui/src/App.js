
import bookimage from './becoming.png';
import Review from './Review';
// import Navigation from './Navigation';
import Component from 'react';


function App() {

  
  return (
    
    <div>
      {/* <Navigation /> */}
    <h1>Title: Becoming</h1>
    <img src={bookimage} alt="bookimage" />
    <h2>Author: Michelle Obama</h2>
    <p>Date Published: November 2018</p>
    <p>Average Star Rating: 4.8/5 Stars &#9733;&#9733;&#9733;&#9733;&#9733;</p>
    <Review />
    </div>
  );
}

export default App;
