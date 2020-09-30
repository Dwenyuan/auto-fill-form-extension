import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { SaveRounded, AddRounded } from "@material-ui/icons";
import React from "react";
const useStyle = makeStyles((theme: Theme) => ({
  sectionDesktop: {
    display: "none",
    flex: 1,
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));
export function ActionBar() {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          自动填充配置
        </Typography>
        <div className={classes.sectionDesktop}>
          <IconButton color="inherit">
            <SaveRounded />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <AddRounded />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
