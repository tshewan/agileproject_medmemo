import { showAlert } from "./alert.js";

export const signup = async (name, cid, dateOfBirth, gender, password, passwordConfirm,roleName) => {
    try{
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4001/api/v1/users/signup',
            data: {
                name,
                cid,
                gender,
                dateOfBirth,
                password,
                passwordConfirm,
                roleName,
            },
        })

        if (res.data.status === 'success') {
            showAlert('success', 'Account created successfully!')
            window.setTimeout(() => {
                location.assign('/')
            }, 1500)
        }
    }
    catch(err){
        let message =
            typeof err.response !== 'undefined'
            ? err.response.data.message
            :err.message
        showAlert('error', 'Error: Passwords are not the same', message)
    }
}

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const cid = document.getElementById('cid').value
    const dof = document.getElementById('DOB').value
    // console.log(dof)
    const gender = document.querySelector("option[name=gender]:checked").value
    // console.log(gender)
    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('password-confirm').value
    const roleName = document.querySelector('option[name=user]:checked').value
    signup(name, cid, dof, gender, password, passwordConfirm,roleName)

})