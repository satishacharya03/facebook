function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Send login data to the server
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(data.message);
          // Redirect to a dashboard or perform other actions upon successful login
        } else {
          alert(data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  