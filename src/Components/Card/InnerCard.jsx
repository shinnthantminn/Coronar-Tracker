import CountUp from "react-countup";

function InnerCard({ data, title, textStyle, borderStyle }) {
  return (
    <div
      className={`border px-5 pt-5 pb-7 xl:px-7 xl:pt-7 xl:pb-10 mb-5 rounded-lg w-fit shadow border-b-[3px] ${borderStyle}`}
    >
      <h2 className={`text-xl xl:text-2xl mb-5 ${textStyle}`}>
        <span className="font-bold text-black">Coronavirus Cases.</span> {title}
      </h2>
      <h3 className={`text-lg xl:text-xl mb-3 ${textStyle}`}>{title}</h3>
      <h1 className={`text-2xl xl:text-4xl mb-5 font-semibold ${textStyle}`}>
        {data ? (
          <CountUp start={0} end={data.value} duration={2.75} separator={","} />
        ) : (
          "loading..."
        )}
      </h1>
      <p>Number of {title} case of COVID-19</p>
    </div>
  );
}

export default InnerCard;
