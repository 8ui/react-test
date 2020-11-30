import React from 'react';
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { store } from 'core'
import { matchUrl } from 'core/utils'
import { API_URL, API_PROJECT_STRUCTURE } from 'core/constants'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import Tabs from './Tabs';
import Breadcrumbs from './Breadcrumbs';
import SearchField from './SearchField';
import StructureItem from './StructureItem';



@observer
class Structure extends React.PureComponent {
  constructor(props) {
    super(props);
    store.setActiveProject(props.match.params);
  }

  componentDidMount() {
    if (store.canFetchStructure) this.fetchStructure();
  }

  componentDidUpdate({ match: { params } }) {
    const { match } = this.props;
    if (params.structureId !== match.params.structureId) {
      store.setActiveProject(match.params);
      if (store.canFetchStructure) {
        this.fetchStructure();
      }
    }
  }

  fetchStructure = async() => {
    try {
      store.updateLoading(true)
      const url = `${API_URL}${matchUrl(API_PROJECT_STRUCTURE, {
        projectId: store.projectId,
        structureId: store.structureId,
      })}`;
      let data = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': store.user.accessToken,
        }
      })
      data = await data.json()
      store.pushStructure(data.data)
    } catch (e) {
      console.warn(e);
    } finally {
      store.updateLoading(false);
    }
  }

  renderItem = (row) => {
    const { history } = this.props;
    return (
      <StructureItem
        key={`project-list-${row.id}`}
        row={row}
        history={history}
      />
    )
  }

  render() {
    return (
      <TableContainer>
        <Tabs />
        <SearchField />
        <Breadcrumbs />
        <Table>
          <TableBody>
            {store.getStructureList.map(this.renderItem)}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

Structure.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string,
      structureId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default Structure;
