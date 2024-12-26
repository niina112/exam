document.getElementById(`sign-up`).addEventListener(`submit`), function (e) {

    let isValid = true

    const email = document.getElementById(`mail`).value;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/
    const emailerror = ducument.getElementById(`mail-error`)


    if (!emailRegex.test(email)) {
        emailerror.textContent = "valid email requared"
        isValid = false
    } else {
        emailerror.textContent = ""
    }
}