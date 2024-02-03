function handleFormSubmit(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
 const newLi = document.createElement('li');
    newLi.innerHTML = username + ' - ' + email + ' - ' + phone;

    const userList = document.querySelector('#userList');
    userList.appendChild(newLi);

    const obj = {
        username: username,
        email: email,
        phone: phone
    };
 const newobj = JSON.stringify(obj);
 localStorage.setItem(email, newobj);
}
module.exports = handleFormSubmit;
