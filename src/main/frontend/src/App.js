import './App.css';
import React from 'react';
import Review from './components/Review';

const App = () => {

  return (
    <div>
      <Review></Review>
    </div>
  );
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch('/api/hello')
  //     .then(response => response.text())
  //     .then(message => {
  //       setMessage(message);
  //     });
  // },[])

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1 className="App-title">{message}</h1>
  //     </header>
  //   </div>
  // )

}

export default App;
