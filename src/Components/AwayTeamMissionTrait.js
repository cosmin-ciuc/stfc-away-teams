import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'react-bootstrap/Stack';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import '../App.css';

export class AwayTeamMissionTrait extends React.Component {
    render() {
        return (
            <Stack gap={3}>
                <div className="Trait">{this.props.traitName}</div>
                <ListGroup>
                    {this.props.officers.map((officer, i) => <ListGroupItem className={officer.rarity} key={i}>{officer.name}</ListGroupItem>)}
                </ListGroup>
            </Stack>
        );
    }
}

AwayTeamMissionTrait.propTypes = {
    traitName: PropTypes.string,
    officers: PropTypes.array
};
