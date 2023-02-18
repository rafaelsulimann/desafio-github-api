import './styles.scss';

type Props = {
    errorMessage : string;
}

export default function ErrorMessage({errorMessage} : Props) {
    return(
        <div className="github-user-container error-message-container">
            <div className="error-message">
                <h3>{errorMessage}</h3>
            </div>
        </div>
    );
}