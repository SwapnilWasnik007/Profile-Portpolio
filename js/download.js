function downloadResumeFromGDrive () {
    let url = "https://drive.google.com/file/d/12o69VGBFxKLP8Bp448oG-RE4kIz1neKA/view?usp=sharing";
    fetch(url).then(function(t) {
        return t.blob().then((b)=>{
            var a = document.createElement("a");
            a.href = URL.createObjectURL(b);
            a.setAttribute("download", "Swapnil_Resume.pdf");
            a.click();
        }
        );
    });
}