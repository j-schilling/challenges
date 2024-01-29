import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const numberOfTurnedOnLights = lights.filter((light) => light.isOn).length;
  console.log("numberOfTurnedOnLights: ", numberOfTurnedOnLights);

  function handleToggle(lightId) {
    setLights((lights) =>
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleTurnAllLightsOff() {
    const allLightsOffArray = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(allLightsOffArray);
  }

  function handleTurnAllLightsOn() {
    const allLightsOnArray = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(allLightsOnArray);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        numberOfTurnedOnLights={numberOfTurnedOnLights}
        handleTurnAllLightsOff={handleTurnAllLightsOff}
        handleTurnAllLightsOn={handleTurnAllLightsOn}
      />
    </Layout>
  );
}
