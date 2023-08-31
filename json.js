const js = require('fs');

let json = js.readFileSync('./data/JsonHorario.json');
//console.log(data);

let horario = JSON.parse(json);
//console.log(horario[0]['Table 1'][0].HORA);
let texto = JSON.stringify(horario);

//corte = texto.split('"HORA":"7:00 a 7:50"');
//console.log(texto.split('"HORA":"7:00 a 7:50"'));
//console.log('lo cortado es: ' + corte);
//console.log(texto.replace('', ''));

const regex = /,"MARTES+[^}]+"MIERCOLES+[^}]+"JUEVES+[^}]+"VIERNES+[^}]+/g;
texto = texto.replace(regex, '');
//console.log(texto);
//renplace con expresion regular
materia = texto.split('Prof.');
materia = JSON.parse(materia);
//console.log(materia);
//texto = texto.split('A-');

//let posicion = users.findIndex(inde => index.
//const materia = Object.values(json)[1];
for (i = 0; i < materia.length; i++) {
  for (j = 0; j < materia[i]['Table 1'].length; j++) {
    console.log('HORA:' + materia[i]['Table 1'][j].HORA);
    console.log('LUNES:' + materia[i]['Table 1'][j].LUNES);
    console.log('MARTES:' + materia[i]['Table 1'][j].MARTES);
    console.log('MIERCOLES:' + materia[i]['Table 1'][j].MIERCOLES);
    console.log('JUEVES:' + materia[i]['Table 1'][j].JUEVES);
    console.log('VIERNES:' + materia[i]['Table 1'][j].VIERNES);
  }
  console.log('SALIO');
  //if (i == 0) {
  //console.log('LISTA:' + materia[i]);
  //}
}

//console.log(materia);
//let browserType = 'mozilla';
//browserType.length;
//TIPICO LENGHT DE LA CADENA
//browserType.indexOf("zilla");
//BUSCAR UNA SUBCADENADA EN UNA CADENA
//if (texto.indexOf('HORA') !== -1) {
// do stuff with the string
//AQUI QUIZAS HACER
//console.log(texto.indexOf('zilla'));
//}

//browserType[browserType.length - 1];
//ULTIMO CARARTER DE CADENA

const archivo = js.createWriteStream('./data/JsonHorarioModificado.json');
archivo.write(texto + '');
archivo.end();

js.WriteStream('./data/JsonHorarioModificado.json');
