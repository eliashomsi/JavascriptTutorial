import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor (props) {
    super(props);
    this.state = { forecasts: [], loading: true };

    var data = [{"dateFormatted":"11/24/2019","temperatureC":-10,"summary":"Bracing","temperatureF":15}
    ,{"dateFormatted":"11/25/2019","temperatureC":-9,"summary":"Hot","temperatureF":16}
    ,{"dateFormatted":"11/26/2019","temperatureC":9,"summary":"Cool","temperatureF":48}
    ,{"dateFormatted":"11/27/2019","temperatureC":28,"summary":"Hot","temperatureF":82}
    ,{"dateFormatted":"11/28/2019","temperatureC":34,"summary":"Sweltering","temperatureF":93}]; 

    setTimeout( () => {
      this.setState({ forecasts: data, loading: false });
    },3000);
  }

  static renderForecastsTable (forecasts) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.dateFormatted}>
              <td>{forecast.dateFormatted}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
