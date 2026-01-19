const TextUTC = document.getElementById("UTC");
const TextEST = document.getElementById("EST");
const TextULT = document.getElementById("ULT");
const TextOLT = document.getElementById("OLT");

function GetTimeText(Date) {
  const hours = String(Date.getUTCHours()).padStart(2, "0");
  const minutes = String(Date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(Date.getUTCSeconds()).padStart(2, "0");

  const month = String(Date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(Date.getUTCDate()).padStart(2, "0");
  const year = Date.getUTCFullYear();

  return `${hours}:${minutes}:${seconds}\n${month}/${day}/${year}`;
}

function GetTime() {
  const UTC = new Date();
  const EST = new Date(UTC.getTime() - 5 * 60 * 60 * 1000);
  const ULT = new Date(UTC.getTime() - 720 * 60 * 1000);
  const OLT = new Date(ULT.getTime() + 375 * 60 * 1000);

  TextUTC.innerText = GetTimeText(UTC);
  TextEST.innerText = GetTimeText(EST);
  TextULT.innerText = GetTimeText(ULT);
  TextOLT.innerText = GetTimeText(OLT);
}

setInterval(GetTime, 1);
