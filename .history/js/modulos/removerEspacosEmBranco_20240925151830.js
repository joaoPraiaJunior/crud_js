const removerEspacosEmBranco = (string) => {
	return string.replaceAll(/\s+/g, '');
};

export { removerEspacosEmBranco };
