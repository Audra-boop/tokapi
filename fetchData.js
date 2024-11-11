fetch('http://localhost:3000/getTokenDetails')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error:',error));