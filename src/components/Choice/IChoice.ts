export default interface IChoice {
	suggestion: string;
	text: string;
	details: {
		cons: number;
		hint: string;
		pros: number;
	};
}
