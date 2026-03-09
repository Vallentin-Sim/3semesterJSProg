
document.querySelector('button').addEventListener('click', async (event)=>{
    event.preventDefault()
    const userName = document.querySelector('#username').value
    const response = await fetch('/adduser', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({name: userName})
    })
    const data = await response.json()
    if (data.status === 200) {
        document.querySelector('#response').innerHTML = `<h3>${data.message}</h3>`
        document.querySelector('#username').value = ""
    } else {
        document.querySelector('#response').innerHTML = '<h2>DER ER SKET EN FEJL. DU må ikke hedde KAJ</h2>'
    }

})