import {showAlert} from './alert.js'
//logging out


var obj
if (document.cookie) {
    obj = JSON.parse(document.cookie.substring(6))
}else {
    obj = JSON.parse('{}')
}

var el = document.querySelector('.exchangeLogInSignUp')
if(obj._id) {
    el.innerHTML =
    // '<a id= "logout" class="nav__el">Log out</a> <a href="/me" class="nav__el"><img src="../img/users/'+
    // obj.photo+
    // '"alt="photo of ${user.name}" class="nav__user-img"/> <span>'+
    // obj.name+
    // '</span></a>'
    '<a href="/me" class="nav-link"><img src="../img/users/' 
    + obj.photo +
    '" alt="photo of ${user.name}" class="nav__user-img"/> <span>'+
    obj.name+
    '</span></a>'
    // var doc = document.querySelector('#logout')

    // doc.addEventListener('click', (e) => logout())
}else {
    el.innerHTML = 
    '<a class="nav-link" href="/login"> Log in </a> <a class="nav-link" href="/signup" > Sign up </a>'
}

// const logout = async () => {
//     try{
//         const res = await axios({
//             method: "GET",
//             url: "http://localhost:4001/api/v1/users/logout",

//         })
//         if (res.data.status === 'success') {
//             location.reload(true)
//         }
//     }catch(err){
//         showAlert('error', 'Error logging out! try again.')
//     }
// }

