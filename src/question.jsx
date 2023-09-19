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
        <div className=" flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                {showScore ? (
                    <div className="text-center">
                        <p className="text-2xl font-semibold mb-4">Résultat</p>
                        <p className="text-xl mb-4">Vous avez obtenu {score} sur {questions.length} points !</p>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-4">
                            <p className="text-xl font-semibold">Question {currentQuestionIndex + 1} sur {questions.length}</p>
                            <p className="text-lg mt-2">{questions[currentQuestionIndex].question}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {questions[currentQuestionIndex].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(option)}
                                    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Question;
