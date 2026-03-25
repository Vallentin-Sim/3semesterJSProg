class User {
    constructor(username, password, id = User.id){
        this.username = username
        this.password = password
        this.id = id

        // Move the static counter forward when an existing user is restored from file.
        if (id >= User.id) {
            User.id = id + 1
        }
    }

    static id = 1
}

export {User}