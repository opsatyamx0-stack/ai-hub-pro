const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value.trim();

  if (!message) return;

  // User message
  const userDiv = document.createElement("div");
  userDiv.className = "ai-message";
  userDiv.style.background = "#2d7ef7";
  userDiv.textContent = "🧑 " + message;
  chatBox.appendChild(userDiv);

  // AI placeholder
  const aiDiv = document.createElement("div");
  aiDiv.className = "ai-message";
  aiDiv.textContent = "🤖 AI is thinking...";
  chatBox.appendChild(aiDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
  userInput.value = "";
    }
