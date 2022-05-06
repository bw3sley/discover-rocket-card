function GenerateRandomColors() {
    const hex = 0xFFFFFF; // Max HEX value equals to 16777215

    let number = Math.random() * hex;

    number = Math.floor(number);

    number = number.toString(16);

    const color = number.padStart(6, 0);

    return `#${color}`;
}

function ChangeBorderColor() {
    const borderColor = GenerateRandomColors();
    
    const card = document.querySelector("div#card").style.borderColor = borderColor;
}

const url = "https://api.github.com/users/bw3sley";
const token = "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";

function GetUserLocation() {
    axios.get(url, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
    .then(response => {
        const data = response.data.location;

        const location = data.substring(0, 7);

        const userLocation = document.querySelector("p#location").textContent = location;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserLocation();

function GetUserCompany() {
    axios.get(url, {
        headers: {
            "Authorization": `token ${token}`
        }
    })
    .then(response => {
        const data = response.data.company;
        const userCompany = document.querySelector("#company").textContent = `@${data}`;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserCompany();

function GetUserLogin() {
    axios.get(url, {
        headers: {
            "Authorization": `token ${token}`
        }
    })
    .then(response => {
        const data = response.data.login;
        const userLogin = document.querySelector("a#user-github").textContent = data;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserLogin();

function GetUserFollowers() {
    axios.get(url, {
        headers: {
            "Authorization": `token ${token}`
        }
    })
    .then(response => {
        const data = response.data.followers;
        const userFollowers = document.querySelector("p#followers").textContent = `${data} Seguidores`;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserFollowers();

function GetUserFollowers() {
    axios.get(url, {
        headers: {
            "Authorization": `token ${token}`
        }
    })
    .then(response => {
        const data = response.data.following;
        const userFollowers = document.querySelector("p#following").textContent = `${data} Seguindo`;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserFollowers();

function GetUserRepos() {
    axios.get(url, {
        headers: {
            "Authorization": `token ${token}`
        }
    })

    .then(response => {
        const data = response.data.public_repos;
        const userRepos = document.querySelector("p#repos").textContent = `${data} Repositórios`;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserRepos();

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "32px",
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `main, .stats, .right-content`
    , { interval: 100 }
);
