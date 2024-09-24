function converterDataParaUTC(data) {
	const [ano, mes, dia] = data.split('-');
	return new Date(Date.UTC(ano, mes, dia));
}

export default converterDataParaUTC;
