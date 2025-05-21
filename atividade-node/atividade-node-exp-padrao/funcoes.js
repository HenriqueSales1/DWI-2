function f1(){
    console.log("Olá");
}

const f2 = function(){
    console.log("Olá");
}

const f3 = () => {
    console.log("Olá");
}

const f4 = () => {
    const obj = {
        nome: "Henrique",
        idade: 21,
        cidade: "Guanhães",
        estado: "MG",
    };
    const {nome, estado} = obj;
    console.log(nome, estado);
}
/*
module.exports = {
    f1,
    f2,
    f3,
    f4
};
*/

export {
    f1,
    f2,
    f3,
    f4
};