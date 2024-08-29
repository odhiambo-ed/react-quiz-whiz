

function SetUpForm() {
  return (
    <main>
      <section className="quiz quiz-small">
        <form action="">
          <h2>Choose Set of Quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input type="number" id="amount" className="form-input" />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select name="category" id="category" className="form-input">
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="dificulty">dificulty</label>
            <select name="dificulty" id="dificulty" className="form-input">
              <option value="ease">ease</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
                  </div>
                  <p className="error"></p>
        </form>
      </section>
    </main>
  );
}

export default SetUpForm