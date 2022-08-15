let pescadores = [
    {
        nome: 'Bruno', 
        totalCompras: 364,
        totalPescador: 0,
        totalApagar: 0,
        totalAReceber: 0,
        chavePix: '',
        cpf: '',
    },
    {
        nome: 'Felipe', 
        totalCompras: 138,
        totalPescador: 0,
        totalApagar: 0,
        totalAReceber: 0,
        chavePix: '',
        cpf: '',
    },
    {
        nome: 'Carlao',
        totalCompras: 0,
        totalPescador: 0,
        totalApagar: 0,
        totalAReceber: 0,
        chavePix: '',
        cpf: '',
    },
    {
        nome: 'Fernando',
        totalCompras: 60,
        totalPescador: 0,
        totalApagar: 0,
        totalAReceber: 0,
        chavePix: '',
        cpf: '',
    }

]

const todasCompras = pescadores.map((item)=>{
    return item.totalCompras
})


const totalDeGastos = todasCompras.reduce((total, compras) => total + compras, 0)

const totalDePEscadores = pescadores.length
const valorAPagarPorPescador = totalDeGastos/totalDePEscadores

function preencherTotalPorPescador(totalPorPescador, numeroPescadores){
    for (let i = 0; i < numeroPescadores; i++){
        pescadores[i].totalPescador = totalPorPescador
    }
}

function preencherTotalAPagar(numeroPescadores){
    for (let i = 0; i < numeroPescadores; i++){
        if(pescadores[i].totalCompras <= pescadores[i].totalPescador){
            pescadores[i].totalApagar =  pescadores[i].totalPescador - pescadores[i].totalCompras
        }
        
    }
}

function preencherTotalAReceberporPescador(numeroPescadores){
    
    for (let i = 0; i < numeroPescadores; i++){
        const saldoAReceber =  pescadores[i].totalCompras - pescadores[i].totalPescador
        if(pescadores[i].totalCompras > 0 && pescadores[i].totalCompras > pescadores[i].totalApagar && saldoAReceber > 0){
            pescadores[i].totalAReceber = pescadores[i].totalCompras - pescadores[i].totalPescador
        }
       
    }
}

preencherTotalPorPescador(valorAPagarPorPescador, totalDePEscadores)
preencherTotalAPagar(totalDePEscadores)
preencherTotalAReceberporPescador(totalDePEscadores)

console.log(`Quantidade de Pescadores: ${totalDePEscadores}`)
console.log(`Totalde gastos: ${totalDeGastos}`)
console.log(`Valor para cada pescador: ${valorAPagarPorPescador.toFixed(2)}`)

console.log(pescadores)
 //enviando arquivo
 