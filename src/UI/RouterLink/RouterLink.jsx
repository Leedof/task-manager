import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const LinkBehavior = React.forwardRef((props, ref) => (
  <ReactRouterLink to="/" {...props} ref={ref} />
));

export const RouterLink = (props) => {
  return <Link component={LinkBehavior} {...props} />;
};
