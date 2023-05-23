function downloadResumeFromGDrive () {
    let url = "https://drive.google.com/file/d/1-2fjp_ZaVIfZEVJuNPYhTm1hThxtFoMI/view?usp=share_link";
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