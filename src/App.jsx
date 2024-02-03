import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import PanelLayout from "./pages/PanelLayout";
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import HowOpinionMagnetWorks from './pages/HowOpinionMagnetWorks';


function App() {
  return (
    <>
      <Routes>
        {/* Anonymous pages */}
        <Route path="/login" element={<IsAnon><Login /></IsAnon>} />
        <Route path="/register" element={<IsAnon><Register /></IsAnon>} />
        <Route path="/usage" element={<IsAnon><HowOpinionMagnetWorks /></IsAnon>} />
        <Route path="/" element={<IsAnon><Landing /></IsAnon>} />

        {/* Authenticated pages */}
        <Route path="/dashboard" element={<IsPrivate> <PanelLayout /> </IsPrivate>}></Route>
        <Route path="/profile" element={<IsPrivate> <Profile /> </IsPrivate>}></Route>


      </Routes>
    </>
  );
}

export default App;
