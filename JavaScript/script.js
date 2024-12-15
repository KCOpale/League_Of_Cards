function toggleMode() {
    document.body.classList.toggle('dark');
    document.querySelector('button').textContent =
      document.body.classList.contains('dark') ? 'Mode Clair' : 'Mode Sombre';
  }
  const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});
document.getElementById("submitButton").addEventListener("click", function () {
    const pseudo = document.getElementById("pseudo");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const level = document.querySelector('input[name="level"]:checked');
    const messageDiv = document.getElementById("message");

    let isValid = true;
    let messages = [];
    if (pseudo.value.length >= 6) {
        pseudo.className = "valid";
    } else {
        pseudo.className = "invalid";
        isValid = false;
        messages.push("Le pseudo doit avoir au moins 6 caractères.");
    }
    if (email.value.includes("@")) {
        email.className = "valid";
    } else {
        email.className = "invalid";
        isValid = false;
        messages.push("L'email est invalide.");
    }
    if (password.value.length >= 8) {
        password.className = "valid";
    } else {
        password.className = "invalid";
        isValid = false;
        messages.push("Le mot de passe doit avoir au moins 8 caractères.");
    }
    if (password.value === confirmPassword.value && password.value.length >= 8) {
        confirmPassword.className = "valid";
    } else {
        confirmPassword.className = "invalid";
        isValid = false;
        messages.push("Les mots de passe ne correspondent pas.");
    }
    if (!level) {
        isValid = false;
        messages.push("Veuillez choisir un niveau en programmation.");
    }
    if (isValid) {
        messageDiv.className = "success";
        messageDiv.textContent = "Inscription réussie !";
    } else {
        messageDiv.className = "error";
        messageDiv.innerHTML = messages.join("<br>");
    }
});
