import React from "react";

class TableAdvanced extends React.Component {
    constructor() {
        super();
        this.state = {
            asia: 100,
            pacific: 5,
            data: 0,
            currentRegion: "Asia"
        };
        this.getValue = this.getValue.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.setState({ data: this.state.asia });
    }

    getValue(e) {
        // alert(e.target.value);
        if (e.target.value === "Asia") {
            this.setState({ currentRegion: "Asia", data: this.state.asia });
            // this.forceUpdate();
            // alert(this.state.currentRegion);
            // this.setState({ data: this.state.asia });
        } else {
            this.setState({ currentRegion: "Pacific", data: this.state.pacific });
            // this.setState({ data: this.state.pacific });
            // this.forceUpdate();
            // alert(this.state.currentRegion);
        }
        this.forceUpdate();
    }

    update(e) {
        if (this.state.currentRegion === "Asia") {
            this.setState({ data: e.target.defaultValue, asia: e.target.defaultValue });
        } else {
            this.setState({ data: e.target.defaultValue, pacific: e.target.defaultValue });
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
                            <Content region={this.state.currentRegion} data={this.state.data} />
                        </table>
                    </div>
                </div>
            </div>
        );
    };
}

class Content extends TableAdvanced {

    render() {
        return (
            <tbody>
                {(this.props.region === "Asia") ? <Asia data={this.props.data} /> : <Pacific data={this.props.data} />}
                {alert(this.props.data)}
            </tbody>
        )
    }

}

class Asia extends TableAdvanced {

    render() {
        return (
            <tr>
                <td><input type="text" value={this.props.data} onChange={this.update}></input></td>
                <td>{this.props.data}</td>
                <td>{this.props.data}</td>
            </tr>
        )
    }

}

class Pacific extends TableAdvanced {

    render() {
        return (
            <tr>
                <td><input type="text" value={this.props.data} onChange={this.update}></input></td>
                <td>{this.props.data}</td>
                <td>{this.props.data}</td>
            </tr>
        )
    }

}

export default TableAdvanced;