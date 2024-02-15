import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/details/naf" element={<Nafdashbord />} /> */}
      </Routes>
    </>
  );
}

export default App;
