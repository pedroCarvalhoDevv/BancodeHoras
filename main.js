// Get the file input element
const fileInput = document.getElementById('file-input');
const funcionarios = []

function limpar() {
    location.reload()
}

function getPeriodo(text) {
    var periodo = ""

    for (let x = 0; x < text.length; x++) {

        if (text[x] + text[x + 1] + text[x + 2] + text[x + 3] + text[x + 4] + text[x + 5] + text[x + 6] + text[x + 7] + text[x + 8] == "Período :") {
            var indicePeriodo = x + 9

            for (let p = 0; p < text.length; p++) {
                if (text[indicePeriodo + p] + text[indicePeriodo + p + 1] + text[indicePeriodo + p + 2] + text[indicePeriodo + p + 3] + text[indicePeriodo + p + 4] + text[indicePeriodo + p + 5] + text[indicePeriodo + p + 6] + text[indicePeriodo + p + 7] + text[indicePeriodo + p + 8] + text[indicePeriodo + p + 9] == "Centro  Ad") {
                    var retorno = periodo.split("a")
                    return retorno[0] + "|" + retorno[1]
                }

                periodo += text[indicePeriodo + p]
            }
        }
    }
}

function getTribo(text) {
    return "Comercial"
}

function getSquad(text) {
    var squad = ""

    for (let x = 0; x < text.length; x++) {
        if (text[x] + text[x + 1] + text[x + 2] + text[x + 3] + text[x + 4] == "CTPS:") {
            var indiceSquad = x + 5

            for (let t = 0; t < text.length; t++) {
                if (text[indiceSquad + t] + text[indiceSquad + t + 1] + text[indiceSquad + t + 2] + text[indiceSquad + t + 3] + text[indiceSquad + t + 4] + text[indiceSquad + t + 5] + text[indiceSquad + t + 6] + text[indiceSquad + t + 7] == "Data Adm") {
                    var retorno = squad.split(" ")
                    return retorno[1]
                }
                squad += text[indiceSquad + t]

            }
        }
    }
}

function getMatri(text) {
    var matricula = ""

    for (let x = 0; x < text.length; x++) {
        if (text[x] + text[x + 1] + text[x + 2] + text[x + 3] + text[x + 4] + text[x + 5] == "Setor:") {
            var indiceMatri = x + 7

            for (let s = 0; s < text.length; s++) {
                if (text[indiceMatri + s] == " ") {
                    var retorno = parseInt(matricula, 10)
                    return retorno
                }

                matricula += text[indiceMatri + s]
            }
        }
    }
}

function getNome(text) {

    var nome = ""

    for (let x = 0; x < text.length; x++) {
        if (text[x] + text[x + 1] + text[x + 2] + text[x + 3] + text[x + 4] + text[x + 5] == "Setor:") {
            var indiceNome = x + 15

            for (let n = 0; n < text.length; n++) {
                if (text[indiceNome + n] + text[indiceNome + n + 1] + text[indiceNome + n + 2] + text[indiceNome + n + 3] == "CTPS") {
                    return nome
                }
                nome += text[indiceNome + n]
            }
        }
    }
}

function getCargo(text) {
    var cargo = ""

    for (let x = 0; x < text.length; x++) {
        if (text[x] + text[x + 1] + text[x + 2] + text[x + 3] + text[x + 4] + text[x + 5] + text[x + 6] == "Filial:") {
            var indiceCargo = x + 7

            for (let c = 0; c < text.length; c++) {
                if (text[indiceCargo + c] + text[indiceCargo + c + 1] + text[indiceCargo + c + 2] + text[indiceCargo + c + 3] + text[indiceCargo + c + 4] + text[indiceCargo + c + 5] + text[indiceCargo + c + 6] + text[indiceCargo + c + 7] + text[indiceCargo + c + 8] + text[indiceCargo + c + 9] == "Empregado:") {
                    return cargo
                }
                cargo += text[indiceCargo + c]
            }
        }
    }
}

