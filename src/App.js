import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import InputArea from "./Components/InputArea";

import notes from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      <InputArea
        type="text"
        placeholder1="Title"
        placeholder2="Take a note..."
        className="border-0"
      />
      <Footer />
      <div className="container">
        <div className="row">
          {notes.map((item) => (
            <div className="col d-flex justify-content-center">
              <Note header={item.title} desc={item.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
