document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
      const footer = document.getElementById('footer');
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;
  
      if (scrollY + viewportHeight >= fullHeight - 10) {
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }
    });
  });
  
// Login-signup
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const showLoginBtn = document.getElementById("show-login");
const showSignupBtn = document.getElementById("show-signup");

const toSignup = document.getElementById("to-signup");
const toLogin = document.getElementById("to-login");

function showLogin() {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  showLoginBtn.classList.add("active");
  showSignupBtn.classList.remove("active");
}

function showSignup() {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  showSignupBtn.classList.add("active");
  showLoginBtn.classList.remove("active");
}

showLoginBtn.addEventListener("click", showLogin);
showSignupBtn.addEventListener("click", showSignup);
toSignup.addEventListener("click", showSignup);
toLogin.addEventListener("click", showLogin);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  setTimeout(function() {
    window.location.href = 'index.html';
}, 1000);
});
