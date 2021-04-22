const valid = ({
    fullname,
    username,
    email,
    password,
    cf_password
}) => {
    let err = {}
    if (!fullname) {
        err.fullname = "Please add your fullname..."
    } else if (fullname.length > 25)
        err.fullname = "fullname is up to 25 charchters"
    if (!username) {
        err.username = "please add your username"
    } else if (username.toLowerCase().replace(/ /g, '').length > 25) {
        err.username = "User name is up to 25 charchter long"
    }
    if (!email) {
        err.email = "please add your email"
    } else if (!validateEmail(email)) {
        err.email = "Email format is Incorrect"
    }
    if (!password) {
        err.password = "please add your password"
    } else if (password.length < 6) {
        err.email = "Password length must be more 6 characters"
    }
    if (password !== cf_password) {
        err.cf_password = "Confirm password did not match"
    }
    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}
export default valid
function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}