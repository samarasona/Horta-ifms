var botaoCadastrar = document.querySelector("#cadastrar-gleba");
botaoCadastrar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-cadastrar");

    var gleba = obtemGlebaDoFormulario(form);

    var glebaTr = montaTr(gleba);

    var tabela = document.querySelector("#cadastrar gleba");

    tabela.appendChild(glebaTr);

    form.reset();
});
function obtemGlebaDoFormulario(form) {

    var gleba = {
        gleba: form.gleba.value,
        nomeDoProjeto: form.nomeDoProjeto.value,
      dataInício: form.dataInício.value,
      dataFinal: form.dataFinal.value,
        docentes: form.docentes.value,
        dicentes: form.dicentes.value,
        técnicos: form.técnicos.value,
        recursos: form.recursos.value,

    }

    return gleba;
}

function montaTr(gleba) {
    var glebaTr = document.createElement("tr");
    glebaTr.classList.add("gleba");

    glebaTr.appendChild(montaTd(gleba.gleba, "info-gleba"));
    glebaTr.appendChild(montaTd(gleba.nomeDoProjeto, "info-nomeDoProjeto"));
    glebaTr.appendChild(montaTd(gleba.dataInício, "info-dataInício"));
    glebaTr.appendChild(montaTd(gleba.dataFinal, "info-dataFinal"));
    glebaTr.appendChild(montaTd(gleba.docentes, "info-docentes"));
    glebaTr.appendChild(montaTd(gleba.dicentes, "info-dicentes"));
    glebaTr.appendChild(montaTd(gleba.técnicos, "info-técnicos"));
    glebaTr.appendChild(montaTd(gleba.recursos, "info-recursos"));
    return glebaTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
