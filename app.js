let duck = fetch('https://random-d.uk/api')
.then(response => response.json())
.then(result =>
    console.log(result)
)