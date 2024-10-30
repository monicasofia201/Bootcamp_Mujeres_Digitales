// MENSAJE ENCRIPTADO: ^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~

/*
PISTAS:
1. El mensaje está en ESPAÑOL
2. NO HAY DIFERENCIA ENTRE entre mayúsculas y minúsculas
3. g,k,w,x las únicas letras que NO SE ENCUENTRAN en el mensaje
4. las vocales están representadas de la siguiente manera: 

a  ?,
e  [,
i  \,
o  ~,
u  +,

5. Los espacios están representados de la siguiente manera: ()
6. Solo hay una letra con acento (tílde)
7. la primera letra del código de encriptación es la M

*/ 

// SE DEFINEN LOS CARACTERES 
const caracteres = {

    // VOCALES
    '?': 'a',
    '[': 'e',
    '\\': 'i',
    '~': 'o',
    '+': 'u',

    //EXCEPCIÓN-TÍLDE
    '¬': 'ó',

    //DEDUCCIÓN
    ']': 'n',
    '=': 't',
    '¿': 'y',
    '{': 's',

    //COMPLEMENTO
    '^': 'm',
    '*': 'p',
    '#': 'v',
    '$': 'r',
    '`': 'c',
    '}': 'q',
    '!': 'j',
    ';': 'f',
    '/': 'l',
    '%': 'b',
    '¡': 'd',
    '-': 'h',
    '__': 'z',

};

function desincriptar(mensaje) {
    //1. ESPACIADO ()
    mensaje = mensaje.replace(/\(\)/g, ' '); 

    let mensajeDesincriptado = ''; // Inicializa 

    for (let char of mensaje) {
        
        mensajeDesincriptado += caracteres[char] || char;
    }

    return mensajeDesincriptado; 
}

const mensajeEncriptado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";

const mensajeDesincriptado = desincriptar(mensajeEncriptado);

console.log("Mensaje desincriptado:", mensajeDesincriptado);

//ARREGLO
const palabras = mensajeDesincriptado.split(' ').filter(Boolean); // Divide el mensaje en palabras y elimina vacíos
// formato
console.log("\nArreglo de palabras:");
console.log("[");
for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i].padEnd(10, ' '); // mismo espacio

    if (i % 2 === 0) {
        process.stdout.write(`    '${palabra}', `);
    } else {
        console.log(`'${palabra}',`);
    }
}
console.log("]"); 
