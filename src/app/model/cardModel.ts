export class Card {
	id: string;
	number: number;
	type: string;
	limit: number;

	constructor(
		id: string = '1',
		number: number = 1,
		type: string = 'DEBIT',
		limit: number = 0
	) {
		this.id = id;
		this.number = number;
		this.type = type;
		this.limit = limit;
	}

	get finalCardNumber(): string {
		return this.number.toString().slice(-4);
	}
	get cardType(): string {
		return this.type;
	}
	get cardLimit(): number {
		return this.limit;
	}
}
