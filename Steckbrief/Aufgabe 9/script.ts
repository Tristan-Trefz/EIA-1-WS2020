window.addEventListener("load", function(): void {

let content: string = localStorage.getItem("html");
if (content) {
    document.body.innerHTML = content;
}

let index: number = localStorage.getItem("index");

function counter(): void {
    document.querySelector("#total").innerHTML = index + " tasks";
}

counter();

console.log (index);


document.querySelector("#new").addEventListener("click", function (): void {
    index++;
    console.log(index);
    let item: HTMLElement = document.createElement("div");
    item.classList.add ("item");
    item.setAttribute ("id", "i" + index);
    item.innerHTML += "Click to Edit";
    item.contentEditable = "true";
    document.getElementById ("container").appendChild(item);
    let del: HTMLElement = document.createElement("i");
    del.classList.add ("fas", "fa-trash", "i" + index);
    document.getElementById("i" + index).appendChild(del);
});

document.querySelector("#save").addEventListener("click", function save(): void {
    localStorage.setItem("html", document.body.innerHTML);
    localStorage.setItem("index", index);
    location.reload();
}); 

document.querySelector("#clear").addEventListener("click", function clear (): void {
    localStorage.clear();
    index = 0;
    location.reload();
    console.log(index);
});

document.querySelector (".i1").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i1");
    item.remove();
    index--;
});

document.querySelector (".i2").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i2");
    item.remove();
    index--;
});

document.querySelector (".i3").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i3");
    item.remove();
    index--;
});

document.querySelector (".i4").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i4");
    item.remove();
    index--;
});

document.querySelector (".i5").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i6");
    item.remove();
    index--;
});

document.querySelector (".i7").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i7");
    item.remove();
    index--;
});

document.querySelector (".i8").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i8");
    item.remove();
    index--;
});

document.querySelector (".i9").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i9");
    item.remove();
    index--;
});

document.querySelector (".i10").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i10");
    item.remove();
    index--;
});

document.querySelector (".i11").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i11");
    item.remove();
    index--;
});

document.querySelector (".i12").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i12");
    item.remove();
    index--;
});

document.querySelector (".i13").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i13");
    item.remove();
    index--;
});

document.querySelector (".i14").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i14");
    item.remove();
    index--;
});

document.querySelector (".i15").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i15");
    item.remove();
    index--;
});

document.querySelector (".i16").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i16");
    item.remove();
    index--;
});

document.querySelector (".i17").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i17");
    item.remove();
    index--;
});

document.querySelector (".i18").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i18");
    item.remove();
    index--;
});

document.querySelector (".i19").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i19");
    item.remove();
    index--;
});

document.querySelector (".i20").addEventListener("click", function(): void {
    let item: HTMLElement = document.getElementById("i20");
    item.remove();
    index--;
});


});