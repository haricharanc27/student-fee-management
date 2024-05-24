document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

   
    if (username === 'admin' && password === 'password') {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Login successful!';
        window.location.href = 'project interface2.html';
    } 

    else if (username === 'admin1' && password === 'password1') {
        messageElement.style.color = 'red';
        messageElement.textContent = 'login succesful!';
        window.location.href = 'project interface2.html';

    }
    
    else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Invalid username or password.';
    }
});
