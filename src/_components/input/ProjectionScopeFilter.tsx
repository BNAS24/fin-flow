"use client";
import { projectionScopeOptions } from "@/_data/filters/projection-scope-options";
import CheckIcon from "@mui/icons-material/Check";
import { ListItemIcon, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export const ProjectionScopeFilter = () => {
  const [value, setValue] = useState(projectionScopeOptions[0]);

  const handleChange = (event: SelectChangeEvent) =>
    setValue(event.target.value as string);

  return (
    <Select
      id="projection-selection-scope-select"
      value={value}
      onChange={handleChange}
      renderValue={(value) => value}
      sx={{
        height: "2.5rem",
        boxShadow: 1,
        border: 1,
        borderRadius: 3,
        borderColor: "divider",
      }}
    >
      {projectionScopeOptions.map((option) => (
        <MenuItem
          key={option}
          value={option}
          selected={option === value}
          sx={{
            borderColor: "unset",
          }}
        >
          {option}
          {option === value && (
            <ListItemIcon sx={{ ml: "auto", minWidth: "auto" }}>
              <CheckIcon fontSize="small" />
            </ListItemIcon>
          )}
        </MenuItem>
      ))}
    </Select>
  );
};
