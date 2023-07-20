function showHide(show, hide1, hide2, hide3, hide4, hide5, hide6, hide7, hide8, hide9, hide10, hide11, hide12, hide13, hide14) {
    var display = document.getElementById(show).style.display;

    if(display == 'none'){
        document.getElementById(show).style.display = 'block';

        //ocultar elemento atual
        document.getElementById(hide1).style.display = 'none';
        document.getElementById(hide2).style.display = 'none';
        document.getElementById(hide3).style.display = 'none';
        document.getElementById(hide4).style.display = 'none';
        document.getElementById(hide5).style.display = 'none';
        document.getElementById(hide6).style.display = 'none';
        document.getElementById(hide7).style.display = 'none';
        document.getElementById(hide8).style.display = 'none';
        document.getElementById(hide9).style.display = 'none';
        document.getElementById(hide10).style.display = 'none';
        document.getElementById(hide11).style.display = 'none';
        document.getElementById(hide12).style.display = 'none';
        document.getElementById(hide13).style.display = 'none';
        document.getElementById(hide14).style.display = 'none';
    } else {
        document.getElementById(show).style.display = 'none';
    }
}

function vidaAcademica(){
    const btnACAD = document.getElementById('matriz');
    btn_value = btnACAD.getAttribute("src");

    switch (btn_value) {

        case "imgs/Grade.png":
            btnACAD.setAttribute("src", "imgs/Cancel.gif");
            btnACAD.setAttribute("style", "width: 23px");
            document.getElementById('dados-gerais').style.display = 'none';
            document.getElementById('dados-filtro').style.display = 'block';
            break;

        case "imgs/Cancel.gif":
            btnACAD.setAttribute("src", "imgs/Grade.png");
            btnACAD.setAttribute("style", "width: 30px");
            document.getElementById('dados-gerais').style.display = 'block';
            document.getElementById('dados-filtro').style.display = 'none';
            break;
    }
}
function acionarDadosFiltrados(){
    document.getElementById('dados-filtro').style.overflowX = 'scroll';
    document.getElementById('dados-filtrados').style.display = 'block';
}


function boletim(){
    function mostrarFrameBoletim(show, hide, hide2) {
        document.getElementById(show).style.display = 'block';
        document.getElementById(hide).style.display = 'none';
        document.getElementById(hide2).style.display = 'none';
    }
    
    let select1 = document.getElementById('periodo');
    let select2 = document.getElementById('classe');
    var btn = document.getElementById('Buscar');
    if(select1.value == '2-2021') {
       document.getElementById('valueETIM').style.display = 'block';
       document.getElementById('valueETIM2').style.display = 'none';
       document.getElementById('valueETIM3').style.display = 'none';
       document.getElementById('frame2').style.display = 'none';
       document.getElementById('frame3').style.display = 'none';
       if(select2.value == 'ETIM_1') {
        document.getElementById('sala').style.display = 'block';
        btn.addEventListener('click', function () {
            mostrarFrameBoletim('frame', 'frame2', 'frame3');
        });
        } else {
        document.getElementById('sala').style.display = 'none';
        document.getElementById('frame').style.display = 'none';
        }
    } else if (select1.value == '2-2022') {
        document.getElementById('valueETIM2').style.display = 'block';
        document.getElementById('valueETIM3').style.display = 'none';
        document.getElementById('valueETIM').style.display = 'none';
        document.getElementById('frame').style.display = 'none';
        document.getElementById('frame3').style.display = 'none';
        if(select2.value == 'ETIM_2') {
            document.getElementById('sala').style.display = 'block';
            btn.addEventListener('click', function () {
                mostrarFrameBoletim('frame2', 'frame3', 'frame');
            });
        } else {
            document.getElementById('sala').style.display = 'none';
        }
    } else if (select1.value == '1-2023') {
        document.getElementById('valueETIM3').style.display = 'block';
        document.getElementById('valueETIM').style.display = 'none';
        document.getElementById('valueETIM2').style.display = 'none';
        document.getElementById('frame').style.display = 'none';
        document.getElementById('frame2').style.display = 'none';
        if (select2.value == 'ETIM_3') {
            document.getElementById('sala').style.display = 'block';
            btn.addEventListener('click', function () {
                mostrarFrameBoletim('frame3', 'frame', 'frame2');
            });
        } else {
            document.getElementById('sala').style.display = 'none';
        }
    } else {
        document.getElementById('valueETIM').style.display = 'none';
        document.getElementById('valueETIM2').style.display = 'none';
        document.getElementById('valueETIM3').style.display = 'none';
        document.getElementById('sala').style.display = 'none';
        btn.addEventListener('click', function () {
            document.getElementById('frame').style.display = 'none';
            document.getElementById('frame2').style.display = 'none';
            document.getElementById('frame3').style.display = 'none';
        });
        }
}

function fichaDesempenho(){

    function showMention(show, show1, hide) {
        document.getElementById(show).style.display = 'block';
        document.getElementById(show1).style.display = 'block';
        document.getElementById(hide).style.display = 'none';
    }

    var typeSelec = document.getElementById('mencao');

    if(typeSelec.value == 'MEN-1'){
        showMention('mencao-container', 'mencao1', 'mencao2');
    } else if (typeSelec.value == 'MEN-2') {
        showMention('mencao-container', 'mencao2', 'mencao1');
    } else {
        document.getElementById('mencao-container').style.display = 'none';
        document.getElementById('mencao1').style.display = 'none';
        document.getElementById('mencao2').style.display = 'none';
    }
}

