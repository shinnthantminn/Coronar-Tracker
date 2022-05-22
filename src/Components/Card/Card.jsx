import InnerCard from "./InnerCard";

function Card({ data: { confirmed, recovered, deaths } }) {
  return (
    <div className="flex flex-wrap sm:justify-center sm:space-x-5 lg:space-x-0 lg:justify-between w-[90%] 2xl:w-[80%] mx-auto pt-3">
      <InnerCard
        data={confirmed}
        title="Infected"
        textStyle="text-violet-500"
        borderStyle={"border-b-violet-500"}
      />
      <InnerCard
        data={recovered}
        title="Recover"
        textStyle="text-green-500"
        borderStyle={"border-b-green-500"}
      />
      <InnerCard
        data={deaths}
        title="deaths"
        textStyle="text-red-500"
        borderStyle={"border-b-red-500"}
      />
    </div>
  );
}

export default Card;
