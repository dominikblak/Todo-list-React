import { StyledNavLink, Ul, Li } from "./styled";
import { toAuthor, toTasks } from "./../../routes";

export const Navigation = () => {
  return (
    <Ul>
      <Li>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </Li>
      <Li>
        <StyledNavLink to={toAuthor}>O autorze</StyledNavLink>
      </Li>
    </Ul>
  );
};
