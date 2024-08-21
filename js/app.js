function validateEmail() {
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (re.test(emailInput.value)) {
    message.textContent = "Valid email address.";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid email address.";
    message.style.color = "red";
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const result = await response.json();
      message.textContent = "Login successful.";
      message.style.color = "green";
      console.log(result);
    } else {
      const errorResult = await response.json();
      message.textContent = "Invalid email or password.";
      message.style.color = "red";
      console.log(errorResult.error);
    }
  } catch (error) {
    console.error("Error:", error);
    message.textContent = "An error occurred while connecting to the server.";
    message.style.color = "red";
  }
}
