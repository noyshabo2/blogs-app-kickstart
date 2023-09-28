import "./App.css";
import BlogList from "./components/BlogList/BlogList";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import AddBlogBtn from "./components/AddBlogBtn/AddBlogBtn";
import ModalNewBlog from "./components/ModalNewBlog/ModalNewBlog";
import CurrTags from "./components/CurrTags/CurrTags.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <CurrTags />
      <BlogList />
      <AddBlogBtn />
      <ModalNewBlog />
    </div>
  );
}

export default App;
