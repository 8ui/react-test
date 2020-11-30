import React from 'react';
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { store } from 'core'
import { API_URL, API_PROJECT_LIST } from 'core/constants'

import { styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@material-ui/core/Button';

import ProjectsItem from './ProjectsItem';



const SubHeader = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'right',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}))

@observer
class Projects extends React.PureComponent {
  componentDidMount() {
    store.setActiveProject({ projectId: null, structureId: null });
    if (store.projectsCount === 0) {
      this.fetchProjects()
    }
  }

  fetchProjects = async() => {
    try {
      let data = await fetch(`${API_URL}${API_PROJECT_LIST}`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': store.user.accessToken,
        }
      })
      data = await data.json()
      store.updateProjects(data.data)
    } catch (e) {
      console.warn(e);
    }
  }

  renderItem = (row) => {
    const { history } = this.props;
    return (
      <ProjectsItem
        key={`project-list-${row.id}`}
        row={row}
        history={history}
      />
    )
  }

  render() {
    if (store.projects.length === 0) return null;

    return (
      <TableContainer>
        <SubHeader>
          <Button variant="contained" color="primary">
            Добавить проект
          </Button>
        </SubHeader>
        <Table>
          <TableBody>
            {store.projects.map(this.renderItem)}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

Projects.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default Projects;
