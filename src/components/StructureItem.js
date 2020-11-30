import React from 'react';
import PropTypes from 'prop-types'

import { styled } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

import NotesCount from './NotesCount';



const TableRowWrapper = styled(TableRow)({
  cursor: 'pointer',
})

const StructureItem = ({ row, history }) => {
  const onClick = () => {
    history.push(`/project/${row.project_id}/structure/${row.id}`)
  }
  const onDelete = (e) => {
    e.stopPropagation();
  }

  return (
    <TableRowWrapper
      hover
      onClick={onClick}
    >
      <TableCell padding="checkbox" align="center">
        {row.hasDocument && <InsertDriveFileOutlinedIcon fontSize="small" />}
      </TableCell>
      <TableCell>
        {row.title}
      </TableCell>
      <TableCell align="right">
        <NotesCount row={row} />
      </TableCell>
      <TableCell padding="checkbox">
        <IconButton color="primary" aria-label="delete">
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </TableCell>
      <TableCell padding="checkbox">
        <IconButton
          onClick={onDelete}
          color="secondary"
          aria-label="delete"
        >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRowWrapper>
  )
}

StructureItem.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number,
    project_id: PropTypes.number,
    title: PropTypes.string,
    hasDocument: PropTypes.bool,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default StructureItem;
