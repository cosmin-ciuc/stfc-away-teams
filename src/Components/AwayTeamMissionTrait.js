import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'react-bootstrap/Stack';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import '../App.css';

export class AwayTeamMissionTrait extends React.Component {
    render() {
        const sortedOfficers = this.props.officers.map(officer => {
            return {
                ...officer,
                order: officer.traits.indexOf(this.props.traitName)
            };
        }).sort((officer1, officer2) => officer1.order - officer2.order);
        return (
            <Stack gap={3}>
                <div className="Trait">{this.props.traitName}</div>
                <ListGroup>
                    {sortedOfficers.map((officer, i) => <ListGroupItem className={officer.rarity} key={i}><img src={'images/' + officer.name + '.png'} height="64"/><div>{officer.name}</div></ListGroupItem>)}
                </ListGroup>
            </Stack>
        );
    }
}

AwayTeamMissionTrait.propTypes = {
    traitName: PropTypes.string,
    officers: PropTypes.array
};
