import { connect } from 'react-redux';

import IPVerboseUpdater from './IPVerboseUpdater.jsx';


function mapStateToProps(state, ownProps){
    // Extract project
    let project_uuid = ownProps.match.params.project_uuid;
    let filtered_projects = _.filter(state.projects, (x) => {
        return x.project_uuid == project_uuid
    });

    let project = null;

    if (filtered_projects.length) {
        project = filtered_projects[0]
    } else {
        project = {
            "project_name": null,
            "project_uuid": null,
            "comment": ""
        }
    }

    let ip_param = ownProps.match.params.ip_address;
    let ip_object = null;

    let ip_objects = _.filter(state.ips.data, (x) => {
        return x.ip_address == ip_param
    });

    if (ip_objects.length > 0) {
        ip_object = ip_objects[0];
    }

    ip_object = ip_object || { "ip_address": null, "comment": "" };
    ip_object.loaded = state.ips.loaded;

    let ports_unsorted = _.get(ip_object, 'scans', []);
    let ports = ports_unsorted.sort((x, y) => {
        return x.port_number > y.port_number;
    });

    return {
        project_uuid: project.project_uuid,
        ip: ip_object,
        tasks: state.tasks.active,
        ports: ports
    }
}


const MainAccumulatorWrapper = connect(
    mapStateToProps
)(IPVerboseUpdater)

export default MainAccumulatorWrapper
