// getDate.js
function lastUpdated() {
  let currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  let lastModified = document.lastModified;
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${lastModified}`;
}

lastUpdated();
