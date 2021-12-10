import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
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
        const backgroundClassName = this.state.selectedMission && this.state.selectedMission.rarity + '-bg';

        return (
            <Container fluid>
                <Row>
                    <Col xs="3" className={backgroundClassName} style={{ fontSize: 'small' }}>
                        <Row>
                            <Col xs="3">
                                <div>Mission:</div>
                            </Col>
                            <Col>
                                <AwayTeamSelector onSelectedMissionChange={this.onSelectedMissionChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <div>Rarity:</div>
                            </Col>
                            <Col>
                                {this.state.selectedMission && <div className={this.state.selectedMission.rarity}>{this.state.selectedMission.rarity}</div>}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <div style={{ marginTop: '50%' }}>Rewards:</div>
                            </Col>
                            <Col>
                                {this.state.selectedMission && (
                                    <ListGroup variant="flush">
                                        <ListGroupItem className={backgroundClassName} style={{ paddingLeft: '0px' }}><img src={'images/rewards/' + this.state.selectedMission.primaryRewards + '.png'} height="32px"/>&nbsp;{this.state.selectedMission.primaryRewards}</ListGroupItem>
                                        {this.state.selectedMission.secondaryRewards !== '' && <ListGroupItem className={backgroundClassName} style={{ paddingLeft: '0px' }}><img src={'images/rewards/' + this.state.selectedMission.secondaryRewards + '.png'} height="32px"/>&nbsp;{this.state.selectedMission.secondaryRewards}</ListGroupItem> }
                                    </ListGroup>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <div>Critical rewards:</div>
                            </Col>
                            <Col>
                                {this.state.selectedMission && <div><img src={'images/rewards/' + this.state.selectedMission.criticalRewards + '.png'} height="32px"/>&nbsp;{this.state.selectedMission.criticalRewards}</div>}
                            </Col>
                        </Row>
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
