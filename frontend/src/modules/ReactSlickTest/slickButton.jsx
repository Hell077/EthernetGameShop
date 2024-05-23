import { Link } from "react-router-dom";

function SlickButton({ path, content }) {
    return (
        <Link to={path}>
            <div className="slide-button">{content}</div>
        </Link>
    );
}

export default SlickButton;
