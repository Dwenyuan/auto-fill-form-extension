import { IconButton, TableCell, TableRow, TextField } from "@material-ui/core";
import { AddRounded, RemoveRounded } from "@material-ui/icons";
import * as React from "react";
import { FILL_TYPE, FORM_TYPE, RuleBean } from "../../bean/config.bean";
import { TypeSelect } from "./type.select";

interface IProps {
  item: RuleBean;
  onAddRow: () => void;
  onRemoveRow: () => void;
  onChange: (row: RuleBean) => void;
}
export function TableRowItem(props: IProps) {
  const { item, onAddRow, onRemoveRow, onChange } = props;
  return (
    <TableRow key={item.id}>
      <TableCell scope="row">
        <TypeSelect
          value={item.formType}
          onChange={(e) =>
            onChange({ ...item, formType: e.target.value as FORM_TYPE })
          }
          list={Object.keys(FORM_TYPE)}
        />
      </TableCell>
      <TableCell scope="row">
        <TextField
          key={item.id}
          multiline
          fullWidth
          onBlur={(e) => onChange({ ...item, selector: e.target.value })}
          value={item.selector}
        />
      </TableCell>
      <TableCell scope="row">
        <TextField
          key={item.id}
          multiline
          fullWidth
          onBlur={(e) => onChange({ ...item, value: e.target.value })}
          value={item.value}
        />
      </TableCell>
      <TableCell>
        <TypeSelect
          value={item.fillType}
          onChange={(e) =>
            onChange({ ...item, fillType: e.target.value as FILL_TYPE })
          }
          list={Object.keys(FILL_TYPE)}
        />
      </TableCell>
      <TableCell align="right">
        <IconButton key={item.id} onClick={onAddRow}>
          <AddRounded />
        </IconButton>
        <IconButton key={item.id} onClick={onRemoveRow}>
          <RemoveRounded />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
