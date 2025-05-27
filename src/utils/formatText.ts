import he from 'he'

export const formatText = (text: string) => {
	return he
		.decode(text)
		.replace(/&nbsp;/g, '\u00A0')
		.replace(/\n/g, '<br />')
		.replace(/\u00A0/g, '\u00A0')
}
