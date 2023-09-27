import "./App.css";
import BlogList from "./components/BlogList/BlogList";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <BlogList />
    </div>
  );
}

export default App;
