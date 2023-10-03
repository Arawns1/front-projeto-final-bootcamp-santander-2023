export class Account {
	agency: string;
	balance: number;
	limit: number;
	number: number;
	name: string;

	constructor(
		agency: string = '0',
		number: number = 0,
		balance: number = 0,
		limit: number = 0,
		name: string = 'User'
	) {
		this.agency = agency;
		this.balance = balance;
		this.limit = limit;
		this.number = number;
		this.name = name;
	}

	get getAgency(): string {
		return this.agency;
	}
	get getBalance(): number {
		return this.balance;
	}
	get getLimit(): number {
		return this.limit;
	}

	get BalancePlusLimit(): number {
		return this.limit + this.balance;
	}

	get getNumber(): number {
		return this.number;
	}
	get getName(): string {
		return this.name;
	}

	get getAccount() {
		return {
			agency: this.agency,
			balance: this.balance,
			limit: this.limit,
			number: this.number,
			name: this.name,
		};
	}
}
