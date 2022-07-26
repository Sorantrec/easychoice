export default interface ISuggestion {
	consImportance: number;
	prosImportance: number;
	setSuggestion: (value: string) => void;
	suggestion: string;
}