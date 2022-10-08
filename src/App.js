import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import SignUpModal from "./components/Modal/SignUpModal";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import SignInModal from "./components/Modal/SignInModal";
import PrivateFood from "./pages/Private/PrivateFood/PrivateFood";

function App() {
  return (
    <>
      <SignUpModal />
      <SignInModal />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
          <Route path="/private/private-food" element={<PrivateFood />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
