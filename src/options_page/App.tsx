import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";
import { ConfigBean, RuleBean } from "../bean/config.bean";
import { configs } from "../mock/config.mock";
import { ActionBar } from "./components/action.bar";
import { ConfigTable } from "./components/config.table";

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
  const [config, setConfig] = React.useState<ConfigBean>({
    name: "",
    url: "",
    rules: configs.map((v: any) => new RuleBean(v)),
  });
  const { rules } = config;
  return (
    <div className={classes.root}>
      <ActionBar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ConfigTable
            rows={rules}
            onChange={(rules = []) => setConfig((pre) => ({ ...pre, rules }))}
          />
        </Grid>
      </Grid>
    </div>
  );
}
