import { useOutletContext } from "react-router-dom";
function Details() {
  const van = useOutletContext();
  return (
    <section>
      <p className="text-sm text-gray-600 font-medium mb-4">
        <span className="text-[#161616] font-bold">Name: </span>
        {van.name}
      </p>
      <p className="text-sm text-gray-600 font-medium mb-4">
        <span className="text-[#161616] font-bold">Category: </span>
        {van.type}
      </p>
      <p className="text-sm text-gray-600 font-medium mb-4">
        <span className="text-[#161616] font-bold">Description: </span>
        {van.description}
      </p>
      <p className="text-sm text-gray-600 font-medium mb-4">
        <span className="text-[#161616] font-bold">Visibility: </span>
        Public
      </p>
    </section>
  );
}
export default Details;
