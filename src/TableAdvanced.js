import React from "react";

class TableAdvanced extends React.Component {
    constructor() {
        super();
        this.state = {
            asia: 2,
            pacific: 100,
            data: 0,
            currentRegion: "Asia"
        };
        this.getValue = this.getValue.bind(this);
        this.update = this.update.bind(this);
        this.test = this.test.bind(this);
    }

    componentDidMount() {
        this.setState({ data: this.state.asia });
    }

    getValue(e) {
        if (e.target.value === "Asia") {
            this.setState({ currentRegion: "Asia", data: this.state.asia });
            // this.setState({ data: this.state.asia });
        } else {
            this.setState({ currentRegion: "Pacific", data: this.state.pacific })
            // this.setState({ data: this.state.pacific });
        }
        // this.test(2);
        this.forceUpdate();
    }

    update(e) {
        // if(this.state.currentRegion === "Asia")
        this.setState({ data: e.target.value });
    }

    test(ttt) {
        // if(this.state.currentRegion === "Asia")
        this.setState({ data: ttt });
    }

    render() {
        return (
            <div>
                <div>
                    <select onChange={this.getValue}>
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
                            <tbody>
                                {this.state.currentRegion === "Asia" ?
                                    <Asia /> : <Pacific />}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
}

class Asia extends TableAdvanced {

    render() {
        return (
            <tr>
                <td><input value={this.state.data} onChange={this.update}></input>{this.state.data}</td>
                <td>{this.state.data}</td>
                <td>{this.state.data}</td>
            </tr>
        )
    }

}

class Pacific extends TableAdvanced {

    render() {
        return (
            <tr>
                <td><input value={this.state.data} onChange={this.update}></input>{this.state.data}</td>
                <td>{this.state.data}</td>
                <td>{this.state.data}</td>
            </tr>
        )
    }

}

export default TableAdvanced;