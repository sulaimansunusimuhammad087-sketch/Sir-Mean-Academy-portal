import { db } from "./firebase-config.js";
import {
ref,
get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const params = new URLSearchParams(window.location.search);

const regNumber = params.get("reg");

if (!regNumber) {
    alert("Registration Number Missing");
}

const applicationsRef = ref(db, "applications");

get(applicationsRef).then((snapshot) => {

    if (!snapshot.exists()) {
        return;
    }

    snapshot.forEach((child) => {

        const data = child.val();

        if (data.regNumber === regNumber) {

            document.getElementById("studentName").textContent =
                data.fullName || "";

            document.getElementById("courseName").textContent =
                data.course || "";

            document.getElementById("regNumber").textContent =
                data.regNumber || "";

            document.getElementById("completionDate").textContent =
                data.certificateDate || "Not Available";
        }

    });

});
