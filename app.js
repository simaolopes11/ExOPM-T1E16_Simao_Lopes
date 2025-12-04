let mescerto = Math.random() * 10 + 1
mescerto = Math.floor(mescerto)

let adivinhar = prompt("Adivinha o mês que estou a pensar:")


console.log("Mês da sorte: " + mescerto, "Mês visitante:" + adivinhar)


let adivinhou = false

while (!adivinhou) {

    if (adivinhar === "janeiro" || adivinhar === "Janeiro" || adivinhar === "JANEIRO") {
        adivinhar = 1
    } else if (adivinhar === "fevereiro" || adivinhar === "Fevereiro" || adivinhar === "FEVEREIRO") {
        adivinhar = 2
    } else if (adivinhar === "março" || adivinhar === "Março" || adivinhar === "MARÇO") {
        adivinhar = 3
    } else if (adivinhar === "abril" || adivinhar === "Abril" || adivinhar === "ABRIL") {
        adivinhar = 4
    } else if (adivinhar === "maio" || adivinhar === "Maio" || adivinhar === "MAIO") {
        adivinhar = 5
    } else if (adivinhar === "junho" || adivinhar === "Junho" || adivinhar === "JUNHO") {
        adivinhar = 6
    } else if (adivinhar === "julho" || adivinhar === "Julho" || adivinhar === "JULHO") {
        adivinhar = 7
    } else if (adivinhar === "agosto" || adivinhar === "Agosto" || adivinhar === "AGOSTO") {
        adivinhar = 8
    } else if (adivinhar === "setembro" || adivinhar === "Setembro" || adivinhar === "SETEMBRO") {
        adivinhar = 9
    } else if (adivinhar === "outubro" || adivinhar === "Outubro" || adivinhar === "OUTUBRO") {
        adivinhar = 10
    } else if (adivinhar === "novembro" || adivinhar === "Novembro" || adivinhar === "NOVEMBRO") {
        adivinhar = 11
    } else if (adivinhar === "dezembro" || adivinhar === "Dezembro" || adivinhar === "DEZEMBRO") {
        adivinhar = 12
    }


    if (2 == adivinhar) {
        alert("Certo!!!")
        console.log(mescerto, adivinhar)
        adivinhou = true
    } else if (mescerto > adivinhar && mescerto - adivinhar <= 2 || mescerto < adivinhar && adivinhar - mescerto <= 2) {
        alert("Quase lá!!!")
        adivinhar = prompt("Adivinha o mês que estou a pensar:")

        console.log(mescerto, adivinhar)
    } else if (mescerto > adivinhar) {
        alert("Muito abaixo!!!")
        adivinhar = prompt("Adivinha o mês que estou a pensar:")

    } else if (mescerto < adivinhar) {
        alert("Muito acima!!!")
        adivinhar = prompt("Adivinha o mês que estou a pensar:")
    }
}




