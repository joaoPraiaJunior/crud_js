const validacaoDaAutoriaPensamento = (autoria) => {
	const minimoDeCaracteres = 3;
	const maximoDeCaracteres = 15;

	const regexAutoria = new RegExp(`^[A-Za-z\\s]{${minimoDeCaracteres},${maximoDeCaracteres}}$`);

	return regexAutoria.test(autoria);
};

export { validacaoDaAutoriaPensamento };
