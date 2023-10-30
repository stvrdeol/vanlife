import Ratings from "../../assets/Frame.png";
import star from "../../assets/star.png";
function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Elliot",
      image: Ratings,
      date: "December 1, 2022",
      rating: 5,
      review:
        "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    },
    {
      id: 2,
      name: "Sandy",
      image: Ratings,
      date: "November 23, 2022",
      rating: 5,
      review:
        "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    },
  ];
  return (
    <section className="font-medium text-[#161616] pb-8 px-[3vw] md:px-[5vw] ">
      <section className="flex gap-4 items-baseline">
        <h2 className="font-bold text-[32px]">Your Reviews</h2>
        <p className="text-[#4D4D4D]">
          last
          <span className="font-bold underline-offset-4 underline">
            30 days
          </span>
        </p>
      </section>
      <section className="flex my-2 items-center gap-3">
        <p className="font-bold text-[32px]">5.0</p>
        <img src={star} alt="star" className="w-6" />
        <p>overall rating</p>
      </section>
      <img src={Ratings} className="max-w-md w-full" alt="ratings" />

      <p className="font-bold text-lg pt-7">Reviews({reviews.length})</p>
      {reviews.map((review) => (
        <article key={review.id} className="pt-7">
          <section className="flex gap-2">
            <img src={star} alt="star" className="w-6" />
            <img src={star} alt="star" className="w-6" />
            <img src={star} alt="star" className="w-6" />
            <img src={star} alt="star" className="w-6" />
            <img src={star} alt="star" className="w-6" />
          </section>
          <section className="flex py-2 gap-1">
            <h3 className="font-semibold ">{review.name}</h3>
            <p className="text-[#8C8C8C]">{review.date}</p>
          </section>
          <p>{review.review}</p>
          <hr className="mt-7 border  bg-[#C7C7C7]" />
        </article>
      ))}
    </section>
  );
}

export default Reviews;
