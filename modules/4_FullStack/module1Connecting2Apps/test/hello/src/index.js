import React, {
  useState
} from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent'



const App = () => {
  const [stuff, setStuff] = useState('default')


  const networkCall = async () => {
    const response = await superagent.get("http://localhost:5000/thing").set( {"Access-Control-Allow-Origin": "no-cors" });
    console.log("response", response.text);

    setStuff(response.text)
  };

  return <div >
    stuff: {
      stuff
    } <button onClick = {
      networkCall
    } > PRESS ME </button> </div> 
}

ReactDOM.render( <
  App / > ,
  document.getElementById('root')
);
