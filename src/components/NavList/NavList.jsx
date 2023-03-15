import { List, ListItem } from "@mui/material";
import { NavListItem } from "./../../UI/NavListItem";

export const NavList = ({ boards, handlerCloseMobileNavbar }) => {
  return (
    <List disablePadding>
      {boards.map((board) => (
        <ListItem
          key={board.title}
          disablePadding
          sx={{
            "&:not(:last-child)": { mb: 3.75 },
            "&:last-child": { mb: 10 },
          }}
          onClick={handlerCloseMobileNavbar}
        >
          <NavListItem to={board.to} title={board.title} icon={board.icon} />
        </ListItem>
      ))}
    </List>
  );
};
