import { createContext, useContext, useState } from "react"

const table = {
    sports: 21,
    history: 23,
    politics: 24,
};

const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;

const AppContext = createContext()
const AppProvider = ({ children }) => {
    const [error, setError] = useState(false)
    const [waiting, setWaiting] = useState(true)
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [modal, setModal] = useState(false)
    const [quiz, setQuiz] = useState({
        amount: 10,
        category: "sports",
        difficulty: "ease"
    })

    const fetchQuestions = async () => {
        setLoading(true)
        setWaiting(false)
        try {
            const res = await fetch(url);
            const result = await res.json()
            const data = result.data.results

            if (data) {
                setQuestions(data)
                setLoading(false)
                setWaiting(false)
                setError(false)
            } else {
                setLoading(true)
                setWaiting(true)
            }

        } catch (e) {
            setError(e.message)
        }
    };

    const openModal = () => {
        setModal(true)
    };

    const closeModal = () => {
        setModal(false)
        setWaiting(true)
        setCorrect(0)
    };

    const nextQuestion = () => {
        setIndex((prevIndex) => {
            const index = prevIndex + 1;
            if (index > questions.length - 1) {
                openModal()
                return 0
            } else {
                return index
            }
        })
    };

    const checkAnswers = (value) => {
        if (value) {
        setCorrect((oldState) => oldState + 1);
        }
        nextQuestion();
    };



    return (
        <AppContext.provider>
            {children}
        </AppContext.provider>
    )
};

export useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };