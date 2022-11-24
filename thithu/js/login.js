function handleLogin(user) {
    console.log('login');
    let inputEmail = document.getElementById('input__email').value;
    let inputPwd = document.getElementById('input__password').value;
    console.log(inputEmail, inputPwd);
    if (inputEmail === 'aptech' && inputPwd === 'aptech') {
        window.location.href = './Home.html?islogin=1'

        localStorage.setItem("islogin", 1); 
    }else{
        alert('login that bai')
    }
}