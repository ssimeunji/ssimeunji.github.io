/* 아이디 */
function idCheck() {
    const id = document.getElementById('id').value;
    const idLength = id.length;
    const idResult = document.getElementById('id-result');

    const corIcon = document.getElementById('id-correct-icon');
    const worIcon = document.getElementById('id-wrong-icon');
    // const exp = /^(?=.*[a-z])[a-z]{6,10}$/;
    const exp = /^[a-z0-9_-]{4,20}$/;

    if(idLength == 0) {
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        idResult.innerHTML = '필수 정보입니다.';
        idResult.style.color = 'red';
    } else if(!id.match(exp)){
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        idResult.innerHTML = '조건에 맞게 입력해 주세요.';
        idResult.style.color = 'red';
    } else {
        corIcon.style.display = 'inline';
        worIcon.style.display = 'none';
        idResult.innerHTML = '사용가능한 아이디 입니다.';
        idResult.style.color = 'green';
    }

}

/* 비밀번호 */
function pwCheck() {
    const pw = document.getElementById('pw').value;
    const pwResult = document.getElementById('pw-result');
    const exp = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/;

    const pwLength = pw.length;
    const corIcon = document.getElementById('pw-correct-icon');
    const worIcon = document.getElementById('pw-wrong-icon');
    if(pwLength == 0) {
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        pwResult.innerHTML= '필수 정보입니다.';
        pwResult.style.color = 'red';
    } else if (!pw.match(exp)) {
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        pwResult.innerHTML = '조건에 맞게 입력해 주세요.';
        pwResult.style.color = ' red';
    } else {
        corIcon.style.display = 'inline';
        worIcon.style.display = 'none';
        pwResult.innerHTML = '사용가능한 비밀번호 입니다.';
        pwResult.style.color = 'green';
    }
}
/* 비밀번호 확인 */
function pwConCheck() {
    const pw = document.getElementById('pw').value;
    const pwConfirm = document.getElementById('pw-confirm').value;
    const pwConfirmLength = pwConfirm.length;
    const pwConResult = document.getElementById('pw-confirm-result');
    const corIcon = document.getElementById('pwc-correct-icon');
    const worIcon = document.getElementById('pwc-wrong-icon');

    if(pwConfirmLength == 0) {
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        pwConResult.innerHTML= '필수 정보입니다.';
        pwConResult.style.color = 'red';
    }else if(pw != pwConfirm) {
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        pwConResult.innerHTML= '비밀번호가 일치하지 않습니다.';
        pwConResult.style.color = 'red';
    } else {
        corIcon.style.display = 'inline';
        worIcon.style.display = 'none';
        pwConResult.innerHTML = '비밀번호가 일치합니다.';
        pwConResult.style.color = 'green';
    }

}

/* 이메일 */
function emailCheck() {
    const email = document.getElementById('email').value;
    const emailResult = document.getElementById('email-result');
    const emailLength = email.length;

    const corIcon = document.getElementById('email-correct-icon');
    const worIcon = document.getElementById('email-wrong-icon');
    if(emailLength == 0){
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        emailResult.innerHTML= '필수 정보입니다.';
        emailResult.style.color = 'red';
    } else {
        corIcon.style.display = 'none';
        worIcon.style.display = 'none';
        emailResult.innerHTML= '';
    }
}
function emailSelect() {
    const domainSelect=document.getElementById('domainSelect').value;
    const domain=document.getElementById('domain');
    domain.value=domainSelect;
}
function domainCheck() {
    const domain = document.getElementById('domain').value;
    const emailResult = document.getElementById('email-result');
    const corIcon = document.getElementById('email-correct-icon');
    const worIcon = document.getElementById('email-wrong-icon');
    if(domain == 0) {
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        emailResult.innerHTML= '필수 정보입니다.';
        emailResult.style.color = 'red';
    } else {
        corIcon.style.display = 'inline';
        worIcon.style.display = 'none';
        emailResult.innerHTML= '이메일이 입력되었습니다.';
        emailResult.style.color = 'green';
    }
}
/* 주소 */
function addressSelect() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = '';
            var extraAddr = '';

            if (data.userSelectedType === 'R') {
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }

            if(data.userSelectedType === 'R'){
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }

                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }

                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }

                document.getElementById("add-extraAddress").value = extraAddr;
            } else {
                document.getElementById("add-extraAddress").value = '';
            }

            document.getElementById('add-postcode').value = data.zonecode;
            document.getElementById("add-address").value = addr;
            document.getElementById("add-detailAddress").focus();
        }
    }).open();
}
function addCheck() {
    const detailAdd = document.getElementById('add-detailAddress');
    const detailAddLength = detailAdd.length;
    const addCheck = document.getElementById('add-check');

    const corIcon = document.getElementById('add-correct-icon');
    const worIcon = document.getElementById('add-wrong-icon');

    if(detailAddLength == 0){
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        addCheck.innerHTML= '필수 정보입니다.';
        addCheck.style.color = 'red';
    } else {
        corIcon.style.display = 'inline';
        worIcon.style.display = 'none';
        addCheck.innerHTML= '주소가 입력되었습니다.';
        addCheck.style.color = 'green';

    }
}

/* 전화번호 */
function phoneCheck() {
    const phone = document.getElementById('phone').value;
    const phoneLength = phone.length;
    const phCheck = document.getElementById('phone-check');

    const corIcon = document.getElementById('ph-correct-icon');
    const worIcon = document.getElementById('ph-wrong-icon');

    const exp = /^\d{3}-\d{4}-\d{4}$/;
    if (phoneLength == 0) {
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        phCheck.innerHTML= '필수 정보입니다.';
        phCheck.style.color = 'red';
    } else if(!phone.match(exp)){
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        phCheck.innerHTML= '형식에 맞게 입력해주세요.';
        phCheck.style.color = 'red';
    } else {
        corIcon.style.display = 'inline';
        worIcon.style.display = 'none';
        phCheck.innerHTML= '전화번호가 입력되었습니다.';
        phCheck.style.color = 'green';
    }
}


/* Sign In */
function loginCheck() {
    const id = document.getElementById('id-login').value;
    const idLength = id.length;

    const pw = document.getElementById('pw-login').value;
    const pwLength = pw.length;

    const result = document.getElementById('login-result');
    const corIcon = document.getElementById('login-correct-icon');
    const worIcon = document.getElementById('login-wrong-icon');

    if(idLength == 0 || pwLength == 0) {
        corIcon.style.display = 'none';
        worIcon.style.display = 'inline';
        result.innerHTML= '필수 정보입니다.';
        result.style.color = 'red';
    } else {
        corIcon.style.display = 'none';
        worIcon.style.display = 'none';
        result.innerHTML= '';
    }
}