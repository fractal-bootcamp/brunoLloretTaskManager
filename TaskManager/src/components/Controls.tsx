import useCounterStore from "../store/counterStore";

export function Controls() {
  const increasePopulation = useCounterStore(
    (state) => state.increasePopulation
  );
  return <button onClick={increasePopulation}>one up</button>;
}
