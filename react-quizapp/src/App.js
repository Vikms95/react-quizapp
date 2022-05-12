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
    }, []) 

    const renderQuestions = () =>{
        return questions.map(question =>{
            return <Question 
                        key={question.question}
                        question={question.question}
                        incorrectAnswers={question.incorrect_answers}
                        correctAnswer={question.correct_answer}
                    />
        })
    }

        /**
     * Invoked when check answers button is clicked
     * Wil check if each props.correctAnswer is equal to the event.target.textContent
     */
    const checkIfAnswersCorrect = (event) =>{
    }

  return (
    <main>
        <div className="App">
            {renderQuestions()}
        </div>
        <div class="check-button-container">
            <button
                className='check-answers'
                onClick={checkIfAnswersCorrect}>
                CHECK ANSWERS
            </button>
        </div>
    </main>
  );
}

export default App;
