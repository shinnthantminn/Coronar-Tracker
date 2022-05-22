import { useEffect, useState } from "react";
import { fetchCountry } from "../../API";

function CountryPicker({ change }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    (async () => {
      setState(await fetchCountry());
    })();
  }, []);
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto py-10">
        <select
          name="country"
          id="country"
          className="w-[80%] mx-auto text-center block outline-0"
          onChange={(e) => change(e.target.value)}
        >
          <option value="">Global</option>
          {state.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CountryPicker;
