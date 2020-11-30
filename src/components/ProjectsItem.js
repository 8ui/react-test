import React from 'react';
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import ProjectsRowMenu from './ProjectsRowMenu';
import NotesCount from './NotesCount';



const TableRowWrapper = styled(TableRow)({
  cursor: 'pointer',
})

const ProjectsItem = ({ row, history }) => {
  const onClick = () => {
    history.push(`/project/${row.id}/structure/${row.root_structure_id}`)
  }

  return (
    <TableRowWrapper
      hover
      onClick={onClick}
    >
      <TableCell padding="checkbox"><ProjectsRowMenu /></TableCell>
      <TableCell scope="row">
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
    </TableRowWrapper>
  )
}

ProjectsItem.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number,
    root_structure_id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default ProjectsItem;
