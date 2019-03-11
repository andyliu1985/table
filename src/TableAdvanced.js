import React from "react";

class TableAdvanced extends React.Component {
  constructor() {
    super();
    this.state = {
      asia: 100,
      pacific: 5,
      data: 100,
      currentRegion: "Asia"
    };
    this.getValue = this.getValue.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  getValue(e) {
    if (e.target.value === "Asia") {
      this.setState({ currentRegion: "Asia", data: this.state.asia });
    } else {
      this.setState({ currentRegion: "Pacific", data: this.state.pacific });
    }
  }

  handleTextChange(e) {
    console.log(e.target.value);
    // if (value === "100") {
    //   this.setState({currentRegion : "Asia", });
    // }
    // else if (value === "5") {
    //   this.setState({currentRegion : "Pacific"});
    // }

    if (this.state.currentRegion === "Asia") {
      this.setState({ data: e.target.value, asia: e.target.value });
    }
    else {
      this.setState({ data: e.target.value, pacific: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <div>
          <select value={this.state.currentRegion} onChange={this.getValue}>
            <option value="Asia">Asia</option>
            <option value="Pacific">Pacific</option>
          </select>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Title1</th>
                  <th>Title2</th>
                  <th>Title3</th>
                </tr>
              </thead>
              <Content region={this.state.currentRegion} data={this.state.data} changeHandler={this.handleTextChange} />
            </table>
          </div>
        </div>
      </div>
    );
  };
}

class Content extends React.Component {

  render() {
    return (
      <tbody>
        {(this.props.region === "Asia") ? <Asia data={this.props.data} changeHandler={this.props.changeHandler} /> :
          <Pacific data={this.props.data} changeHandler={this.props.changeHandler} />}
      </tbody>
    )
  }

}

class Asia extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  update(e) {
    this.props.changeHandler(e);
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <tr>
        <td><input value={this.state.data} onChange={e => this.update(e)}></input></td>
        <td>{parseInt(this.state.data) + 5}</td>
        <td>{parseInt(this.state.data) + 10}</td>
      </tr>
    )
  }

}

class Pacific extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  update(e) {
    this.props.changeHandler(e);
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <tr>
        <td><input value={this.state.data} onChange={e => this.update(e)}></input></td>
        <td>{parseInt(this.state.data) * 2}</td>
        <td>{parseInt(this.state.data) * 3}</td>
      </tr>
    )
  }

}

export default TableAdvanced;