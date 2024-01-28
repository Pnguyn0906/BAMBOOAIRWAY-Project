function saveData() {
  let name, email, password;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // localStorage.setItem("name", name);
  // localStorage.setItem("email", email);
  // localStorage.setItem("password", password);
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Duplicate Data");
  } else {
    user_records.push({
      name: name,
      email: email,
      password: password,
    });
    localStorage.setItem("users", JSON.stringly(user_records));
  }
}

function saveData() {
  let email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    alert("Login Successful");
    let current_user = user_records.filter((v) => {
      return v.email == email && v.password == password;
    })[0];

    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    window.location.href = "profile.html";
  } else {
    alert("Login fail");
  }
}
