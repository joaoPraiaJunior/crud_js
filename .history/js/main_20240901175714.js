import pegarDadosDoFormulario from './modulos/pegarDadosDoFormulario.js';
import ui from './modulos/ui.js';


const elementos = {
    formulario: '[data-js="formulario"]',
}

const formulario = document.querySelector(elementos.formulario);

document.addEventListener("DOMContentLoaded", ui.renderizarPensamentos);
formulario.addEventListener('submit', pegarDadosDoFormulario);

