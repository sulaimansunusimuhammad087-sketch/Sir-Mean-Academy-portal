console.log("REGISTER JS LOADED");

import { db } from "./firebase-config.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const form = document.getElementById("applicationForm");

form.addEventListener("submit", async (e) => {
e.preventDefault();

const data = {
fullName: document.getElementById("fullName").value,
phone: document.getElementById("phone").value,
email: document.getElementById("email").value,
institution: document.getElementById("institution").value,
department: document.getElementById("department").value,
level: document.getElementById("level").value,
course: document.getElementById("course").value,
gender: document.getElementById("gender").value,
state: document.getElementById("state").value,
status: "Pending",
dateApplied: new Date().toISOString()
};

try {
await push(ref(db, "applications"), data);
alert("Application submitted successfully!");
form.reset();
} catch (error) {
console.error(error);
alert("Error: " + error.message);
}
});
