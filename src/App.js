import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [note, setNote] = useState("");

  const handleTextareaChange = (e) => {
    setNote(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("note", note);
  };


  const handleClear = () => {
    localStorage.removeItem("note");
    setNote('');
  }


  useEffect(() => {
    const storageNote = localStorage.getItem("note");
    if (storageNote) {
      setNote(storageNote);
    }
  }, []);

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              placeholder="Notes..."
              value={note}
              onChange={(e) => handleTextareaChange(e)}
            />
          </div>
        </div>
        <button
          className="button is-large is-primary is-active"
          onClick={handleSave}
        >
          Save
        </button>
        <button className="button is-large" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
