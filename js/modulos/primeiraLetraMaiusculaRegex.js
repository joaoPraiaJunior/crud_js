function primeiraLetraMaiusculaRegex(dataFormatada) {
	return dataFormatada.replace(/^(\w)/, (match) => match.toUpperCase());
}

export default primeiraLetraMaiusculaRegex;
