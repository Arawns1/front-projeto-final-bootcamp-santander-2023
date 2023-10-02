export class Account {
	agency?: string;
	balance?: number;
	limit?: number;
	number?: number;
	name?: string;

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

	get getAgency() {
		return this.agency;
	}
	get getBalance() {
		return this.balance;
	}
	get getLimit() {
		return this.limit;
	}
	get getNumber() {
		return this.number;
	}
	get getName() {
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
