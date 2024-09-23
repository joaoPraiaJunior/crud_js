import resetarFormulario from './modulos/resetarFormulario.js';
import salvarDadosDoFormulario from './modulos/salvarDadosDoFormulario.js';
import ui from './modulos/ui.js';

const elementos = {
	formulario: '[data-js="formulario"]',
	botaoResetarFormulario: '[data-js="botao-resetar-formulario"]',
	buscaPensamento: '[data-js="busca-pensamento"]',
};

const formulario = document.querySelector(elementos.formulario);
const botaoResetarFormulario = document.querySelector(elementos.botaoResetarFormulario);
const buscaPensamento = document.querySelector(elementos.buscaPensamento);

document.addEventListener('DOMContentLoaded', ui.renderizarPensamentos);
formulario.addEventListener('submit', salvarDadosDoFormulario);
botaoResetarFormulario.addEventListener('click', resetarFormulario);
buscaPensamento.addEventListener('input', ui.filtrarPensamentos);
