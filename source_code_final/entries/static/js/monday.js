console.log('loaded')
let dataDiv = document.querySelector("#ajax-data")
let button = document.querySelector("#ajax-button")
button.addEventListener('click', (event) => {
    fetch('ajax', {
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        let text = document.createElement('p')
        text.innerText = `You have ${data['response']} entries`
        dataDiv.appendChild(text) 
    })
} )