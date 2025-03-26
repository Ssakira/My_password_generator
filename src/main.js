document.addEventListener("DOMContentLoaded", () => {
  const passwordField = document.getElementById("password");
  const copyBtn = document.getElementById("copyBtn");
  const generateBtn = document.getElementById("generateBtn");
  const lengthInput = document.getElementById("length");
  const lengthValue = document.getElementById("lengthValue");
  const strengthIndicator = document.getElementById("strength");

  const uppercaseCheckbox = document.getElementById("uppercase");
  const lowercaseCheckbox = document.getElementById("lowercase");
  const numbersCheckbox = document.getElementById("numbers");
  const symbolsCheckbox = document.getElementById("symbols");

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

  function generatePassword() {
      let length = parseInt(lengthInput.value);
      let chars = "";

      if (uppercaseCheckbox.checked) chars += uppercaseChars;
      if (lowercaseCheckbox.checked) chars += lowercaseChars;
      if (numbersCheckbox.checked) chars += numberChars;
      if (symbolsCheckbox.checked) chars += symbolChars;

      if (chars.length === 0) {
          passwordField.value = "Select at least one option!";
          strengthIndicator.textContent = "";
          strengthIndicator.style.background = "transparent";
          return;
      }

      let password = "";
      for (let i = 0; i < length; i++) {
          password += chars[Math.floor(Math.random() * chars.length)];
      }

      passwordField.value = password;
      checkStrength(password);
  }

  function checkStrength(password) {
      let strength = 0;
      
      if (password.length >= 8) strength++;
      if (password.length >= 12) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[a-z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;

      if (strength <= 2) {
          strengthIndicator.textContent = "Weak";
          strengthIndicator.style.background = "#e74c3c"; // Red
      } else if (strength <= 4) {
          strengthIndicator.textContent = "Normal";
          strengthIndicator.style.background = "#f1c40f"; // Yellow
      } else {
          strengthIndicator.textContent = "Strong";
          strengthIndicator.style.background = "#2ecc71"; // Green
      }
  }

  generateBtn.addEventListener("click", generatePassword);
  
  copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(passwordField.value);
      copyBtn.textContent = "✔ Copied!";
      setTimeout(() => copyBtn.textContent = "📋", 2000);
  });

  lengthInput.addEventListener("input", () => {
      lengthValue.textContent = lengthInput.value;
  });

  generatePassword();
});
