/**
 * @description: 路由
 * @author: cnn
 * @createTime: 2020/7/16 15:42
 **/
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// @ts-ignore
import Loadable from 'react-loadable';
import { ErrorBoundary } from '@components/index';
import { NotFound, Home, Welcome } from '@views/index';
import { Spin } from 'antd';

const Loading = () => {
  return <Spin />;
};

// 组件列表
const ComponentList = Loadable({
  loader: () => import('@views/components/ComponentList'),
  loading: Loading
});
// 技巧列表
const TipList = Loadable({
  loader: () => import('@views/tips/TipList'),
  loading: Loading
});
// 资源列表
const ResourceList = Loadable({
  loader: () => import('@views/resources/ResourceList'),
  loading: Loading
});
// Debug 列表
const DebugList = Loadable({
  loader: () => import('@views/debug/DebugList'),
  loading: Loading
});

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Home>
            <Switch>
              <ErrorBoundary>
                <Route exact path="/" component={Welcome} />
                <Route path="/components" component={ComponentList} />
                <Route path="/tips" component={TipList} />
                <Route path="/resources" component={ResourceList} />
                <Route path="/debugs" component={DebugList} />
              </ErrorBoundary>
              <Route component={NotFound} />
            </Switch>
          </Home>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
