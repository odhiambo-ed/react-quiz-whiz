import './App.css'
// import SetUpForm from './components/Form/SetUpForm'
// import Loading from './components/Loading/Loading'
// import Modal from './components/Modal/Modal'

function App() {

  return (
    <div className='main'>
      <section className='quiz'>
        <p className='correct-answers'>correct answers: 10</p>
        <article className='container'>
          <h2>Text</h2>
          <div className="btn-container"></div>
        </article>
        <button className='next-question'>next quiz</button>
      </section>
    </div>
  )
}

export default App
