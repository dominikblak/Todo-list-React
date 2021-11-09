import { StyledNavLink } from "../../styled";
import { Ul, Li } from "./styled";

export const Navigation = () => {
  return (
    <Ul>
      <Li>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </Li>
      <Li>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </Li>
    </Ul>
  );
};
