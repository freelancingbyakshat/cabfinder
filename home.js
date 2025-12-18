let selectedCab = "";
let ratePerKm = 0;
const distance = 12; // Demo distance

const driversData = [
  { name: "Prithvi", cab: "Mini", exp: "5 Years", slogan: "Safe Ride", img: "img/unknowncabdrivering.jpeg", phone: "9270213733" },
  { name: "Amit", cab: "Sedan", exp: "7 Years", slogan: "Smooth Drive", img: "img/unknowncabdrivering.jpeg", phone: "9270213733" },
  { name: "Ramesh", cab: "SUV", exp: "10 Years", slogan: "Fast & Safe", img: "img/unknowncabdrivering.jpeg", phone: "9270213733" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Display user name
    const userNameSpan = document.getElementById('userName');
    const storedName = localStorage.getItem('userName');
    if (storedName) {
        userNameSpan.textContent = storedName;
    }

    // Make selectCab function global
    window.selectCab = function(cab, rate) {
        selectedCab = cab;
        ratePerKm = rate;

        const pickup = document.getElementById("pickup").value.trim();
        const drop = document.getElementById("drop").value.trim();

        if (!pickup || !drop) {
            alert("Please enter Pickup and Drop locations first.");
            return;
        }

        // Save pickup/drop
        localStorage.setItem("pickup", pickup);
        localStorage.setItem("drop", drop);

        const driverContainer = document.getElementById("drivers");
        const heading = document.getElementById("drivers-heading");
        driverContainer.innerHTML = ""; // clear previous drivers

        let hasDriver = false;

        driversData.forEach(driver => {
            if (driver.cab.toLowerCase() === selectedCab.toLowerCase()) {
                hasDriver = true;
                const fare = distance * ratePerKm;
                const driverUrl = `driver.html?name=${encodeURIComponent(driver.name)}&exp=${encodeURIComponent(driver.exp)}&slogan=${encodeURIComponent(driver.slogan)}&img=${encodeURIComponent(driver.img)}&phone=${encodeURIComponent(driver.phone)}&fare=${encodeURIComponent(fare)}`;

                const driverDiv = document.createElement("div");
                driverDiv.className = "driver";
                driverDiv.innerHTML = `
                    <a href="${driverUrl}">
                        <img src="${driver.img}" alt="${driver.name}" width="80" height="80">
                        <div>
                            <b>${driver.name}</b>
                            <p>📞 ${driver.phone}</p>
                            <p>${driver.exp}</p>
                        </div>
                    </a>
                `;
                driverContainer.appendChild(driverDiv);
            }
        });

        // Show or hide heading
        heading.style.display = hasDriver ? "block" : "none";

        if (!hasDriver) {
            driverContainer.innerHTML = "<p>No drivers available for this cab type.</p>";
        }
    };
});
