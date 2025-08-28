/* ================================
   Global Variables (Scope Demo)
================================ */
let count = 0;
let clickMultiplier = 2;

/* ================================
   Function: Multiply Click Count
   - Demonstrates parameters + return
================================ */
function getClickValue(baseCount) {
  return baseCount * clickMultiplier; // Uses global scope var
}

/* ================================
   Function: Toggle Dark Mode
   - Demonstrates event handling
================================ */
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/* ================================
   Function: Handle Click Counter
   - Uses a function with return value
   - Triggers CSS animation with class
================================ */
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  const result = getClickValue(count);
  const display = document.getElementById("counterDisplay");
  display.textContent = result;

  // Trigger fade-in animation
  display.style.animation = "fadeIn 0.5s ease";
  setTimeout(() => {
    display.style.animation = "";
  }, 500);
});

/* ================================
   Form Validation
   - Custom rules (no HTML5)
   - Uses local vs global scope
================================ */
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  document.getElementById("formSuccess").textContent = "";

  // Local variables for validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Name validation
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Confirm password
  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    isValid = false;
  } else {
    document.getElementById("confirmPasswordError").textContent = "";
  }

  // Final success message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});

/* ================================
   Animate Box (JS triggers CSS)
================================ */
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("animatedBox");
  box.classList.remove("animate"); // restart animation if needed
  void box.offsetWidth; // force reflow
  box.classList.add("animate");
});
