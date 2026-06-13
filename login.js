import { db } from "./firebase-config.js";
import {
ref,
get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const regNumber =
document.querySelectorAll("input")[0].value.trim();

const phone =
document.querySelectorAll("input")[1].value.trim();

const snapshot =
await get(ref(db, "applications"));

let found = false;

snapshot.forEach((child) => {

const data = child.val();

if(
data.regNumber === regNumber &&
data.phone === phone
){

found = true;

localStorage.setItem(
"studentData",
JSON.stringify({
applicationId: child.key,
...data
})
);

window.location.href =
"student.html";
}

});

if(!found){
alert(
"Invalid Registration Number or Phone Number"
);
}

});
