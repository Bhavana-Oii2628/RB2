
// Profile Picture Upload Preview
document.getElementById("imageUpload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("preview").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Save CV
function saveCV() {
    alert(" Saved Successfully!");
}

// Generate CV
function generateCV() {
    alert("Generating ... (Feature Coming Soon)");
}

// Clear Form
function clearForm() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    document.getElementById("preview").src = "placeholder.png";
    alert("Form Cleared!");
}

