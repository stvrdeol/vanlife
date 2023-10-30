import AnimationWrapper from "../../AnimationWrapper";
import chart from "../../assets/Group312.png";
function Income() {
  const income = [
    {
      id: 1,
      date: "1/12/22",
      amount: 720,
    },
    {
      id: 2,
      date: "10/11/22",
      amount: 560,
    },
    {
      id: 3,
      date: "23/11/22",
      amount: 980,
    },
  ];
  return (
    <AnimationWrapper>
      <section className="px-[3vw] md:px-[5vw] font-medium">
        <h2 className="font-bold text-4xl">Income</h2>
        <p className="font-medium text-[#4D4D4D] py-7">
          Income last
          <span className="font-bold underline-offset-4 underline">
            30 days
          </span>
        </p>
        <p className="font-extrabold text-5xl pb-9">$2,260</p>
        <img src={chart} alt="chart" />

        <section className="flex my-10 justify-between items-center">
          <p className="font-bold text-2xl">
            Your transactions ({income.length})
          </p>
          <p className=" text-[#4D4D4D]">
            Income last
            <span className="font-bold underline-offset-4 underline">
              30 days
            </span>
          </p>
        </section>
        {income.map((income) => {
          return (
            <article
              key={income.id}
              className="flex items-center justify-between bg-white my-5 p-7 rounded-md">
              <p className="font-semibold text-4xl">${income.amount}</p>
              <p className="text-xl">{income.date}</p>
            </article>
          );
        })}
      </section>
    </AnimationWrapper>
  );
}

export default Income;
