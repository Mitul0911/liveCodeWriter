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