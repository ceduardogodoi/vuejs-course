export default {
	computed: {
		textWithNoSpaces() {
			return this.text.replaceAll(' ', ',')
		},
		textWithWordCounter() {
			return this.text
				.split(' ')
				.map(word => `${word} (${word.length})`)
				.join(' ')
		}
	}
}
