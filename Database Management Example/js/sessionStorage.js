function loadUser(id, email, name, last_name, job){
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("last_name", last_name);
    sessionStorage.setItem("job", job);
}

function removeUser(){
    sessionStorage.clear() 
}

function getCurrentId(){
    return sessionStorage.getItem("id");
}

function getCurrentEmail(){
    return sessionStorage.getItem("email");
}

function getCurrentUsername(){
    return sessionStorage.getItem("username");
}

function getCurrentName(){
    return sessionStorage.getItem("name");
}

function getCurrentLastName(){
    return sessionStorage.getItem("last_name");
}

function getCurrentJob(){
    return sessionStorage.getItem("job");
}