let pitchCont = document.getElementById("pitchCont");
let detailsCont = document.getElementById("detailsCont");
let discCont = document.getElementById("discCont");
let updatesCont = document.getElementById("updatesCont");

let pitchContShow = document.getElementById("pitchContShow");
let detailsContShow = document.getElementById("detailsContShow");
let discContShow = document.getElementById("discContShow");
let updatesContShow = document.getElementById("updatesContShow");

function Pitch(){
    pitchCont.classList.remove("menu-tag-active");
    detailsCont.classList.remove("menu-tag-active");
    discCont.classList.remove("menu-tag-active");
    updatesCont.classList.remove("menu-tag-active");

    pitchCont.classList.add("menu-tag-active");

    pitchContShow.classList.add("d-none");
    detailsContShow.classList.add("d-none");
    discContShow.classList.add("d-none");
    updatesContShow.classList.add("d-none");

    pitchContShow.classList.remove("d-none");
}

function Details(){
    pitchCont.classList.remove("menu-tag-active");
    detailsCont.classList.remove("menu-tag-active");
    discCont.classList.remove("menu-tag-active");
    updatesCont.classList.remove("menu-tag-active");

    detailsCont.classList.add("menu-tag-active");

    pitchContShow.classList.add("d-none");
    detailsContShow.classList.add("d-none");
    discContShow.classList.add("d-none");
    updatesContShow.classList.add("d-none");

    detailsContShow.classList.remove("d-none");
}
function Discussion(){
    pitchCont.classList.remove("menu-tag-active");
    detailsCont.classList.remove("menu-tag-active");
    discCont.classList.remove("menu-tag-active");
    updatesCont.classList.remove("menu-tag-active");

    discCont.classList.add("menu-tag-active");

    pitchContShow.classList.add("d-none");
    detailsContShow.classList.add("d-none");
    discContShow.classList.add("d-none");
    updatesContShow.classList.add("d-none");

    discContShow.classList.remove("d-none");
}

function Updates(){
    pitchCont.classList.remove("menu-tag-active");
    detailsCont.classList.remove("menu-tag-active");
    discCont.classList.remove("menu-tag-active");
    updatesCont.classList.remove("menu-tag-active");

    updatesCont.classList.add("menu-tag-active");

    pitchContShow.classList.add("d-none");
    detailsContShow.classList.add("d-none");
    discContShow.classList.add("d-none");
    updatesContShow.classList.add("d-none");

    updatesContShow.classList.remove("d-none");
}