import { MenuItem, Select } from "@material-ui/core";
import { SelectInputProps } from "@material-ui/core/Select/SelectInput";
import React from "react";

interface IProps {
  value?: string;
  onChange?: SelectInputProps["onChange"];
  list: Array<{ name: string; value: string } | string>;
}
/**
 * 通用选择框
 *
 * @export
 * @param {IProps} props
 * @returns
 */
export function TypeSelect(props: IProps) {
  const { list = [], onChange } = props;
  return (
    <Select value={props.value} onChange={onChange}>
      {list.map((type) => {
        if (typeof type === "string") {
          return (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          );
        }
        <MenuItem key={type.value} value={type.value}>
          {type.name}
        </MenuItem>;
      })}
    </Select>
  );
}
