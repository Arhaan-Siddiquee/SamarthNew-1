import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginSignup/LoginComponent';
import SignupComponent from './components/LoginSignup/SignupComponent';
import ProtectedRoute from './components/LoginSignup/ProtectedRoutes';
import Home from './pages/Home';
import EmergencyServices from './pages/EmergencyServices';
import SpecialtyAIPage from './pages/SpecialtyAIPage';
import Chatbot from './pages/Chatbot';
import DiseasePrediction from './pages/DiseasePrediction';
import AccountComponent from './components/Account/AccountComponent';
import LandingPage from './DocPat/LandHome'; // Import the landing page
import Doctor from './DocPat/Doctor'; // Import the Doctor component
import Patient from './DocPat/Patient'; // Import the Patient component
import PropTypes from 'prop-types';
import Navbar from './components/Navbar/Navbar';

const ProtectedLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/Doctor/login" element={<LoginComponent />} />
        <Route path="/Doctor/signup" element={<SignupComponent />} />
        <Route path="/Doctor/login" element={<LoginComponent />} />
        <Route path="/Doctor/signup" element={<SignupComponent />} />
        
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Doctor Route (Redirect to login if not authenticated) */}
        <Route path="/doctor" element={<Doctor />} />
        
        {/* Patient Route */}
        <Route path="/patient" element={<Patient />} />

        {/* Protected Routes */}
        <Route
          path="/Doctor/home"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <Home />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/emergency-services"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <EmergencyServices />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/real-time-queue"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <SpecialtyAIPage />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/chatbot"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <Chatbot />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/disease-prediction"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <DiseasePrediction />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/account"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <AccountComponent />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />



        <Route
          path="/patient/home"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <Home />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/emergency-services"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <EmergencyServices />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/real-time-queue"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <SpecialtyAIPage />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/chatbot"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <Chatbot />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/disease-prediction"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <DiseasePrediction />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/account"
          element={
            <ProtectedRoute>
              <ProtectedLayout>
                <AccountComponent />
              </ProtectedLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
