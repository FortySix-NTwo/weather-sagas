import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { unregister } from './service-worker'
import { GlobalStyles, ThemeProvider } from './style'
import { Title, Card, Container } from './components'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <>
    <ThemeProvider>
      <GlobalStyles />
      <Provider store={store}>
        <Title>
          <h1>AccuWeather Client</h1>
        </Title>
        <Container data-cy="container">
          <Card data-cy="card">
            <p>This is a cute card</p>
          </Card>
        </Container>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
)

unregister()
