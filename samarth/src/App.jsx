import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import LoginComponent from './components/LoginSignup/LoginComponent';
import SignupComponent from './components/LoginSignup/SignupComponent';
import ProtectedRoute from './components/LoginSignup/ProtectedRoutes';
import Home from './pages/Home';
import EmergencyServices from './pages/EmergencyServices';
import RealTimeQueue from './pages/RealTimeQueue';
import Chatbot from './pages/Chatbot';
import DiseasePrediction from './pages/DiseasePrediction';
import AccountComponent from './components/Account/AccountComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar/>
              <Home />
              <Footer/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/emergency-services"
          element={
            <ProtectedRoute>
              <Navbar/>
              <EmergencyServices />
              <Footer/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/real-time-queue"
          element={
            <ProtectedRoute>
              <Navbar/>
              <RealTimeQueue />
              <Footer/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <Navbar/>
              <Chatbot />
              <Footer/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/disease-prediction"
          element={
            <ProtectedRoute>
              <Navbar/>
              <DiseasePrediction />
              <Footer/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Navbar/>
              <AccountComponent />
              <Footer/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;