import React from "react";

function Question(props){

    const [selectedAnswer, setSelectedAnswer] = React.useState("")
    
    const cleanQuestion = () =>{
        return props.question.replace(/&quot;/i, '')
    }

    /*
    Will take the incorrect and correct answers 
    */
   const concatAndShuffleAnswers = () =>{
       let answers = props.incorrectAnswers.concat(props.correctAnswer)
        return answers.sort(() => (Math.random() - 0.5))
    } 

    /**
     * Assign clicked answer to
     * selectedAnswer and give it the class selected
     */
    const assignSelectedAnswer = (event) =>{
        removePreviousSelectedAnswer(event)
        setSelectedAnswer(event.target.textContent)
        event.target.classList.add('selected')
    }

    /**
     * Remove styling from all sibling elements so
     * only one element on a question has the selected
     * value
     */
    const removePreviousSelectedAnswer = (event) =>{
        const parent = event.target.parentNode
        const children = [...parent.children]
        const filteredChildren = children.filter(child => child !== event.target)
        filteredChildren.forEach(child =>{
            child.classList.remove('selected')
        })
    }
    
    /**
     * Returns use shuffledAnswers to insert the button
     * elements to the DOM
     */
    const formatAnswers = () =>{
        const shuffledAnswers = concatAndShuffleAnswers()
        return shuffledAnswers.map(answer =>{
            return <button
            type="button"
            key={answer}
            onClick={assignSelectedAnswer} 
            className="answer"
                    >
                        {answer}
                    </button>
        })
    }

    const [answers, setAnswers] = React.useState(formatAnswers())

    return(
        <section className="question">
            <h4>
                {cleanQuestion()}
            </h4>  
            <span className="answers">
                {answers}
            </span>

        <hr className="question-separation"></hr>
        </section>
    )
}

export default Question