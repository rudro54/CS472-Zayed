"use strict"

function askPassword(ok, fail) {
    let password = prompt("Password", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Jhon',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginfail() {
        console.log(`${this.name} failed to log in`);
    }

};


askPassword(user.loginOk.bind(user), user.loginfail.bind(user));