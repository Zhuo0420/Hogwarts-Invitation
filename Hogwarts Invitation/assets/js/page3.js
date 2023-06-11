var spec_display = document.getElementsByTagName("td"),
low_spec_btn = document.getElementById("low-btn"),
high_spec_btn = document.getElementById("high-btn");
var low_spec = [
"64-位元 Windows 10",
"Intel Core i5-6600 (3.3 GHz) 或 AMD Ryzen 5 1400 (3.2 GHz)",
"16 GB",
"NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB",
"DX 12",
"85 GB HDD",
"SSD（首選）、HDD（支援）、720p / 30 fps、低品質設定",
];
var high_spec = [
"64-位元 Windows 10",
"Intel i7-8700 (3.2 GHz) 或 AMD Ryzen 5 3600 (3.6 GHz)",
"16 GB",
"NVIDIA GeForce 1080 Ti 或 AMD Radeon RX 5700 XT 或 INTEL Arc A770",
"DX 12",
"85 GB SSD",
"SSD、1080p / 60 fps、高品質設定",
]
low_spec_btn.addEventListener('click', function () {
low_spec_btn.className = "active";
high_spec_btn.className = "";
for (var i = 0; i < spec_display.length; i++) {
    spec_display[i].textContent = low_spec[i];
}
})
high_spec_btn.addEventListener('click', function () {
low_spec_btn.className = "";
high_spec_btn.className = "active";
for (var i = 0; i < spec_display.length; i++) {
    spec_display[i].textContent = high_spec[i];
}
})