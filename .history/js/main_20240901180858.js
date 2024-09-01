import pegarDadosDoFormulario from './modulos/pegarDadosDoFormulario.js';
import resetarFormulario from './modulos/resetarFormulario.js';
import ui from './modulos/ui.js';


const elementos = {
    formulario: '[data-js="formulario"]',
    botaoResetarFormulario: '[data-js="botao-resetar-formulario"]',
}

const formulario = document.querySelector(elementos.formulario);
const botaoResetarFormulario = document.querySelector(elementos.botaoResetarFormulario);

document.addEventListener("DOMContentLoaded", ui.renderizarPensamentos);
formulario.addEventListener('submit', pegarDadosDoFormulario);
botaoResetarFormulario.addEventListener('click', resetarFormulario);

