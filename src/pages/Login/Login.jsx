import { useRef } from "react";
import Form from "react-bootstrap/Form";

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  // Assuming verifyUser is defined elsewhere or import it
  const verifyUser = (username, password) => {
    // Dummy verification logic; replace with real logic
    return username === "user" && password === "pass" ? { username } : null;
  };

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();
    const userInfo = verifyUser(user, pass);
    userRef.current.value = '';
    passRef.current.value = '';

    if (userInfo === null) {
      alert("Wrong username or password");
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
    }
  };

  const handleCancel = () => {
    userRef.current.value = '';
    passRef.current.value = '';
    userRef.current.focus();
  };

  return (
    <div className="login-container">
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          ref={userRef}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          ref={passRef}
        />
      </Form.Group>

      <button className="btn btn-success mt-3" onClick={handleLogin}>
        Login
      </button>
      <button className="btn btn-danger mt-3" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default Login;
