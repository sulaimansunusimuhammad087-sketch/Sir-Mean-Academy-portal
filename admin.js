import { db } from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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
    </tr>
    `;

    table.innerHTML += row;
});

const statCards = document.querySelectorAll(".stat-box p");

if(statCards.length > 0){
    statCards[0].textContent = totalApplications;
}
```

});
