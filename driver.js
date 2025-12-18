// Get driver info from URL
const params = new URLSearchParams(window.location.search);
const driverInfo = {
  name: params.get('name') || "--",
  exp: params.get('exp') || "--",
  slogan: params.get('slogan') || "--",
  img: params.get('img') || "",
  phone: params.get('phone') || "--"
};

// Get pickup & drop from localStorage
const pickup = localStorage.getItem("pickup") || "--";
const drop = localStorage.getItem("drop") || "--";

// Fill driver details
document.getElementById("driverImg").src = driverInfo.img;
document.getElementById("driverName").innerText = driverInfo.name;
document.getElementById("driverSlogan").innerText = driverInfo.slogan;
document.getElementById("driverExp").innerText = "Experience: " + driverInfo.exp;
document.getElementById("driverPhone").innerText = "📞 " + driverInfo.phone;
document.getElementById("driverPickup").innerText = `📍 ${pickup} ➝ ${drop}`;
document.getElementById("driverDrop").style.display = "none"; // Hide old separate drop line

// Book Ride button
document.getElementById("bookRideBtn").addEventListener("click", () => {
  window.location.href = "tel:" + driverInfo.phone;
});
