export default interface IChoice {
	id: string;
	suggestion: string;
	text: string;
	details: {
		cons: number;
		hint: string;
		pros: number;
	};
}
