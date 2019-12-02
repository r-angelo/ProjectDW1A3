//Abre o menu lateral com um clique no modo mobile
var burger = document.querySelector(".burger");
var mNav = document.querySelector(".navBarMobile");
var ctrl = 0;
var toggleform = document.querySelector(".navUserId");
var inpText = document.querySelector("#inpText");
var inpSubmit = document.querySelector("#inpBut");
var button = document.querySelector(".navLogin");
var navWelcome = document.querySelector(".navWelcome");
var userName = "";


burger.addEventListener("click", () => {
    if (ctrl == 0) {
        mNav.style.display = "flex";
        ctrl = 1;
    } else if (ctrl == 1) {
        mNav.style.display = "none";
        ctrl = 0;
    }
})

var toggleServers = document.querySelector(".mNavServers");
var toggleServicos = document.querySelector(".mNavServicos");
var toggleConsul = document.querySelector(".mNavConsul");
var ctrlServers = 0;
var ctrlServicos = 0;
var ctrlConsul = 0;

toggleServers.addEventListener("click", () => {
    if (ctrlServers == 0) {
        document.querySelector(".mNavServers ul").style.display = "block";
        document.querySelector(".mNavServicos ul").style.display = "none";
        document.querySelector(".mNavConsul ul").style.display = "none";
        ctrlServers = 1;
        ctrlServicos = 0;
        ctrlConsul = 0;
    } else {
        document.querySelector(".mNavServers ul").style.display = "none";
        ctrlServers = 0;
    }
})

toggleServicos.addEventListener("click", () => {
    if (ctrlServicos == 0) {
        document.querySelector(".mNavServers ul").style.display = "none";
        document.querySelector(".mNavServicos ul").style.display = "block";
        document.querySelector(".mNavConsul ul").style.display = "none";
        ctrlServicos = 1;
        ctrlConsul = 0;
        ctrlServers = 0;
    } else {
        document.querySelector(".mNavServicos ul").style.display = "none";
        ctrlServicos = 0;
    }
})

toggleConsul.addEventListener("click", () => {
    if (ctrlConsul == 0) {
        document.querySelector(".mNavServers ul").style.display = "none";
        document.querySelector(".mNavServicos ul").style.display = "none";
        document.querySelector(".mNavConsul ul").style.display = "block";
        ctrlConsul = 1;
        ctrlServers = 0;
        ctrlServicos = 0;
    } else {
        document.querySelector(".mNavConsul ul").style.display = "none";
        ctrlConsul = 0;
    }
})

function showForm() {
    if (ctrl == 0) {
        inpText.value = "";
        toggleform.style.display = "block";
        ctrl = 1;
    } else {
        toggleform.style.display = "none";
        ctrl = 0;
    }
}

function getName() {
    inpSubmit.addEventListener("click", () => {
        userName = inpText.value;
        window.alert("Seja bem vindo " + userName);
        toggleform.style.display = "none";
        button.style.display = "none";
        navWelcome.innerHTML = "Bem vindo, " + userName;
    })
}