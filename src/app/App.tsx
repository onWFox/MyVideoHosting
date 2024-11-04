import "./App.css";
import Navbar from "../widgets/Navbar";
import Sidebar from "../widgets/Sidebar/index";
import MainPage from "../pages/MainPage/ui/MainPage";
import { Route, Routes } from "react-router-dom";
import Shorts from "../pages/Shorts";
import HistoryPage from "../pages/History";
import PlayLists from "../pages/PlayLists";
import AppRouter from "./router";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
