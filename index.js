class WrongUser{

    constructor(username, password){
        this.name = username;
        this.password = password;
    }

    encryptPassword(){
        console.log("This method encrypt the password. Object Wrong User");
    }

    save(){
        console.log("This method save the user on DB. Object wrong user");
    }
}

const _wrongUser = new WrongUser("user1", "1234");

_wrongUser.encryptPassword();
_wrongUser.save();

class User{

    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

class HashPassword{

    EncryptPassword(password){
        return "returnEncryptPassord";
    }
}

class UserRepository{

    constructor(user){
        this.user = user;
        this.user.password = new HashPassword().EncryptPassword(user.password);
    }

    save(){
        console.log("This method save the user on the first database");
    }
}

const _goodUser = new User("user1","1234");
const _userRepository = new UserRepository(_goodUser);
_userRepository.save();