function trocarHorario() {
    const imagemHorario = document.getElementById('cursosFrame');
    imagemHorarioValue = imagemHorario.getAttribute("src");

    switch (imagemHorarioValue) {

        case "imgs/horarioNormal.png":
            imagemHorario.setAttribute("src", "imgs/horarioReumido.png");
            imagemHorario.style.width = '770px'
            document.getElementById('cursosBTN').setAttribute("src", "imgs/VoltarRetirar.png");
            break;

        case "imgs/horarioReumido.png":
            imagemHorario.setAttribute("src", "imgs/horarioNormal.png");
            imagemHorario.style.width = '932.23px'
            document.getElementById('cursosBTN').setAttribute("src", "imgs/Grade.png");
            break;
    }
    
}


function acionarSolicitacoes() {
    btnSolicitar = document.getElementById('Solicitar');
    btnVerSolicit = document.getElementById('verSolicitar');
    solicitacoes = document.getElementById('frameSolicitacoes').style.display;

    let typeDOC = document.getElementById('tipodoc');
    let docFile = document.getElementById('document');

    var x = document.getElementById('document').querySelectorAll('.me');

    switch(typeDOC.value) {
        case "":
            i = 0;
            while(i < docFile.options.length) {
                x[i].style.display = "none";
                i++;
            }
            break;

        case "certificado":
            i = 0;
            while(i < docFile.options.length) {
                x[i].style.display = "none";
                i++;
            }
            x[0].style.display = "block";
            x[1].style.display = "block";
            break;
        
        case "declaracao":
            i = 0;
            while(i < docFile.options.length) {
                x[i].style.display = "none";
                i++;
            }
            x[0].style.display = "block";
            x[2].style.display = "block";
            x[3].style.display = "block";
            x[4].style.display = "block";
            x[5].style.display = "block";
            break;

        case "dispensa":
            i = 0;
            while(i < docFile.options.length) {
                x[i].style.display = "none";
                i++;
            }
            x[0].style.display = "block";
            x[6].style.display = "block";
            x[7].style.display = "block";
            x[8].style.display = "block";
            x[9].style.display = "block";
            break;
    }

    if(solicitacoes == 'none') {
        btnVerSolicit.addEventListener('click', function() {
            document.getElementById('frameSolicitacoes').style.display = 'block';
        });
    } else {
        btnVerSolicit.addEventListener('click', function() {
            document.getElementById('frameSolicitacoes').style.display = 'none';
        });
    }
}   function solicitar() {
    let typeDOC = document.getElementById('tipodoc');
    let docFile = document.getElementById('document');
        if (typeDOC.value == "certificado" && docFile.value != "0") {
            alert('Seu documento de Certificado foi solicitado');
        } else if (typeDOC.value == 'declaracao' && docFile.value != "0") {
            alert('Seu documento de Declaração foi solicitado') 
        } else if (typeDOC.value == 'dispensa' && docFile.value != "0") {
            alert('Seu documento de Dispensa foi solicitado');
        } else {
            
            alert('ERRO! SELECIONE SEU DOCUMENTO');
        }
    }

function reconsideracao() {
    let recoPeri = document.getElementById('recoPeri');
    let recoTeri = document.getElementById('recoTipo');
    var x = document.getElementById('recoTipo').querySelectorAll('.me');

    function ocultarOptions() {
        i = 0;
        while(i < recoTeri.options.length) {
            x[i].style.display = 'none';
            i++;
        }
    }

    switch(recoPeri.value) {
        case "":
            ocultarOptions();
            break;

        case "1":
            ocultarOptions();
            x[0].style.display = 'block';
            x[1].style.display = 'block';
            x[2].style.display = 'block';
            break;

        case "2":
            ocultarOptions();
            x[0].style.display = 'block';
            x[3].style.display = 'block';
            x[4].style.display = 'block';
            break;
    }
}

function atestadoVacina() {
    let selected = document.querySelector("input[name='yesornot']:checked");
    let tipoVac = document.querySelector("select[name='tipoVac']");
    let fabriVac = document.querySelector("select[name='fabriVac']");

    var x = document.getElementById('fabriVac').querySelectorAll('.me');

    function ocultar() {
        var i = 0;
        while(i < fabriVac.options.length) {
            x[i].style.display = 'none';
            i++;
        }
    }

    function documentosVacina() {
        switch(tipoVac.value) {
            case "":
                ocultar();
                break;

            case "1":
                ocultar();
                x[0].style.display = 'block';
                x[1].style.display = 'block';
                break;

            case "2":
                ocultar();
                x[0].style.display = 'block';
                x[2].style.display = 'block';
                x[3].style.display = 'block';
                x[4].style.display = 'block';
                x[5].style.display = 'block';
                break;
        }
    }


    if( selected.value == 'n') {
        document.getElementById('vacinaContent2').style.display = 'none';
        document.getElementById('vacinaContent1').style.display = 'flex';
        documentosVacina();
    } else if (selected.value == 's') {
        document.getElementById('vacinaContent1').style.display = 'none';
        document.getElementById('vacinaContent2').style.display = 'flex';
    } else {
        document.getElementById('vacinaContent1').style.display = 'none';
        document.getElementById('vacinaContent2').style.display = 'none';
    }

    

    
}