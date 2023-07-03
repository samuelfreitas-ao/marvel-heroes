export class UnexpectedError extends Error {
	constructor(message = 'Tente novamente em breve') {
		super(`Algo deu errado. ${message}`)
	}
}
