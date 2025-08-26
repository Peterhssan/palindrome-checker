const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  // Remove everything that's not a letter or number (supports all alphabets)
  let cleaned = str.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

function showMessage(message, type) {
  // Reset classes first
  result.classList.remove("success", "error", "show");

  // Add new message and classes
  result.textContent = message;
  if (type) {
    result.classList.add(type, "show");
  }
}

// When button is clicked
button.addEventListener("click", () => {
  let text = input.value;

  if (text.trim() === "") {
    showMessage("Please input a value", "error");
    return;
  }

  if (isPalindrome(text)) {
    showMessage(`${text} is a palindrome.`, "success");
  } else {
    showMessage(`${text} is not a palindrome.`, "error");
  }
});

// Allow pressing Enter to check
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});

// Clear result when typing again
input.addEventListener("input", () => {
  showMessage("", "");
});
