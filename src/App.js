import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Note from "./Components/Note";
import InputArea from "./Components/InputArea";

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
    </div>
  );
}

export default App;
