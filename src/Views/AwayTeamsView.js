import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { AwayTeamSelector } from '../Components/AwayTeamSelector';
import { AwayTeamMissionTrait } from '../Components/AwayTeamMissionTrait';
import Officer from '../Models/officer';

const allOfficers = [
    new Officer({ name: '0718', rarity: 'Uncommon', traits: ['Scientist', '', ''] }),
    new Officer({ name: '1 of 11', rarity: 'Rare', traits: ['Assimilated', 'Cybernetic', ''] }),
    new Officer({ name: '10 of 11', rarity: 'Epic', traits: ['Assimilated', 'Miner', 'Fluffy'] }),
    new Officer({ name: '11 of 11', rarity: 'Epic', traits: ['Assimilated', 'Miner', 'Specialist'] }),
    new Officer({ name: '2 of 11', rarity: 'Rare', traits: ['Assimilated', 'Cybernetic', ''] }),
    new Officer({ name: '3 of 11', rarity: 'Epic', traits: ['Assimilated', 'Miner', 'Calculated'] }),
    new Officer({ name: '4 of 11', rarity: 'Epic', traits: ['Assimilated', 'Analytical', 'Specialist'] }),
    new Officer({ name: '5 of 11', rarity: 'Epic', traits: ['Assimilated', 'Ruthless', 'Relentless'] }),
    new Officer({ name: '6 of 11', rarity: 'Epic', traits: ['Assimilated', 'Ruthless', 'Relentless'] }),
    new Officer({ name: '7 of 11', rarity: 'Rare', traits: ['Assimilated', 'Dedicated', ''] }),
    new Officer({ name: '8 of 11', rarity: 'Uncommon', traits: ['Assimilated', '', ''] }),
    new Officer({ name: '9 of 11', rarity: 'Uncommon', traits: ['Assimilated', '', ''] }),
    new Officer({ name: 'Ahvix', rarity: 'Rare', traits: ['Engineer', 'Survivor', ''] }),
    new Officer({ name: 'Airiam', rarity: 'Uncommon', traits: ['Scientist', '', ''] }),
    new Officer({ name: 'Arix', rarity: 'Uncommon', traits: ['Surveyor', '', ''] }),
    new Officer({ name: 'Arkady', rarity: 'Uncommon', traits: ['Engineer', '', ''] }),
    new Officer({ name: 'Azetbur', rarity: 'Rare', traits: ['Chancellor', 'Ruthless', ''] }),
    new Officer({ name: 'Barot', rarity: 'Rare', traits: ['Surveyor', 'Miner', ''] }),
    new Officer({ name: 'Beverly Crusher', rarity: 'Rare', traits: ['Doctor', 'Analytical', ''] }),
    new Officer({ name: 'Bones', rarity: 'Rare', traits: ['Doctor', 'Dedicated', ''] }),
    new Officer({ name: 'Cadet Kirk', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Cadet McCoy', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Cadet Scotty', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Cadet Sulu', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Cadet Uhura', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Captain Tilly', rarity: 'Rare', traits: ['Warrior', 'Ruthless', ''] }),
    new Officer({ name: 'Carol', rarity: 'Epic', traits: ['Scientist', 'Physicist', 'Focused'] }),
    new Officer({ name: 'Chang', rarity: 'Rare', traits: ['Warrior', 'Ruthless', ''] }),
    new Officer({ name: 'Charvanek', rarity: 'Epic', traits: ['Warrior', 'Tactical', 'Leader'] }),
    new Officer({ name: 'Chen', rarity: 'Uncommon', traits: ['Pilot', '', ''] }),
    new Officer({ name: 'Culber', rarity: 'Uncommon', traits: ['Doctor', '', ''] }),
    new Officer({ name: 'Darwin', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Data', rarity: 'Epic', traits: ['Uncompromising', 'Tactical', 'Android'] }),
    new Officer({ name: 'Deanna Troi', rarity: 'Epic', traits: ['Advisor', 'Perceptive', 'Empathic'] }),
    new Officer({ name: 'Decius', rarity: 'Rare', traits: ['Warrior', 'Patriotic', ''] }),
    new Officer({ name: 'D\'Jaoki', rarity: 'Uncommon', traits: ['Warrior', '', ''] }),
    new Officer({ name: 'Domitia', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Dupont', rarity: 'Rare', traits: ['Scientist', 'Explorer', ''] }),
    new Officer({ name: 'Emperor Georgiou', rarity: 'Rare', traits: ['Warrior', 'Ruthless', ''] }),
    new Officer({ name: 'Eurydice', rarity: 'Epic', traits: ['Deceptive', 'Charismatic', 'Trader'] }),
    new Officer({ name: 'Gaila', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Geordi La Forge', rarity: 'Epic', traits: ['Engineer', 'Physicist', 'Adaptable'] }),
    new Officer({ name: 'Georgiou', rarity: 'Epic', traits: ['Captain', 'Explorer', 'Astronomer'] }),
    new Officer({ name: 'Gonzales', rarity: 'Uncommon', traits: ['Diplomat', '', ''] }),
    new Officer({ name: 'Goon', rarity: 'Uncommon', traits: ['Warrior', '', ''] }),
    new Officer({ name: 'Gorkon', rarity: 'Epic', traits: ['Chancellor', 'Ruthless', 'Relentless'] }),
    new Officer({ name: 'Hadley', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Harrison', rarity: 'Rare', traits: ['Augment', 'Criminal', ''] }),
    new Officer({ name: 'Harry Mudd', rarity: 'Epic', traits: ['Escape Artist', 'Criminal', 'Mastermind'] }),
    new Officer({ name: 'Helvia', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Hendorff', rarity: 'Uncommon', traits: ['Security', '', ''] }),
    new Officer({ name: 'Honorguard Worf', rarity: 'Epic', traits: ['Security', 'Dedicated', 'Intimidating'] }),
    new Officer({ name: 'Instructor Spock', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Javaid', rarity: 'Uncommon', traits: ['Inventor', '', ''] }),
    new Officer({ name: 'Jaylah', rarity: 'Epic', traits: ['Warrior', 'Survivor', 'Adaptable'] }),
    new Officer({ name: 'Jean-Luc Picard', rarity: 'Epic', traits: ['Captain', 'Genius', 'Archaeologist'] }),
    new Officer({ name: 'Joachim', rarity: 'Rare', traits: ['Augment', 'Tactical', ''] }),
    new Officer({ name: 'Joaquin', rarity: 'Uncommon', traits: ['Augment', '', ''] }),
    new Officer({ name: 'Kang', rarity: 'Epic', traits: ['Diplomat', 'Analytical', 'Leader'] }),
    new Officer({ name: 'Kati', rarity: 'Uncommon', traits: ['Augment', '', ''] }),
    new Officer({ name: 'K\'Bisch', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Keenser', rarity: 'Rare', traits: ['Engineer', 'Dedicated', ''] }),
    new Officer({ name: 'Kerla', rarity: 'Rare', traits: ['Advisor', 'Reliable', ''] }),
    new Officer({ name: 'Khan', rarity: 'Epic', traits: ['Augment', 'Criminal', 'Mastermind'] }),
    new Officer({ name: 'Kirk', rarity: 'Epic', traits: ['Captain', 'Charismatic', 'Impulsive'] }),
    new Officer({ name: 'Klaa', rarity: 'Uncommon', traits: ['Warrior', '', ''] }),
    new Officer({ name: 'Komal', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Koth', rarity: 'Uncommon', traits: ['Security', '', ''] }),
    new Officer({ name: 'Kras', rarity: 'Epic', traits: ['Advisor', 'Analytical', 'Specialist'] }),
    new Officer({ name: 'Krell', rarity: 'Rare', traits: ['Spy', 'Analytical', ''] }),
    new Officer({ name: 'Kumak', rarity: 'Rare', traits: ['Marksman', 'Tactical', ''] }),
    new Officer({ name: 'Kuron', rarity: 'Rare', traits: ['Warrior', 'Charismatic', ''] }),
    new Officer({ name: 'Leslie', rarity: 'Uncommon', traits: ['Engineer', '', ''] }),
    new Officer({ name: 'Linkasa', rarity: 'Uncommon', traits: ['Engineer', '', ''] }),
    new Officer({ name: 'Livis', rarity: 'Rare', traits: ['Ambitious', 'Patriotic', ''] }),
    new Officer({ name: 'L\'Nar', rarity: 'Uncommon', traits: ['Spy', '', ''] }),
    new Officer({ name: 'Lorca', rarity: 'Epic', traits: ['Deceptive', 'Manipulative', 'Leader'] }),
    new Officer({ name: 'Mäkinen', rarity: 'Uncommon', traits: ['Scientist', '', ''] }),
    new Officer({ name: 'Mara', rarity: 'Rare', traits: ['Warrior', 'Manipulative', ''] }),
    new Officer({ name: 'Marcus', rarity: 'Epic', traits: ['Warrior', 'Manipulative', 'Admiral'] }),
    new Officer({ name: 'Marla', rarity: 'Rare', traits: ['Scientist', 'Analytical', ''] }),
    new Officer({ name: 'M\'Benga', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Michael Burnham', rarity: 'Epic', traits: ['Resourceful', 'Genius', 'Impulsive'] }),
    new Officer({ name: 'Mirek', rarity: 'Rare', traits: ['Scientist', 'Patriotic', ''] }),
    new Officer({ name: 'Mitchell', rarity: 'Epic', traits: ['Ambitious', 'Tactical', 'Psionic'] }),
    new Officer({ name: 'Moreau', rarity: 'Rare', traits: ['Scientist', 'Dedicated', ''] }),
    new Officer({ name: 'M\'Ral', rarity: 'Uncommon', traits: ['Warrior', '', ''] }),
    new Officer({ name: 'Mudd', rarity: 'Epic', traits: ['Resourceful', 'Thief', 'Rogue'] }),
    new Officer({ name: 'Navi', rarity: 'Rare', traits: ['Augment', 'Reliable', ''] }),
    new Officer({ name: 'Nero', rarity: 'Epic', traits: ['Captain', 'Miner', 'Intimidating'] }),
    new Officer({ name: 'Next Gen Crusher', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Next Gen Data', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Next Gen La Forge', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Next Gen Riker', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Next Gen Troi', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Origins Burnham', rarity: 'Uncommon', traits: ['Resourceful', '', ''] }),
    new Officer({ name: 'Origins Saru', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Origins Stamets', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Otto', rarity: 'Uncommon', traits: ['Augment', '', ''] }),
    new Officer({ name: 'Pan', rarity: 'Rare', traits: ['Augment', 'Survivor', ''] }),
    new Officer({ name: 'Paul Stamets', rarity: 'Rare', traits: ['Inventor', 'Physicist', ''] }),
    new Officer({ name: 'Pike', rarity: 'Epic', traits: ['Ambitious', 'Patriotic', 'Admiral'] }),
    new Officer({ name: 'Qa\'Ug', rarity: 'Uncommon', traits: ['Warrior', '', ''] }),
    new Officer({ name: 'Rima', rarity: 'Rare', traits: ['Augment', 'Charismatic', ''] }),
    new Officer({ name: 'Ro Mudd', rarity: 'Rare', traits: ['Ambitious', 'Criminal', ''] }),
    new Officer({ name: 'Rukor', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Saru', rarity: 'Rare', traits: ['Uncompromising', 'Cautious', ''] }),
    new Officer({ name: 'Scotty', rarity: 'Uncommon', traits: ['Inventor', '', ''] }),
    new Officer({ name: 'Sesha', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Severus', rarity: 'Uncommon', traits: ['Engineer', '', ''] }),
    new Officer({ name: 'Shev', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Spock', rarity: 'Rare', traits: ['Scientist', 'Analytical', ''] }),
    new Officer({ name: 'Stonn', rarity: 'Rare', traits: ['Surveyor', 'Analytical', ''] }),
    new Officer({ name: 'Sulu', rarity: 'Uncommon', traits: ['Pilot', '', ''] }),
    new Officer({ name: 'Tal', rarity: 'Rare', traits: ['Advisor', 'Patriotic', ''] }),
    new Officer({ name: 'Tasha Yar', rarity: 'Rare', traits: ['Security', 'Dedicated', ''] }),
    new Officer({ name: 'Tilly', rarity: 'Uncommon', traits: ['Scientist', '', ''] }),
    new Officer({ name: 'Tiza', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'T\'Laan', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'TOS Chekov', rarity: 'Rare', traits: ['Engineer', 'Genius', ''] }),
    new Officer({ name: 'TOS Kirk', rarity: 'Epic', traits: ['Captain', 'Charismatic', 'Impulsive'] }),
    new Officer({ name: 'TOS McCoy', rarity: 'Rare', traits: ['Doctor', 'Dedicated', ''] }),
    new Officer({ name: 'TOS Nyota Uhura', rarity: 'Rare', traits: ['Resourceful', 'Analytical', ''] }),
    new Officer({ name: 'TOS Scotty', rarity: 'Rare', traits: ['Engineer', 'Genius', ''] }),
    new Officer({ name: 'TOS Spock', rarity: 'Epic', traits: ['Scientist', 'Genius', 'Calculated'] }),
    new Officer({ name: 'TOS Sulu', rarity: 'Rare', traits: ['Pilot', 'Perceptive', ''] }),
    new Officer({ name: 'T\'Pring', rarity: 'Rare', traits: ['Resourceful', 'Miner', ''] }),
    new Officer({ name: 'Tyler', rarity: 'Rare', traits: ['Spy', 'Dedicated', ''] }),
    new Officer({ name: 'Uhura', rarity: 'Rare', traits: ['Resourceful', 'Analytical', ''] }),
    new Officer({ name: 'Vartoq', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Vel', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Vella', rarity: 'Uncommon', traits: ['Scientist', '', ''] }),
    new Officer({ name: 'Vemet', rarity: 'Rare', traits: ['Advisor', 'Cautious', ''] }),
    new Officer({ name: 'Vixis', rarity: 'Uncommon', traits: ['Warrior', '', ''] }),
    new Officer({ name: 'Wesley Crusher', rarity: 'Rare', traits: ['Resourceful', 'Genius', ''] }),
    new Officer({ name: 'William T. Riker', rarity: 'Epic', traits: ['Uncompromising', 'Charismatic', 'Charming'] }),
    new Officer({ name: 'Worf', rarity: 'Rare', traits: ['Security', 'Dedicated', ''] }),
    new Officer({ name: 'Woteln', rarity: 'Uncommon', traits: ['Warrior', '', ''] }),
    new Officer({ name: 'Yan\'Agh', rarity: 'Uncommon', traits: ['Engineer', '', ''] }),
    new Officer({ name: 'Yuki', rarity: 'Rare', traits: ['Spy', 'Patriotic', ''] }),
    new Officer({ name: 'Zahra', rarity: 'Common', traits: ['', '', ''] }),
    new Officer({ name: 'Zhou', rarity: 'Uncommon', traits: ['Spy', '', ''] })
];

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
