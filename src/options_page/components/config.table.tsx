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
import { TableRowItem } from "./TableRowItem";

interface IProps {
  onChange?: (e?: RuleBean[]) => void;
  rows: RuleBean[];
}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export function ConfigTable(props: IProps) {
  const classes = useStyles();
  const [] = React.useState();
  const { rows, onChange } = props;
  const addRow = (key: number) => () => {
    const nextRows = rows.reduce(
      (p, n, i) => (key === i ? [...p, n, new RuleBean()] : p.concat(n)),
      [] as RuleBean[]
    );
    return onChange && onChange(nextRows);
  };

  const removeRow = (key: number) => () => {
    const nextRows = rows.filter((_f, i) => i !== key);
    return onChange && onChange(nextRows);
  };

  const changeRow = (key: number) => (next: RuleBean) => {
    const nextRows = rows.map((v, i) => (i === key ? next : v));
    return onChange && onChange(nextRows);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell component="th">Type</TableCell>
            <TableCell component="th">selector</TableCell>
            <TableCell component="th">value</TableCell>
            <TableCell component="th">fillType</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRowItem
              item={row}
              key={row.id}
              onAddRow={addRow(index)}
              onChange={changeRow(index)}
              onRemoveRow={removeRow(index)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
