import {
  InputBase,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import * as React from "react";
import { RuleBean } from "../../bean/config.bean";
import { configs } from "../../mock/config.mock";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export function ConfigTable() {
  const classes = useStyles();
  const rows: RuleBean[] = configs;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th">Type</TableCell>
            <TableCell component="th">selector</TableCell>
            <TableCell component="th">value</TableCell>
            <TableCell component="th">fillType</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.selector}>
              <TableCell scope="row">
                <InputBase fullWidth defaultValue={row.formType} />
              </TableCell>
              <TableCell scope="row">
                <InputBase fullWidth defaultValue={row.selector} />
              </TableCell>
              <TableCell scope="row">
                <InputBase fullWidth defaultValue={row.value} />
              </TableCell>
              <TableCell>
                <InputBase fullWidth defaultValue={row.fillType} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
