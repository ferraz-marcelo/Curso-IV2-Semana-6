let xhr = new XMLHttpRequest()

let bloco = document.querySelector("div")

var repositorioJson = localStorage.getItem("repositorio")

if(repositorioJson == null){
    repositorioJson = []
}

var repositorio = JSON.parse(repositorioJson)

let url = "https://api.github.com/repos/ferraz-marcelo/" + repositorio[0].nome;

xhr.open('GET', url)


xhr.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        let dadosJSONText = xhr.responseText
        let dadosJSONObj = JSON.parse(dadosJSONText)
            
        bloco.innerHTML += 
        
            `<h1 `+dadosJSONObj.owner.login+`</h1>
            <p `+dadosJSONObj.id+`</p>
            <img src="images/1517425618266.jpg"></img></p>
            <a href="`+dadosJSONObj.following_url+`">seguidores</a>
            <p>Descrição do Repositório: `+dadosJSONObj.description+`</p>
            <a href="`+dadosJSONObj.collaborators_url+`">Colaboradores</a>
            <a href="`+dadosJSONObj.branches_url+`">Branchs</a>
            <a href="`+dadosJSONObj.commits_url+`">Commits</a>
            <p href="`+dadosJSONObj.language+`</p>
            <iframe class="mdl-card__supporting-text scroll" style="height:170px"src="images/`+dadosJSONObj.language+`.txt"></iframe>
            <img src="images/`+dadosJSONObj.language +`.png"></img>`
            
    }
}
xhr.send();