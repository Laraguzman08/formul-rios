document.getElementById("formAdocao").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pets = document.querySelector('input[name="pets"]:checked');
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").checked;

    if(nome.length < 3) return alert("Nome inválido!");
    if(!email.includes("@")) return alert("Email inválido!");
    if(telefone.length < 8) return alert("Telefone inválido!");
    if(cpf === "") return alert("É obrigatório informar o CPF!");
    if(idade < 18) return alert("É preciso ter 18 ou mais para adotar!");
    if(cidade === "") return alert("É obrigatório informar a cidade!");
    if(moradia === "") return alert("Selecione uma moradia!");
    if(!quintal) return alert("É obrigatório informar se possui quintal!");
    if(!pets) return alert("É obrigatório informar se já teve pets!");
    if(horas === "" || isNaN(horas)) return alert("Informe um número válido de horas!");
    if(motivo.length < 10) return alert("Mínimo de 10 caracteres!");
    if(!termo) return alert("Você deve marcar aceitando os termos de responsábilidade!");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: "
})

