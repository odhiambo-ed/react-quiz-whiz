import { useState } from "react"

const AppProvider = () => {
    const [error, setError] = useState(false)
    const [waiting, setWaiting] = useState(false)
    const [loading, setLoading] = useState(false)
    const [question, setQuestion] = useState([])
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [quiz, setQuiz] = useState({
        amount: 10,
        category: "sports",
        difficulty: "ease"
    })
 }