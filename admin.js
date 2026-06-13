import { db } from "./firebase-config.js";
import {
ref,
onValue,
update,
get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const table = document.getElementById("applicationsTable");

onValue(ref(db, "applications"), (snapshot) => {

```
table.innerHTML = "";

let totalApplications = 0;

snapshot.forEach((child) => {

    totalApplications++;

    const data = child.val();

    const row = `
    <tr>
        <td>${child.key}</td>
        <td>${data.fullName || ""}</td>
        <td>${data.course || ""}</td>
        <td>${data.status || "Pending"}</td>
        <td>${data.regNumber || "-"}</td>
        <td>
            <button onclick="approveApplication('${child.key}')" style="background:green;color:white;border:none;padding:8px 12px;border-radius:5px;cursor:pointer;">
                Approve
            </button>

            <button onclick="rejectApplication('${child.key}')" style="background:red;color:white;border:none;padding:8px 12px;border-radius:5px;cursor:pointer;">
                Reject
            </button>
        </td>
    </tr>
    `;

    table.innerHTML += row;

});

const statCards = document.querySelectorAll(".stat-box p");

if (statCards.length > 0) {
    statCards[0].textContent = totalApplications;
}
```

});

window.approveApplication = async (id) => {

```
const snap = await get(ref(db, "applications/" + id));

if (!snap.exists()) {
    return;
}

const data = snap.val();

let prefix = "SMA";

if (data.course === "Data Analysis with Microsoft Excel") {
    prefix = "SMA-EXCEL";
} else if (data.course === "SQL for Data Analysis") {
    prefix = "SMA-SQL";
} else if (data.course === "Power BI Fundamentals") {
    prefix = "SMA-PBI";
} else if (data.course === "Python for Data Analysis") {
    prefix = "SMA-PYT";
}

const regNumber =
    prefix + "-" + Date.now().toString().slice(-3);

await update(ref(db, "applications/" + id), {
    status: "Approved",
    regNumber: regNumber
});

alert("Application Approved\nRegistration Number: " + regNumber);
```

};

window.rejectApplication = async (id) => {

```
await update(ref(db, "applications/" + id), {
    status: "Rejected"
});

alert("Application Rejected");
```

};
