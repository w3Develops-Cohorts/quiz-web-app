var sampleQuiz = {
    quizName: "Math Quiz",
    quizQuestions: [
        {
            questionNumber: "1",
            question: "Which of the following numbers is the largest?",
            options: [
                {
                    text: "100",
                    type: "incorrectAns"
                },
                {
                    text: "5 * 15",
                    type: "incorrectAns"
                },
                {
                    text: "(900 / 15) + 50",
                    type: "correctAns"
                },
                {
                    text: "25 + (12 * 6)",
                    type: "incorrectAns"
                }
            ]
        }, 
        {
            questionNumber: "2",
            question: "Which of the following numbers is the smallest?",
            options: [
                {
                    text: "12 * 8",
                    type: "incorrectAns"
                },
                {
                    text: "(150 / 2) - 40",
                    type: "correctAns"
                },
                {
                    text: "65",
                    type: "incorrectAns"
                },
                {
                    text: "7 + (12 * 3)",
                    type: "incorrectAns"
                }
            ]
        }
    ]
}

export default sampleQuiz;