import { useData } from "../index";

export const Home = () => {
  const { state } = useData();
  return (
    <>
      <h1>Home {state?.name}</h1>
    </>
  );
};
