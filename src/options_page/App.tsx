import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { SaveRounded } from "@material-ui/icons";
import { createStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";
import { ConfigTable } from "./components/config.table";
import { ActionBar } from "./components/action.bar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // padding: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ActionBar></ActionBar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ConfigTable />
        </Grid>
      </Grid>
    </div>
  );
}
