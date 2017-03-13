import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import ProjectActions from './ProjectActions.js';

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            project_name : props["project_name"] || null, 
            project_uuid: props["project_uuid"]
        };

        this.delete = this.delete.bind(this);
    }

    delete(e) {
        e.preventDefault();
        ProjectActions.delete(this.state.project_uuid);
    }

    render() {
        var detailsLink = <Link to={"/project/" + this.state.project_name}>Details</Link>;

        return (
            <tr>
                <td>{this.state.project_uuid}</td>
                <td>{this.state.project_name}</td>
                <td>
                    <Link to={"/project/" + this.state.project_name}><Button bsStyle="default">Details</Button></Link>
                    <Button bsStyle="danger" onClick={this.delete}>Delete</Button>
                </td>
            </tr>
        );
    }

}

export default Project;
