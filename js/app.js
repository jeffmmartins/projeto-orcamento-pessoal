class Despesa {
  constructor(ano, mes, dia, tipo, descricao, valor) {
    this.ano = ano;
    this.mes = mes;
    this.dia = dia;
    this.tipo = tipo;
    this.descriçao = descricao;
    this.valor = valor;
  }

  validarDados() {
    for (let i in this) {
      if (this[i] == undefined || this[i] == "null" || this[i] == "") {
        return false;
      }
    }
    return true;
  }
}

class Bd {
  constructor() {
    let id = localStorage.getItem("id");

    if (id === null) {
      localStorage.setItem("id", 0);
    }
  }

  getProximoId() {
    let proximoId = localStorage.getItem("id");
    return parseInt(proximoId) + 1;
  }

  gravar(d) {
    let id = this.getProximoId();
    localStorage.setItem(id, JSON.stringify(d));
    localStorage.setItem("id", id);
  }

  recuperarTodosRegistros() {
    let id = localStorage.getItem("id");

    //array de despesa
    let despesas = Array()

    // Recuperar todas as despesas cadastradas em localStorage
    for (let i = 1; i <= id; i++) {
      let despesa = JSON.parse(localStorage.getItem(i))

      //verificar a possibilidades de haver indices que foram removidos 
      if (despesa === null) {
        continue
      }

      despesas.push(despesa)
    }
    return despesas
  }
}

let bd = new Bd();

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

  // falta fazer o modal
  if (despesa.validarDados()) {
    bd.gravar(despesa); // chamando o obhjeto bd e na sequencia executando o metodo gravar
    alert("Registro cadastrado com sucesso");
  } else {
    alert("Erro");
  }
}

const carregarListaDespesa = () => {
  //let despesas = Array()
  despesas = bd.recuperarTodosRegistros();
  console.log(despesas)
};
