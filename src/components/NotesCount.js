import React from 'react';
import PropTypes from 'prop-types'
import { withTheme, styled } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';



const ChipWrapper = styled(Chip)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  cursor: 'pointer',
}))

const NotesCount = ({ row, theme }) => {
  const chips = [
    ['notes_cnt_danger', 'secondary'],
    ['notes_cnt_warning', 'warning'],
    ['notes_cnt_success', 'success'],
  ]
  return (
    <>
    {chips.map(([prop, color]) => (
      <ChipWrapper
        key={`${row.id}-${prop}`}
        style={{ borderColor: theme.palette[color].main }}
        size="small"
        variant="outlined"
        label={row[prop]}
      />
    ))}
    </>
  )
}

NotesCount.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number,
    notes_cnt_danger: PropTypes.number,
    notes_cnt_warning: PropTypes.number,
    notes_cnt_success: PropTypes.number,
  }).isRequired,
  theme: PropTypes.shape({
  }).isRequired,
}

export default withTheme(NotesCount);
