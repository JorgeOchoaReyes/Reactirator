import * as React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import initialState from './helpers/initialState';
import PackageJsonProvider from './components/Contexts/PackageJsonProvider';
import { DependenciesProvider } from './components/Contexts/dependenciesProvider';
import { PackagesPage } from './components/pages/PackagesPage';
import { OverviewPage } from './components/pages/OverviewPage';
import { Bar } from './components/Bar';
import { Layout } from './components/Layout';
import { CommandPage } from './components/pages/CommandPage';
import { DocumentationPage } from './components/pages/DocumentationPage';
import { GithubProvider } from './components/Contexts/GithubProvider';

const App = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const [input, setInput] = useState(initialState);
  const [readme, setReadme] = useState('');

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <PackageJsonProvider>
      <DependenciesProvider>
        <GithubProvider>
          <Bar />
          <HashRouter>
            <Layout theme={theme} setTheme={setTheme}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <OverviewPage input={input} setInput={setInput} readme={readme} />}
                />
                <Route
                  exact
                  path="/packages"
                  render={() => <PackagesPage input={input} setInput={setInput} />}
                />
                <Route
                  exact
                  path="/documentation"
                  render={() => <DocumentationPage readme={readme} setReadme={setReadme} />}
                />
                <Route exact path="/command" component={CommandPage} />
              </Switch>
            </Layout>
          </HashRouter>
        </GithubProvider>
      </DependenciesProvider>
    </PackageJsonProvider>
  );
};

function render() {
  ReactDOM.render(<App />, document.querySelector('#app'));
}

render();
