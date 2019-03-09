import React from "react";

class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            asia: [
                { row1Col1: "asia row1 col1", row1Col2: "asia row1 col2", row1Col3: "asia row1 col3" },
                { row1Col1: "asia row2 col1", row1Col2: "asia row2 col2", row1Col3: "asia row2 col3" },
            ],
            pacific: [
                { row1Col1: "pacific row1 col1", row1Col2: "pacific row1 col2", row1Col3: "pacific row1 col3" },
                { row1Col1: "pacific row2 col1", row1Col2: "pacific row2 col3", row1Col3: "pacific row2 col3" },
            ],
            data: [
                { row1Col1: "asia row1 col1", row1Col2: "asia row1 col2", row1Col3: "asia row1 col3" },
                { row1Col1: "asia row2 col1", row1Col2: "asia row2 col2", row1Col3: "asia row2 col3" },
            ]

        };
        // this.setState({data: this.state.asia});

        this.getValue = this.getValue.bind(this);
    }

    getValue(e) {
        if (e.target.value === "Asia") {
            this.setState({ data: this.state.asia });
        } else {
            this.setState({ data: this.state.pacific });
        }
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
                                {this.state.data.map((data, i) =>
                                    <Content key={i} content={data} />
                                )}
                            </tbody>
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
            <tr>
                <td>{this.props.content.row1Col1}</td>
                <td>{this.props.content.row1Col2}</td>
                <td>{this.props.content.row1Col3}</td>
            </tr>
        )
    }

}

export default Table;