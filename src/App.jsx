import React from "react";
import "./App.css";
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let phoneNumber = formData.phone;
    let dob = formData.dob;
    dob = new Date(dob);
    let current_date = new Date();
    
    if (phoneNumber.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (dob > current_date) {
      alert("Invalid date of birth. Date of birth cannot be in future.");
    } else {
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
      });
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="main">
      <h1>User Details Modal</h1>
      <button onClick={handleModal}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={handleModal}>
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
              <label htmlFor="username">Username:</label> <br />
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />{" "}
              <br />
              <label htmlFor="email">Email Address:</label> <br />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />{" "}
              <br />
              <label htmlFor="phone">Phone Number:</label> <br />
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />{" "}
              <br />
              <label htmlFor="dob">Date-of-Birth:</label> <br />
              <input
                type="date"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />{" "}
              <br />
              <input type="submit" value="Submit" className="submit-button" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
