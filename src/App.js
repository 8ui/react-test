import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

import { store } from 'core'
import { API_URL, API_AUTH } from 'core/constants'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import Header from 'components/Header';
import Projects from 'components/Projects'
import Structure from 'components/Structure'


@observer
class App extends React.Component {
  async componentDidMount() {
    try {
      let data = await fetch(`${API_URL}${API_AUTH}`, {
        method: 'POST',
        body: JSON.stringify({
          login: "test@test.ru",
          password: "test",
          type: "web"
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      data = await data.json()
      store.updateUser(data.data)
    } catch (e) {
      console.warn(e);
    }
  }

  renderContent = () => {
    if (store.user) {
      return (
        <Container>
          <Paper>
            <Header />
            <Switch>
              <Route path="/project/:projectId/structure/:structureId" component={Structure} />
              <Route path="/" component={Projects} />
            </Switch>
          </Paper>
        </Container>
      )
    }
    return null;
  }

  render() {
    return this.renderContent();
  }
}

App.propTypes = {
}

export default App
