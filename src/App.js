import React from 'react';
import './App.css';
import logo from './logo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from './Login'; // Import the Login component

function HomePage() {
  return (
    <div className="app">
      <div className="welcome-section">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
        <h1 className="welcome-title">WELCOME TASK MASTER!</h1>
      </div>
      <div className="auth-section">
        <Link to="/login">
          <button className="auth-button">LOG IN</button>
        </Link>
        <Link to="/signup">
          <button className="auth-button">SIGN UP</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<Login />} /> */}
    
      </Routes>
    </Router>
  );
}

export default App;
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import loginImage from './src/loginImage.png';


// function Login() {
//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <div className="login-image">
//           {/* <img src={loginImage} alt="Login Illustration" /> */}
//         </div>
//         <div className="login-form">
//           <h2>Login</h2>
//           <form>
//             <input type="text" placeholder="Username" className="login-input" />
//             <input type="password" placeholder="Password" className="login-input" />
//             <button type="submit" className="login-button">Log In</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// function HomePage() {
//   return (
//     <div className="app">
//       <div className="welcome-section">
//         <h1 className="welcome-title">WELCOME TASK MASTER!</h1>
//       </div>
//       <div className="auth-section">
//         <Link to="/login">
//           <button className="auth-button">LOG IN</button>
//         </Link>
//         <Link to="/signup">
//           <button className="auth-button">SIGN UP</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         {/* <Route path="/login" element={<Login />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
