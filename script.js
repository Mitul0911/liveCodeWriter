function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + `<style> ${cssCode} </style>`;
    output.contentWindow.eval(jsCode);

    localStorage.setItem("html", htmlCode);
    localStorage.setItem("css", cssCode);
    localStorage.setItem("js", jsCode);
}

function show() {
    document.getElementById("html-code").value = localStorage.getItem("html");
    document.getElementById("css-code").value = localStorage.getItem("css");
    document.getElementById("js-code").value = localStorage.getItem("js");
    run();
}

show();

function downloadHTML() {
    console.log("in function");
    let htmlContent = document.getElementById("html-code").value;
    console.log(htmlContent);
    let blob = new Blob([htmlContent], { type: "text/plain" });
    console.log(blob);
    let url = window.URL.createObjectURL(blob);
    console.log(url);
    let a = document.getElementById("downloadLink");
    console.log(a);
    a.href = url;
    a.download = "html.txt";
    a.click();
    window.URL.revokeObjectURL(url);
}

function downloadCSS () {
    let htmlContent = document.getElementById("css-code").value;
    let blob = new Blob([htmlContent], { type: "text/plain" });
    let url = window.URL.createObjectURL(blob);
    let a = document.getElementById("downloadLink");
    a.href = url;
    a.download = "css.txt";
    a.click();
    window.URL.revokeObjectURL(url);
}

function downloadJS() {
    let htmlContent = document.getElementById("js-code").value;
    let blob = new Blob([htmlContent], { type: "text/plain" });
    let url = window.URL.createObjectURL(blob);
    let a = document.getElementById("downloadLink");
    a.href = url;
    a.download = "javascript.txt";
    a.click();
    window.URL.revokeObjectURL(url);
}
