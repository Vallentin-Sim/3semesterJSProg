

const userPNodes = document.querySelectorAll('div#userlist p')

for (const node of userPNodes) {
    node.addEventListener('click', async (event)=>{
       const userid = event.target.dataset.userid
       const response = await fetch('/users/'+ userid, {method:'DELETE'})
       const answer = await response.json()
       window.alert(answer.message)
       window.location.href='/users'
    })
}