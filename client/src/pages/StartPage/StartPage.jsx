import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { Section } from "../../components/section/section";

export const StartPage = () => {
  return (
    <>
      <Section>
        <Navigation />
      </Section>
      <Outlet />
    </>
  );
};
