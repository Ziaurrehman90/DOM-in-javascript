const text=document.getElementsByClassName('heading')
function login() {
    localStorage.setItem("auth", true);
    window.location.reload();
  }

  function logout() {
    localStorage.setItem("auth", false);
    window.location.reload();
  }
  const heading = document.getElementById("heading");
      const loginStatus = localStorage.getItem("auth");
      if (loginStatus != "false") {
        heading.innerHTML = "User is logged In";
      } else {
        heading.innerHTML = "User Has Not logged In";
      }

