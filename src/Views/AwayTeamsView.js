import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { AwayTeamSelector } from '../Components/AwayTeamSelector';
import { AwayTeamMissionTrait } from '../Components/AwayTeamMissionTrait';
import { allOfficers } from '../Models/officer';

export class AwayTeamsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMission: undefined
        };
        this.onSelectedMissionChange = this.onSelectedMissionChange.bind(this);
    }

    onSelectedMissionChange(selectedMission) {
        this.setState({
            selectedMission: selectedMission
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={3}>
                        <Stack>
                            <AwayTeamSelector onSelectedMissionChange={this.onSelectedMissionChange}/>
                            <Stack direction="horizontal" gap={2}>
                                <div>Rarity:</div>
                                {this.state.selectedMission && <div className={this.state.selectedMission.rarity}>{this.state.selectedMission.rarity}</div>}
                            </Stack>
                            <Stack direction="horizontal" gap={2}>
                                <div>Rewards:</div>
                                {this.state.selectedMission && <div>{this.state.selectedMission.primaryRewards + ', ' + this.state.selectedMission.secondaryRewards}</div>}
                            </Stack>
                            <Stack direction="horizontal" gap={2}>
                                <div>Critical rewards:</div>
                                {this.state.selectedMission && <div>{this.state.selectedMission.criticalRewards}</div>}
                            </Stack>
                        </Stack>
                    </Col>
                    {this.state.selectedMission && this.state.selectedMission.traits.filter(trait => trait !== '').map((trait, i) => (
                        <Col key={i} xs={2}>
                            <AwayTeamMissionTrait traitName={trait} officers={allOfficers.filter(officer => officer.traits.includes(trait))}/>
                        </Col>))}
                </Row>
            </Container>
        );
    }
}
