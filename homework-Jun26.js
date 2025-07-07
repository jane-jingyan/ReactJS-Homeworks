const form = document.getElementById("guestForm");
const inputText = document.getElementById("guestName");
const clearAllBtn = document.getElementById("clearAll");
const guestList = document.getElementById("guestList");

// Add guest to list
function addGuest(guestName) {
    const li = document.createElement("li");
    li.textContent = guestName + " ";

    // Confirm button
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.addEventListener("click", () => {
        li.classList.toggle("confirmed");
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(confirmBtn);
    li.appendChild(removeBtn);
    guestList.appendChild(li);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const guestName = inputText.value.trim();
    if (guestName !== "") {
        addGuest(guestName);
        inputText.value = ""; // Clear the input after adding
    }
})

// Clear all guests
clearAllBtn.addEventListener('click', () => {
    guestList.innerHTML = "";   
});
