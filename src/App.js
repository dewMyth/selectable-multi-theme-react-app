import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Body from "./components/Body/Body";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
