import { useOutletContext } from "react-router-dom";
import AnimationWrapper from "../../AnimationWrapper";
function Photos() {
  const van = useOutletContext();
  return (
    <AnimationWrapper>
      <section>
        <img src={van.imageUrl} alt={van.name} className="w-20 rounded-md" />
      </section>
    </AnimationWrapper>
  );
}

export default Photos;
