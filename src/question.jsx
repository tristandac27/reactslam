import React, { useState } from 'react';

const questions = [
    {
        id: 1,
        question: 'React c\'est quoi ?',
        options: ['Un groupe de punk auvergnat', 'Un perso de FF7', 'Un framework Javascript', 'Un sport d\'équipe'],
        answer: 'Un framework Javascript'
    },
    {
        id: 2,
        question: 'Comment on gère le state en React ?',
        options: ['State ?', 'Avec PHP', 'avec useState()', 'plutot this.state'],
        answer: 'avec useState()'
    },
    {
        id: 3,
        question: 'On aime React ?',
        options: ['React ?', 'C\'est mieux que JS e fait', 'Par moment', 'Oui !'],
        answer: 'Oui !'
    }
];

function Question() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="Question-container">
            {showScore ? (
                <div className="score-section">
                    Vous avez obtenu {score} sur {questions.length} points !
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            Question {currentQuestionIndex + 1} sur {questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestionIndex].question}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Question;
