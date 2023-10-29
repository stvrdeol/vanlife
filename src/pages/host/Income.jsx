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
    <section className="px-[3vw] md:px-[5vw]">
      <h2>Income</h2>
      <p className="font-medium text-[#4D4D4D]">
        Income last
        <span className="font-bold underline-offset-4 underline">30 days</span>
      </p>
      <p className="font-extrabold text-5xl py-5">$2,260</p>
      <img src={chart} alt="chart" />

      <section>
        <p>Your transactions ({income.length})</p>
        <p className="font-medium text-[#4D4D4D]">
          Income last
          <span className="font-bold underline-offset-4 underline">
            30 days
          </span>
        </p>
        {income.map((income) => {
          return (
            <article key={income.id}>
              <p>${income.amount}</p>
              <p>{income.date}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
}

export default Income;
