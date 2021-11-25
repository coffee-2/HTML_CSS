
id=prompt('아이디 입력');
if(id=='admin') {
    pwd=prompt('비밀번호 입력');
    if(pwd=='123456') {
        location.href="20_login.html"
    }
    else {
        location.href="20_error.html"
    }
}