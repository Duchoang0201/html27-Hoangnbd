jQuery.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    if (regexp.constructor != RegExp)
      regexp = new RegExp(regexp);
    else if (regexp.global)
      regexp.lastIndex = 0;
    return this.optional(element) || regexp.test(value);
  }, "erreur expression reguliere"
);
let settings = {
  rules: {
    text: {
      required: true,
    },
    email: {
      required: true,
      email: true,
      minlength: 6,
    },
    password: {
      required: true,
      minlength: 6,
    },
  },
  messages: {
    text: {
      required: "Yeu cau nhap username",

    },

    email: {
      required: "Bạn chưa nhập email",
      minlength: jQuery.validator.format("Toi thieu co {0} ky tu"),
      email: "Dia chi email khong hop le",
    },
    password: {
      required: "Yeu cau nhap password",
      minlength: "Toi thieu {0} ki tu",
  
    },
  },
};

let validator = $("#myForm").validate(settings);


function handleSubmit() {
  let isValid = $("#myForm").valid();
  if (isValid) {
    let inputName = document.getElementById("inputName");
    let inputCode = document.getElementById("inputCode");
    let inputEmail = document.getElementById("inputEmail");
    let inputPassword = document.getElementById("inputPassword");
    let data = {
      name: inputName.value,
      code: inputCode.value,
      email: inputEmail.value,
      password: inputPassword.value,
    };
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");
    if (id) {
      updateUser(id, data)   
    }else{
      postUser(data);
    }
  } else {
    console.log("cancel submit");
  }
}

function postUser(data) {
  let url = " https://636b8f56ad62451f9fb53c68.mockapi.io/Users ";
  fetch( url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elm = document.getElementById('login-status')
      elm.innerHTML = ('Đăng ký tài khoản thành công')
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function updateUser(userId, data) {
  let url = "https://636b8f56ad62451f9fb53c68.mockapi.io/Users/"+ userId;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elm = document.getElementById('login-status')
      elm.innerHTML = ('Cập nhật tài khoản thành công')
      
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

window.onload = function (e) {
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");
    if (id) {
      getUser(id)
    }
    
  };
function getUser(userId) {
  let url = "https://636b8f56ad62451f9fb53c68.mockapi.io/Users/" + userId;
  fetch( url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      autoFillUser(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function autoFillUser(user) {
  let inputName = document.getElementById('inputName')
  inputName.value = user.name
  let inputCode = document.getElementById('inputCode')
  inputCode.value = user.code
  let inputEmail = document.getElementById('inputEmail')
  inputEmail.value = user.email
  let inputPassword = document.getElementById('inputPassword')
  inputPassword.value = user.password
}

