const tarefa = document.querySelector(".barra");
const btn = document.querySelector(".btn");
const lista = document.querySelector(".lista");

// Evento para adicionar tarefa
btn.addEventListener("click", function () {
    if (tarefa.value.trim() === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    // Cria dinamicamente um item de lista
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    novoItem.innerHTML = `
        <img src="./imagens/marca-de-verificacao.png" alt="verifica" class="icone verifica"> 
        <p class="tarefa">${tarefa.value}</p> 
        <img src="./imagens/lixeira-de-reciclagem.png" alt="lixeira" class="icone lixeira">
    `;

    // Adiciona o novo item à lista
    lista.appendChild(novoItem);

    // Limpa o campo de entrada
    tarefa.value = "";
});

// Evento para interagir com os itens da lista
lista.addEventListener("click", function (e) {
    const target = e.target;

    // Marca a tarefa como concluída
    if (target.classList.contains("verifica")) {
        const tarefaTexto = target.parentElement.querySelector(".tarefa");
        tarefaTexto.style.textDecoration = "line-through";
        tarefaTexto.style.color = "#349223"; // Opcional: muda a cor do texto
    }

    // Remove a tarefa
    if (target.classList.contains("lixeira")) {
        const itemParaRemover = target.closest(".item"); // Seleciona o elemento pai mais próximo com classe "item"
        itemParaRemover.remove();
    }
});
   