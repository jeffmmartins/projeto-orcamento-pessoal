class Despesa {
  constructor(ano, mes, dia, tipo, descricao, valor) {
    this.ano = ano;
    this.mes = mes;
    this.dia = dia;
    this.tipo = tipo;
    this.descriçao = descricao;
    this.valor = valor;
  }
}

class Bd {

  constructor () {
    let id = localStorage.getItem("id")

    if(id === null) {
      localStorage.setItem("id",0)
    } 
  }

  getProximoId() { 
    let proximoId = localStorage.getItem("id") // serve para recuperar o dado, nesse caso o retorno seria null
    console.log(proximoId)
  }

  // class recebe um metodo gravar
  gravar(d) {
  //localStorage.setItem("despesa", JSON.stringify(d));
  this.getProximoId
  };
}

let bd = new Bd()


function cadastrarDespesa() {
  let ano = document.getElementById("ano");
  let mes = document.getElementById("mes");
  let dia = document.getElementById("dia");
  let tipo = document.getElementById("tipo");
  let descricao = document.getElementById("descricao");
  let valor = document.getElementById("valor");

  let despesa = new Despesa(
    ano.value,
    mes.value,
    dia.value,
    tipo.value,
    descricao.value,
    valor.value
  );
  bd.gravar(despesa);  // chamando o obhjeto bd e na sequencia executando o metodo gravar 
}


