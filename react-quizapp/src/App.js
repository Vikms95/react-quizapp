// https://opentdb.com/api_config.php

import React from 'react';
import Question from './components/Question';
import './App.css';

function App() {
    
    const [questions, setQuestions] = React.useState([])

    /*
    useEffect to retrieve 10 questions, only will be triggered when:
        - Page is loaded
        - New game button is clicked
    */
   React.useEffect(() =>{
        async function fetchQuestions(){
            const response = await fetch('https://opentdb.com/api.php?amount=10')
            const data = await response.json()
            setQuestions(data.results)
        }
        fetchQuestions()
        console.log(questions[0].difficulty)
    }
    ,[]
    ) 


  return (
    <div className="App">
        <Question />
    </div>
  );
}

export default App;
