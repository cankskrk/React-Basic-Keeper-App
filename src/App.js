import "./App.css";
import "./Components/cssModules/page.css";
import { useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import InputArea from "./Components/InputArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App" id="page-container">
      <div id="content-wrap">
        <Header />
        <InputArea
          type="text"
          placeholder1="Title"
          placeholder2="Take a note..."
          className="border-0"
          onAdd={addNote}
        />

        <div className="container mt-5">
          <div className="row">
            {notes.map((item, i) => (
              <div className="col d-flex justify-content-center">
                <Note
                  key={i}
                  id={i}
                  header={item.title}
                  desc={item.content}
                  onDelete={deleteNote}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
