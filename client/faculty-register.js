function facultyLogin() {
    // Get the values from the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Retrieve the stored username and password from local storage
    var storedUsername = localStorage.getItem('faculty_username');
    var storedPassword = localStorage.getItem('faculty_password');
  
    // Perform validation and login logic
    if (username === storedUsername && password === storedPassword) {
      // Login successful, display a success message
      alert('Login successful! Welcome, Faculty ' + username);
      // Redirect to the faculty page or perform other actions
    } else {
      // Login failed, display an error message
      alert('Invalid username or password!');
    }
  }
  