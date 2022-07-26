import { useEffect } from 'react';

import ISuggestion from './ISuggestion';

export default function Suggestion({
	consImportance,
	prosImportance,
	setSuggestion,
	suggestion,
}: ISuggestion) {
	useEffect(() => {
		if (consImportance > 0 || prosImportance > 0) {
			if (prosImportance > consImportance) setSuggestion('Looks like good');
			else if (consImportance > prosImportance)
				setSuggestion('Probably bad choice');
			else setSuggestion('Too complected to make a good choice');
		}
	}, [consImportance, prosImportance, setSuggestion]);

	return <div>{suggestion}</div>;
}
