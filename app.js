let mescerto = Math.random() * 10 + 1
mescerto = Math.floor(mescerto)

let adivinhar = prompt("Adivinha o mês que estou a pensar:")


console.log("Mês da sorte: " + mescerto, "Mês visitante:" + adivinhar)


let adivinhou = false

while (!adivinhou) {

    if (adivinhar = "janeiro" || "Janeiro" || "JANEIRO") {
        adivinhar = 1
    } else if (adivinhar = "fevereiro" || "Fevereiro" || "FEVEREIRO") {
        adivinhar = 2
    } else if (adivinhar = "março" || "Março" || "MARÇO") {
        adivinhar = 3
    } else if (adivinhar = "abril" || "Abril" || "ABRIL") {
        adivinhar = 4
    } else if (adivinhar = "maio" || "Maio" || "MAIO") {
        adivinhar = 5
    } else if (adivinhar = "junho" || "Junho" || "JUNHO") {
        adivinhar = 6
    } else if (adivinhar = "julho" || "Julho" || "JULHO") {
        adivinhar = 7
    } else if (adivinhar = "agosto" || "Agosto" || "AGOSTO") {
        adivinhar = 8
    } else if (adivinhar = "setembro" || "Setembro" || "SETEMBRO") {
        adivinhar = 9
    } else if (adivinhar = "outubro" || "Outubro" || "OUTUBRO") {
        adivinhar = 10
    } else if (adivinhar = "novembro" || "Novembro" || "NOVEMBRO") {
        adivinhar = 11
    } else if (adivinhar = "dezembro" || "Dezembro" || "DEZEMBRO") {
        adivinhar = 12
    }

    console.log(adivinhar)

    if (mescerto === adivinhar) {
        alert("Certo!!!")
        adivinhou = true
    } else if (mescerto > adivinhar && mescerto - adivinhar <= 2 || mescerto < adivinhar && adivinhar - mescerto <= 2) {
        alert("Quase lá!!!")
        adivinhar = prompt("Adivinha o mês que estou a pensar:")
        adivinhar = Math.floor(Number(adivinhar))
    } else if (mescerto > adivinhar) {
        alert("Muito abaixo!!!")
        adivinhar = prompt("Adivinha o mês que estou a pensar:")
        adivinhar = Math.floor(Number(adivinhar))
    } else if (mescerto < adivinhar) {
        alert("Muito acima!!!")
        adivinhar = prompt("Adivinha o mês que estou a pensar:")
        adivinhar = Math.floor(Number(adivinhar))
    }
}



