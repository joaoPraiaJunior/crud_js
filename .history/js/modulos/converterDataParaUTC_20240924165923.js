function converterDataParaUTC(data) {
	const [ano, mes, dia] = data.split('-');
	return new Date(Date.UTC(ano, mes - 1, dia));
}

export default converterDataParaUTC;
