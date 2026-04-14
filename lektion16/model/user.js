class User {
    constructor(username, password){
        this.username = username
        this.password = password
        this.id = User.id++
    }

    static id = 1
}

// simulator af SQL søgning i in database
function checkUser(username, password) {
   const user = users.find(user => user.username == username && user.password == password)
   if (user){
    return true
   } else {
    return false
   }
}
export default User
export {checkUser}