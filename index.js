let produtos= {
    tipo:'',
    metro,
    lar,
    alt,
    quant:0,
    soma:0,
    total:0,
    valorUnit:0,
}


var listasRegistros = {
    materials:[
        {tipo:'',quant:0,lar,alt,metro,soma:0},  
    ]  

}

document.getElementById("tota").innerHTML=( String(produtos.total))
document.getElementById("valor-unit").innerHTML=( String(produtos.valorUnit))

var seletor = document.querySelector('#material');

function tipoProduto(){
    

    if (seletor.options[seletor.selectedIndex].text == 'BANNER/LONA'){
        produtos.tipo = 'BANNER/LONA';
        produtos.metro = 39.00;
        largura();
        document.getElementById('metro').innerHTML = String(produtos.metro);
        document.getElementById('lar').readOnly = false;
     
    }else if(seletor.options[seletor.selectedIndex].text == 'ADESIVO'){  
        produtos.tipo = 'ADESIVO';
        produtos.metro = 33.00;
        largura();   
        document.getElementById('metro').innerHTML = String(produtos.metro);
        document.getElementById('lar').readOnly = false;

    }else if(seletor.options[seletor.selectedIndex].text == 'SUBLIMAÇÃO'){ 
        produtos.tipo = 'SUBLIMAÇÃO';
        produtos.metro = 7.00;
        produtos.lar = 1;
        document.getElementById('metro').innerHTML = String(produtos.metro);
        document.getElementById('lar').readOnly = true
        document.getElementById('lar').value = "0,9"
           
    }else if(seletor.options[seletor.selectedIndex].text == 'ADESIVO PERFURADO'){
        produtos.tipo = 'ADS PERFURADO';
        produtos.metro = 60.00;
        produtos.lar = 1.35;
        document.getElementById('metro').innerHTML = String(produtos.metro);
        document.getElementById('lar').readOnly = true
        document.getElementById('lar').value = "1,35";

    }
    
}
function limparInput(){

    var form = document.getElementById("produtos")
    var inputs = form.querySelectorAll("input");
    for(var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    }
    document.getElementById("valor-unit").innerHTML=( String(''))
    document.getElementById("valor-total").innerHTML=( String(''))
}

function largura(){

    produtos.lar = Number(document.getElementById('lar').value.replace(",","."));

} 



function calculo(){
 
    produtos.alt = Number(document.getElementById('alt').value.replace(",","."))
    produtos.quant = document.getElementById('und').value
    produtos.soma = Math.ceil(produtos.lar * produtos.alt *produtos.metro)* produtos.quant;
    produtos.valorUnit = Math.ceil( produtos.soma/ produtos.quant); 

    document.getElementById("valor-unit").innerHTML=( String(produtos.valorUnit))
    document.getElementById("valor-total").innerHTML=( String( produtos.soma))
    
}

function add(tipo,quant,lar,alt,metro,soma, valorunit){
    listasRegistros.materials.push({
        tipo,quant,lar,alt,metro,soma,valorunit
    })
    
}

function desenhar(){

    
    add(produtos.tipo ,  produtos.quant ,produtos.lar ,produtos.alt , produtos.metro , produtos.soma, produtos.valorUnit);
    const tbody = document.getElementById('listaRegistro')
    naoPrintaPrimeiro = 0;
    produtos.total += produtos.soma
    if(tbody){
        tbody.innerHTML =listasRegistros.materials.map(material=>{
            if (naoPrintaPrimeiro > 0) {    
            
            document.getElementById("tota").innerHTML=( 'R$ ' + String(produtos.total)+ ',00');
            document.getElementById("tota1").innerHTML=('VALOR TOTAL: '+ 'R$ ' + String(produtos.total)+ ',00');
            return ` <tr>
            <td>${material.tipo}</td>
            <td>${material.quant}</td>
            <td>${material.lar}</td>
            <td>${material.alt}</td>
            <td>${material.metro}</td>
            <td>${material.valorunit}</td>
            <td>${material.soma}</td>
            </tr>`
            }    
            naoPrintaPrimeiro++;
               
        } ) .join('')
    }

    limparInput();

}
let botaovisivel = true
function desabilitar(){
    let botao = document.getElementById("butao");
    let botao1 =document.getElementById("butao1");
    if(botaovisivel){
        botao.style.display = 'none'
        botao1.style.display = 'none'
        botaovisivel = false
        document.getElementById('imprimir').innerHTML = ('ATIVAR')
    }else{
        botaovisivel = true
        botao.style.display = 'block'
        botao1.style.display = 'block'
        document.getElementById('imprimir').innerHTML = ('DESATIVAR')
    }

}

     


