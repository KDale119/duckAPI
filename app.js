function testing() {
fetch('https://dog.ceo/api/breeds/image/random', {method: "GET"})
.then(response => response.json())
.then(result => 
    {
        let pic = document.getElementById('pic')
        pic.setAttribute('src', result.message);
    })
}