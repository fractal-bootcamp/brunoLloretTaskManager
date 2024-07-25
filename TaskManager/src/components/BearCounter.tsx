import useCounterStore from "../store/counterStore";

export function BearCounter() {
  const bears = useCounterStore((state) => state.bears);
  return <h1 className="bg-slate-500">{bears} around here...</h1>;
}
