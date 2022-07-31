interface IErrorMessage {
	errorMessages: string[];
}

export default function ErrorMessage({ errorMessages }: IErrorMessage) {
	const renderErrorMessages = () =>
		errorMessages.map((message) => <p>{message}</p>);

	return <>{renderErrorMessages()}</>;
}