function getSaldoF(text) {
    var SaldoF = ""

    for (let x = 0; x < text.length; x++) {
        if (text[x] + text[x + 1] + text[x + 2] + text[x + 3] + text[x + 4] + text[x + 5] + text[x + 6] + text[x + 7] + text[x + 8] + text[x + 9] + text[x + 10] + text[x + 11] + text[x + 12] + text[x + 13] + text[x + 14] + text[x + 15] == "Banco de Horas: ") {
            var indicePeriodo = x + 16
            for (let s = 0; s < text.length; s++) {
                if (text[indicePeriodo + s] + text[indicePeriodo + s + 1] + text[indicePeriodo + s + 2] + text[indicePeriodo + s + 3] + text[indicePeriodo + s + 4] + text[indicePeriodo + s + 5] + text[indicePeriodo + s + 6] + text[indicePeriodo + s + 7] + text[indicePeriodo + s + 8] + text[indicePeriodo + s + 9] + text[indicePeriodo + s + 10] + text[indicePeriodo + s + 11] + text[indicePeriodo + s + 12] + text[indicePeriodo + s + 13] == "Saldo Negativo") {
                    var SaldoFSplit = SaldoF.split(" ")
                    for (let j = 0; j < SaldoFSplit.length; j++) {
                        if (SaldoFSplit[j].split(":").length - 1 > 1) {
                            let parts = SaldoFSplit[j].split("-");
                            let part1 = parts[0] + "-"
                            let part2 = parts[1] + "-";
                            SaldoFSplit.splice(j, 0, part1);
                            SaldoFSplit.splice(j + 1, 0, part2);
                            SaldoFSplit.splice(j + 3, 1);
                            j = SaldoFSplit.lenght
                        }

                    }
                    return SaldoFSplit[2]
                }
                SaldoF += text[indicePeriodo + s]
            }
        }
    }
}

function saldoToNumber(saldo) {
    const isNegativo = saldo.endsWith('-');
    const saldoAbsoluto = saldo.replace('-', '');
    const [horas, minutos] = saldoAbsoluto.split(':').map(Number);
    let saldoTotal = horas + (minutos / 60);
    saldoTotal = isNegativo ? -saldoTotal : saldoTotal;
    saldoTotal = Number(saldoTotal.toFixed(2));
    return saldoTotal;
}

function gerar() {
    // Ordena em ordem decrescente
    funcionarios.sort((a, b) => b.saldo - a.saldo);

    funcionarios.forEach(funcionario => {
        const tabela = document.getElementById("tabelaItens");
        const novaLinha = document.createElement("tr");
        const periodoT = document.createElement("td");
        const triboT = document.createElement("td");
        const squadT = document.createElement("td");
        const matriculaT = document.createElement("td");
        const nomeT = document.createElement("td");
        const cargoT = document.createElement("td");
        const saldoT = document.createElement("td");

        periodoT.textContent = funcionario.periodo
        triboT.textContent = funcionario.tribo
        squadT.textContent = funcionario.squad
        matriculaT.textContent = funcionario.matricula
        nomeT.textContent = funcionario.nome
        cargoT.textContent = funcionario.cargo
        saldoT.textContent = funcionario.saldo

        // Adiciona classe CSS com base no valor do saldo
        saldoT.classList.add(funcionario.saldo < 0 ? 'vermelho' : 'verde');

        novaLinha.appendChild(periodoT);
        novaLinha.appendChild(triboT);
        novaLinha.appendChild(squadT)
        novaLinha.appendChild(matriculaT);
        novaLinha.appendChild(nomeT);
        novaLinha.appendChild(cargoT);
        novaLinha.appendChild(saldoT);
        tabela.appendChild(novaLinha);
    })
}

fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        pdfjsLib.getDocument(reader.result).promise.then(pdf => {
            for (let i = 1; i <= pdf.numPages; i++) {
                pdf.getPage(i).then(page => {
                    page.getTextContent().then(textContent => {
                        const text = textContent.items.map(function (item) {
                            return item.str;
                        }).join('');

                        if (getSaldoF(text)[getSaldoF(text).length - 1] == "-") {
                            const saldo = getSaldoF(text);
                            const funcionario = {
                                periodo: getPeriodo(text),
                                tribo: getTribo(text),
                                squad: getSquad(text),
                                matricula: getMatri(text),
                                nome: getNome(text),
                                cargo: getCargo(text),
                                saldo: saldoToNumber(saldo)
                            };

                            funcionarios.push(funcionario);
                        } else {
                            const saldo = getSaldoF(text);
                            const funcionario = {
                                periodo: getPeriodo(text),
                                tribo: getTribo(text),
                                squad: getSquad(text),
                                matricula: getMatri(text),
                                nome: getNome(text),
                                cargo: getCargo(text),
                                saldo: saldoToNumber(saldo),
                            };

                            funcionarios.unshift(funcionario);
                        }
                    });
                });
            }
        });
    });

    reader.readAsDataURL(file);
});