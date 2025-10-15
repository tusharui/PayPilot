import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landingpage from "./pages/landingpage/landingpage";
import Signup from "./pages/auth/signup";
import Login  from "./pages/auth/login";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Landingpage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />

          {/* catch all route  */}
<Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Router>



      <Toaster
      toastOptions={{
        className:"",
        style:{
          fontSize : "13px",
        },
      }}
      />
    </div>
  )
}

export default App
