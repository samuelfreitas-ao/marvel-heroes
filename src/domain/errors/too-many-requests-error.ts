export class TooManyRequestsError extends Error {
	constructor() {
		super(
			'O servidor da Marvel está bloqueando novas solicitações porque excedeu o limite. Tente novamente dentro de 24h horas.'
		)
	}
}
