import * as React from "react";
import {
  RouteComponentProps,
  withRouter,
  Route,
  Switch
} from "react-router-dom";

import ListView from "./ListView";
import DetailView from "./DetailView";

class Pages extends React.Component<RouteComponentProps<{}>> {
  constructor(props: RouteComponentProps) {
    super(props);
  }
  render() {
    return (
      <div className="app--container">
        <Route
          path="/:id"
          default={true}
          exact={true}
          render={() => {
            return <DetailView {...this.props} />;
          }}
        />
        <Route
          path="/"
          {...this.props}
          exact={true}
          render={() => {
            return <ListView />;
          }}
        />
      </div>
    );
  }
}

export default withRouter(Pages);
