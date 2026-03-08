function openMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

function openMenu() {

let sidebar = document.getElementById("sidebar");

if(sidebar.style.left === "0px"){
sidebar.style.left = "-260px";
}
else{
sidebar.style.left = "0px";
}

}

function toggleMenu() {

let sidebar = document.getElementById("sidebar");

sidebar.classList.toggle("show");

}