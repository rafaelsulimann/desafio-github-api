import { Link } from "react-router-dom";
import './styles.scss';

type Props = {
    buttonName : string;
    buttonLinkTo : string;
    buttonClassName : string;
}

export default function PrimaryButton({buttonName, buttonLinkTo, buttonClassName} : Props) {
  return (
    <div className="container primary-button-container">
      <div className="primary-button">
        <Link to={buttonLinkTo} className={buttonClassName}>
          <button>{buttonName}</button>
        </Link>
      </div>
    </div>
  );
}
