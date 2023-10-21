import { useOutletContext } from "react-router-dom";
function Photos() {
  const van = useOutletContext();
  return (
    <section>
      <img src={van.imageUrl} alt={van.name} className="w-20 rounded-md" />
    </section>
  );
}

export default Photos;
