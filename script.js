document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault();
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const position = document.getElementById('position').value;
   
    if (name && email && position) {
     document.getElementById('message').innerText = `Registration successful for &{name}!`;
     document.getElementById('registrationForm').requestFullscreen();
    } else {
     document.getElementById('message').innerText = 'please fill in all fields';
    }
   }); 