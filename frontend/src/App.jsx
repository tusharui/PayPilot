import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landingpage from "./pages/landingpage/landingpage";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard/dashboard";
import Allinvoices from "./pages/invoices/allinvoices";
import Createinvoice from "./pages/invoices/createinvoice";
import Invoicedetails from "./pages/invoices/invoicedetails";
import Profile from "./pages/profile/profile";
import Protectedroute from "./components/auth/protectedroute";



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />



          {/* protected routes  */}

          <Route path="/" element={<Protectedroute />}>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="/invoices" element={< Allinvoices />} />
            <Route path="invoices/new" element={<Createinvoice />} />
            <Route path="invoices/:id" element={<Invoicedetails />} />
            <Route path="profile" element={< Profile />} />
          </Route>

          {/* catch all route  */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Router>



      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  )
}

export default App
