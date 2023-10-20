import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
function Photos() {
  const [photos, setPhotos] = useState(null);
  const { hostVanId } = useParams();
  useEffect(() => {
    async function fetchVan() {
      const response = await fetch(`/api/host/vans/${hostVanId}`);
      const data = await response.json();
      setPhotos(data.vans.imageUrl);
    }
    fetchVan();
  });
  return photos ? (
    <section>
      <img src={photos} alt={"van"} className="w-20 rounded-md" />
    </section>
  ) : (
    <section className="flex items-center h-full justify-center">
      <Loader />
    </section>
  );
}

export default Photos;
