import log from "tailwindcss/lib/util/log";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    if (country === "") {
      const result = await fetch(url);
      const { confirmed, recovered, deaths, lastUpdate } = await result.json();
      return { confirmed, recovered, deaths, lastUpdate };
    } else {
      const result = await fetch(`${url}/countries/${country}`);
      const { confirmed, recovered, deaths, lastUpdate } = await result.json();
      return { confirmed, recovered, deaths, lastUpdate };
    }
  } catch (e) {
    console.log(e.message);
  }
};

const filter = (p) => {
  const filter = p.filter((x) => {
    let time = [];
    for (let i = 0; i < 15; i++) {
      if (i === 0) continue;
      let date = `2020-${i}-22`;
      if (i >= 13) {
        date = `2021-${i - 12}-22`;
      }
      let month;
      if (i.toString().length === 1 || i >= 13) {
        month = `0${new Date(date).getMonth() + 1}`;
      } else {
        month = new Date(date).getMonth() + 1;
      }
      const year = new Date(date).getFullYear();
      time.push(`${year}-${month}-22`);
    }
    return time.includes(x.reportDate);
  });
  return filter;
};

export const fetchDailyData = async () => {
  try {
    const result = await fetch(`${url}/daily`);
    const res = await result.json();
    const data = filter(res);
    const modifiedData = data.map((i) => ({
      confirmed: i.confirmed.total,
      deaths: i.deaths.total,
      date: i.reportDate,
    }));
    return modifiedData;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchCountry = async () => {
  try {
    const result = await fetch(`${url}/countries`);
    const { countries } = await result.json();
    return countries.map((i) => i.name);
  } catch (e) {
    console.log(e.message);
  }
};
