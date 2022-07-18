import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { Box } from '@mui/system'

const SelectField = ({ label, options }) => {
    const [value, setValue] = useState('')

    const handleChange = () => {

    }
  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
            {options.map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                    {name}
                </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectField
