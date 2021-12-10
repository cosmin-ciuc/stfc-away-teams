import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import AwayTeamMission, { awayTeamMissions } from '../Models/awayTeamMission';
import PropTypes from 'prop-types';

export class AwayTeamSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: new AwayTeamMission({}) };
        this.select = this.select.bind(this);
    }

    componentDidMount() {
        this.select(awayTeamMissions[0].name);
    }

    select(awayTeamMissionName) {
        const selectedMission = awayTeamMissions.filter(mission => mission.name === awayTeamMissionName)[0];
        this.setState({
            selected: selectedMission
        });
        this.props.onSelectedMissionChange(selectedMission);
    }

    render() {
        const dropdownItems = awayTeamMissions.map((awayTeamMission, i) => {
            return <Dropdown.Item key={i} eventKey={awayTeamMission.name} active={this.state.selected.name === awayTeamMission.name} as="SPAN" className={awayTeamMission.rarity}>{awayTeamMission.name}</Dropdown.Item>;
        });
        return (
            <DropdownButton id="awayTeam" title={this.state.selected.name} onSelect={this.select} variant="outline-dark">
                {dropdownItems}
            </DropdownButton>
        );
    }
}

AwayTeamSelector.propTypes = {
    onSelectedMissionChange: PropTypes.func
};
