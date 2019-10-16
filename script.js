// message mock
var dates = [
    {
       "id":88,
       "listConversa":[
          {
             "id":232,
             "chatCodigo":"9f98675a-bf9e-43b2-9a6d-9412bf63d406",
             "nome":"Afonso Henrique Ferreira Cunha",
             "email":"af@e.com",
             "mensagem":"Alimentação",
             "tsCriacao":"2019-10-14T17:10:27Z",
             "origem":"CLIENTE",
             "idColaborador":null,
             "nomeColaborador":null
          },
          {
             "id":233,
             "chatCodigo":"9f98675a-bf9e-43b2-9a6d-9412bf63d406",
             "nome":"Guilherme",
             "email":"guilherme.machado@univision.net.br",
             "mensagem":"Olá como posso ajuda?",
             "tsCriacao":"2019-10-15T17:12:06Z",
             "origem":"COLABORADOR",
             "idColaborador":38,
             "nomeColaborador":"Guilherme"
          },
       ]
    }
  ];
  
  // Generate a dates array given a start date and how many to create:
  function genDates(startDate, count) {
    var d = new Date(startDate)
        dates = [d];
    for (var i=0; i<count; i++) {
      d = new Date(+d);
      d.setHours(d.getHours() + 10);
      dates.push(d);
    }
    return dates;
  }


  var generatedData = genDates(dates[0].listConversa[0].tsCriacao, dates[0].listConversa.length)
  // Generate date key 'MMM dd'
  // Replaces use of moment.js
  function getDateKey(date) {
    var d = date.getDate();
    var m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return m[date.getMonth()] + ' ' + ((d<10?'0':'') + d);
  }
  
  // Generate an array in format [{day:'MMM dd', times:[d0, d1, ...]}, ...]
  // Replaces use of underscore.js
  var obj = dates.reduce(function(acc, d) {
              var p = getDateKey(d)
              if (!acc[0].hasOwnProperty(p)) acc[0][p] = [];
              acc[0][p].push(d);
              return acc;
            },[{}])
            .reduce(function(acc, v){
              Object.keys(v).forEach(function(k){
                acc.push({
                  day:k,
                  times:v[k]
                })
              });
              return acc;
            },[]);
  
console.warn('obj =>');
console.table(obj);
console.warn('generatedData =>');
console.table(generatedData);