function downloadResumeFromGDrive () {
    let url = "https://drive.google.com/file/d/12o69VGBFxKLP8Bp448oG-RE4kIz1neKA/view?usp=drive_link";
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

let repos = document.getElementById("repoCount");

function getGithubProfile(){
    const username = 'swapnilwasnik007';
    fetch(`https://api.github.com/users/${username}`)
  .then(response =>response.json())
  .then(data => {
    repos.innerHTML = data.public_repos;
  });
}

getGithubProfile();