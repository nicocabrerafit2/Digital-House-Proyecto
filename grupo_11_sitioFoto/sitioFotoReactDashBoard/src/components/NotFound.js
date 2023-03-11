import { useRouteError } from "react-router-dom";
import imagenFondo from "../assets/images/404.jpg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <img src={imagenFondo} className="img-404" />
    </div>
  );
}
