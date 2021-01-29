let xhr = new XMLHttpRequest()

        let bloco = document.querySelector("div")

        let url = "https://api.github.com/users/ferraz-marcelo/repos";

        xhr.open('GET', url)

        xhr.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                let dadosJSONText = xhr.responseText
                let dadosJSONObj = JSON.parse(dadosJSONText)
                for (let i = 0; i < dadosJSONObj.length; i++) {
                    bloco.innerHTML +=
                  
                    `<div class="demo-card-wide mdl-card mdl-shadow--2dp">
                    <h2>${dadosJSONObj[i].name}</h2>
                    <img style="width:435px; height:200px" src="images/${dadosJSONObj[i].language}.png">
                    <button onclick="openurl('${dadosJSONObj[i].clone_url}')">link</button>
                    <button onclick="clone('git clone ${dadosJSONObj[i].html_url}')">Clone</button>
                    <button id="${dadosJSONObj[i].name}" onclick="abrirsobre(this)">Mais Informações</button>
                    </div>`
                  
                }
            }
        }
        xhr.send();

        function openurl(url) {
            window.open(url)
        }

        function clone(url) {
            const input = document.createElement("input");
            input.value = url;
            input.id = "input";
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            input.remove();

        }     

        function abrirsobre(sobre){
             let arr = []

             arr.push({nome: sobre.id})
             let arrJson = JSON.stringify(arr)

             localStorage.repositorio = arrJson

             window.location.href = "info.html"
        } 