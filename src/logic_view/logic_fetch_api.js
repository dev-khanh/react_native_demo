/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import ViewFlatListData from './view_flat_list_data';
export default class LogicFetchApi extends PureComponent {
  state = {
    data: [],
    isLoading: true,
  };
  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  render() {
    const { data, isLoading } = this.state;
    return <ViewFlatListData dataflatList={data} isLoading={isLoading} />;
  }
}
