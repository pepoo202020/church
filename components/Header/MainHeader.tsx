import { HeaderContainer } from "./HeaderContainer";
import { SlidingHeader } from "./SlidingHeader";
import "./MainHeader.css";

export const MainHeader = () => {
  return (
    <header>
      <SlidingHeader />
      <HeaderContainer />
    </header>
  );
};
