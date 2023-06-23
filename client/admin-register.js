function adminLogin() {
    // Get the values from the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Retrieve the stored username and password from local storage
    var storedUsername = localStorage.getItem('admin_username');
    var storedPassword = localStorage.getItem('admin_password');
  
    // Perform validation and login logic
    if (username === storedUsername && password === storedPassword) {
      // Login successful, display a success message
      alert('Login successful! Welcome, Admin ' + username);
      // Redirect to the admin page or perform other actions
    } else {
      // Login failed, display an error message
      alert('Invalid username or password!');
    }
  }
  