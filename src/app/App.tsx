import "./App.css";
import Navbar from "../widgets/Navbar";
import Sidebar from "../widgets/Sidebar/index";
import AppRouter from "./router";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter/>
          
        </div>
      </div>
    </>
  );
}

export default App;
