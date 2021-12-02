import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'react-bootstrap/Stack';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../App.css';

export class AwayTeamMissionTrait extends React.Component {
    render() {
        const sortedOfficers = this.props.officers.map(officer => {
            return {
                ...officer,
                order: officer.traits.indexOf(this.props.traitName)
            };
        }).sort((officer1, officer2) => officer1.order - officer2.order);
        const officerTraitRanks = ['1st trait', '2nd trait', '3rd trait', '4th trait'];
        return (
            <Stack>
                <div className="Trait" style={{ textAlign: 'center' }}>{this.props.traitName}</div>
                <ListGroup variant="flush">
                    {sortedOfficers.map((officer, i) => {
                        return (
                            <ListGroupItem key={i}>
                                <Card border="light">
                                    <Card.Img variant="top" src={'images/officers/' + officer.name + '.png'} style={{ width: '64px' }}/>
                                    <Card.Body>
                                        <Card.Title className={officer.rarity}>{officer.name}</Card.Title>
                                        <Card.Subtitle>{officerTraitRanks[officer.order]}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </ListGroupItem>);
                    })
                    }
                </ListGroup>
            </Stack>
        );
    }
}

AwayTeamMissionTrait.propTypes = {
    traitName: PropTypes.string,
    officers: PropTypes.array
};
