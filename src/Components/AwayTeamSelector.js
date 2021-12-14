import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import AwayTeamMission, { awayTeamMissions } from '../Models/awayTeamMission';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';

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
        document.getElementById('ddMission').focus();
    }

    render() {
        const backgroundClassName = this.state.selected.rarity + '-bg';
        const dropdownItems = awayTeamMissions.sort().map((awayTeamMission, i) => {
            return <Dropdown.Item key={i} eventKey={awayTeamMission.name} active={this.state.selected.name === awayTeamMission.name} as="SPAN" className={awayTeamMission.rarity}>{awayTeamMission.name}</Dropdown.Item>;
        });
        return (
            <InputGroup size="sm" className="mb-1" id="missionInputGroup">
                <InputGroup.Text id="lbMission" className={this.state.selected.rarity + ' ' + backgroundClassName}>{this.state.selected.name}</InputGroup.Text>
                <DropdownButton id="ddMission" title="" onSelect={this.select} variant="outline-dark">
                    {dropdownItems}
                </DropdownButton>
            </InputGroup>
        );
    }
}

AwayTeamSelector.propTypes = {
    onSelectedMissionChange: PropTypes.func
};
