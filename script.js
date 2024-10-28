var dates = {
  id: 88,
  codigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
  sistema: "QUER",
  codigoSingular: "0032",
  emailCliente: "af@e.com",
  nomeCliente: "Guilherme meneses",
  idPessoa: "43ZIf0s9l2siHvlI8lN1",
  nomeColaborador: "Guilherme",
  situacao: "EM_ATENDIMENTO",
  assunto: "Alimentação",
  tsConclusao: null,
  tsCriacao: "2019-10-15T17:10:27Z",
  listConversa: [
    {
      id: 232,
      chatCodigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
      nome: "Guilherme meneses",
      email: "af@e.com",
      mensagem: "Alimentação",
      tsCriacao: "2019-10-15T17:10:27Z",
      origem: "CLIENTE",
      idColaborador: null,
      nomeColaborador: null,
    },
    {
      id: 233,
      chatCodigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
      nome: "Guilherme",
      email: "guilherme.machado@univision.net.br",
      mensagem: "Olá como posso ajuda?",
      tsCriacao: "2019-10-15T17:12:06Z",
      origem: "COLABORADOR",
      idColaborador: 38,
      nomeColaborador: "Guilherme",
    },
    {
      id: 234,
      chatCodigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
      nome: "Guilherme meneses",
      email: "af@e.com",
      mensagem: "Quais cuidados devo ter com a alimentação? ",
      tsCriacao: "2019-10-15T17:12:22Z",
      origem: "CLIENTE",
      idColaborador: null,
      nomeColaborador: null,
    },
    {
      id: 235,
      chatCodigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
      nome: "Guilherme",
      email: "guilherme.machado@univision.net.br",
      mensagem:
        "The Ionic CLI can build, copy, and deploy Ionic apps to Android simulators and devices with a single command. It can also spin up a development server, like the one used in ionic serve, to provide live-reload functionality.",
      tsCriacao: "2019-10-15T17:22:17Z",
      origem: "COLABORADOR",
      idColaborador: 38,
      nomeColaborador: "Guilherme",
    },
    {
      id: 236,
      chatCodigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
      nome: "Guilherme meneses",
      email: "af@e.com",
      mensagem: "Teste com um cuidador ",
      tsCriacao: "2019-10-15T17:23:19Z",
      origem: "CLIENTE",
      idColaborador: null,
      nomeColaborador: null,
    },
    {
      id: 237,
      chatCodigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
      nome: "Guilherme",
      email: "guilherme.machado@univision.net.br",
      mensagem:
        "DevApp offers a realtime view of changes as they're being made, with a rich library of pre-installed native plugins to test native features of the app.\n",
      tsCriacao: "2019-10-15T17:23:46Z",
      origem: "COLABORADOR",
      idColaborador: 38,
      nomeColaborador: "Guilherme",
    },
    {
      id: 238,
      chatCodigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
      nome: "Guilherme",
      email: "guilherme.machado@univision.net.br",
      mensagem:
        "When testing an application, it is best to keep in mind that testing can show if defects are present in a system. However, it is impossible to prove that any non-trivial system is",
      tsCriacao: "2019-10-15T17:24:27Z",
      origem: "COLABORADOR",
      idColaborador: 38,
      nomeColaborador: "Guilherme",
    },
    {
      id: 240,
      chatCodigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
      nome: "Guilherme meneses",
      email: "af@e.com",
      mensagem:
        "esse componente de card ja ta pronto, só colocar os inputs na tela, criar o redux e o saga e chamar a api",
      tsCriacao: "2019-10-15T17:30:16Z",
      origem: "CLIENTE",
      idColaborador: null,
      nomeColaborador: null,
    },
    {
      id: 241,
      chatCodigo: "9f98675a-bf9e-43b2-9a6d-9412bf63d406",
      nome: "Guilherme meneses",
      email: "af@e.com",
      mensagem: "dia 16 ",
      tsCriacao: "2019-10-16T14:47:29Z",
      origem: "CLIENTE",
      idColaborador: null,
      nomeColaborador: null,
    },
  ],
}

function getDateKey(date) {
  const d = new Date(date.tsCriacao).getDate()
  const getMonth = new Date(date.tsCriacao).getMonth();
  
  const m = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  return (
    m[getMonth] + " " + ((d < 10 ? "0" : "") + d)
  )
}

const obj = dates.listConversa
  .reduce(
    function (acc, d) {
      var p = getDateKey(d)
      if (!acc[0].hasOwnProperty(p)) acc[0][p] = []
      acc[0][p].push(d)
      return acc
    },
    [{}],
  )
  .reduce(function (acc, v) {
    Object.keys(v).forEach(function (k) {
      acc.push({
        day: k,
        times: v[k],
      })
    })
    return acc
  }, []);

const list = document.body;

obj.map((item) => {
  const itemDom = document.createElement("li");
  itemDom.innerText = item.day;
  item.times.map((time) => {
    const internalItemDom = document.createElement("ul");
		internalItemDom.innerText = `${time.origem} - ${time.mensagem} - ${time.tsCriacao}`;
  	itemDom.appendChild(internalItemDom);
  });
  list.appendChild(itemDom);
});

