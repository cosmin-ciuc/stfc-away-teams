import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Stack, ListGroup, ListGroupItem } from 'react-bootstrap';
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
                            <Stack direction="horizontal" gap="2">
                                <div>Rarity:</div>
                                {this.state.selectedMission && <div className={this.state.selectedMission.rarity}>{this.state.selectedMission.rarity}</div>}
                            </Stack>
                            <Stack direction="horizontal" gap="2">
                                <div>Rewards:</div>
                                {this.state.selectedMission && (
                                    <ListGroup variant="flush">
                                        <ListGroupItem><img src={'images/rewards/' + this.state.selectedMission.primaryRewards + '.png'} height="24px"/>&nbsp;{this.state.selectedMission.primaryRewards}</ListGroupItem>
                                        {this.state.selectedMission.secondaryRewards !== '' && <ListGroupItem><img src={'images/rewards/' + this.state.selectedMission.secondaryRewards + '.png'} height="24px"/>&nbsp;{this.state.selectedMission.secondaryRewards}</ListGroupItem> }
                                    </ListGroup>
                                )}
                            </Stack>
                            <Stack direction="horizontal" gap="2">
                                <div>Critical rewards:</div>
                                {this.state.selectedMission && <div><img src={'images/rewards/' + this.state.selectedMission.criticalRewards + '.png'} height="24px"/>&nbsp;{this.state.selectedMission.criticalRewards}</div>}
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
