import { Link } from "react-router-dom";

function BackToParent({ text, to = ".." }) {
  return (
    <Link to={to} relative="path" className="underline underline-offset-4">
      {text}
    </Link>
  );
}

export default BackToParent;
