import { Component, createRef } from "react";
import { Header, Card, Chart, CountryPicker } from "./Components";
import { fetchData } from "./API";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    document.title = "Corona Tracker";
    this.setState({ data: await fetchData("") });
  }

  handelChange = async (e) => {
    const { confirmed, recovered, deaths, lastUpdate } = await fetchData(e);
    this.setState({
      data: { confirmed, recovered, deaths, lastUpdate },
      country: e,
    });
  };

  render() {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
      country,
    } = this.state;
    return (
      <div className='w-full min-h-[100vh] px-5 pt-5 font-["IBM_Plex_Sans_Thai"] pb-20'>
        <Header data={lastUpdate} />
        <Card data={{ confirmed, deaths, recovered, lastUpdate }} />
        <CountryPicker change={this.handelChange} />
        <Chart
          data={{ confirmed, deaths, recovered, lastUpdate }}
          country={country}
        />
      </div>
    );
  }
}

export default App;
