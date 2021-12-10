export default class AwayTeamMission {
    constructor(info = {}) {
        const { name, rarity, keyStat, primaryRewards, secondaryRewards, criticalRewards, traits } = info;

        this.name = name || '';
        this.rarity = rarity || '';
        this.keyStat = keyStat || '';
        this.primaryRewards = primaryRewards || '';
        this.secondaryRewards = secondaryRewards || '';
        this.criticalRewards = criticalRewards || '';
        this.traits = traits || [];

        this.rewards = [this.primaryRewards, this.secondaryRewards, this.criticalRewards];
    }
}

export const awayTeamMissions = [
    new AwayTeamMission({ name: 'Accelerated Bioforming', rarity: 'Rare', keyStat: 'Health', primaryRewards: 'Speedups', secondaryRewards: 'Service Awards', criticalRewards: 'Latinum', traits: ['Physicist', 'Engineer', 'Inventor', 'Scientist'] }),
    new AwayTeamMission({ name: 'Address The High Council', rarity: 'Rare', keyStat: 'Attack', primaryRewards: 'Away Teams Credits', secondaryRewards: '', criticalRewards: 'Klingon Credits', traits: ['Relentless', 'Dedicated', 'Ruthless', 'Chancellor'] }),
    new AwayTeamMission({ name: 'Alliance Exocomps', rarity: 'Rare', keyStat: 'Attack', primaryRewards: 'Axionic Chips', secondaryRewards: '', criticalRewards: 'Alliance Exocomp', traits: ['Relentless', 'Rogue', 'Thief', 'Resourceful'] }),
    new AwayTeamMission({ name: 'Alliance Exocomps Mk.II (Incomplete)', rarity: '', keyStat: '', primaryRewards: '', secondaryRewards: '', criticalRewards: '', traits: ['', '', '', ''] }),
    new AwayTeamMission({ name: 'Alliance Exocomps Mk.III (Incomplete)', rarity: '', keyStat: '', primaryRewards: '', secondaryRewards: '', criticalRewards: '', traits: ['', '', '', ''] }),
    new AwayTeamMission({ name: 'Arbiter of Succession', rarity: 'Epic', keyStat: 'Defense', primaryRewards: 'Klingon Rep', secondaryRewards: '', criticalRewards: 'Klingon Credits', traits: ['Specialist', 'Analytical', 'Advisor', 'Chancellor'] }),
    new AwayTeamMission({ name: 'Armed Escort', rarity: 'Uncommon', keyStat: 'Defense', primaryRewards: 'Rare Star Charts', secondaryRewards: 'Service Awards', criticalRewards: 'Rare Star Charts', traits: ['Tactical', 'Security', 'Warrior', ''] }),
    new AwayTeamMission({ name: 'Bat\'leth Training', rarity: 'Rare', keyStat: 'Attack', primaryRewards: 'Premium Recruit Tokens', secondaryRewards: '', criticalRewards: 'Moreau or Livis Shards', traits: ['Ruthless', 'Warrior', '', ''] }),
    new AwayTeamMission({ name: 'Bloodwine Contest', rarity: 'Common', keyStat: 'Health', primaryRewards: 'Klingon Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Klingon Credits', traits: ['Warrior', '', '', ''] }),
    new AwayTeamMission({ name: 'Boarding Party', rarity: 'Rare', keyStat: 'Attack', primaryRewards: 'Epic Star Charts', secondaryRewards: 'Service Awards', criticalRewards: 'Epic Star Charts', traits: ['Tactical', 'Augment', 'Marksman', 'Pilot'] }),
    new AwayTeamMission({ name: 'Calculated Treachery', rarity: 'Common', keyStat: 'Attack', primaryRewards: 'Romulan Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Romulan Credits', traits: ['Calculated', 'Mastermind', 'Analytical', 'Criminal'] }),
    new AwayTeamMission({ name: 'Collective Bargaining', rarity: 'Rare', keyStat: 'Health', primaryRewards: 'Inert Nanoprobes', secondaryRewards: 'Service Awards', criticalRewards: 'Active Nanoprobes', traits: ['Fluffy', 'Miner', 'Assimilated', ''] }),
    new AwayTeamMission({ name: 'Crystal Contractor', rarity: 'Uncommon', keyStat: 'Attack', primaryRewards: 'Raw Crystal', secondaryRewards: 'Service Awards', criticalRewards: 'Common Crystal', traits: ['Miner', 'Pilot', 'Surveyor', ''] }),
    new AwayTeamMission({ name: 'Cultural Exchange', rarity: 'Rare', keyStat: 'Defense', primaryRewards: 'Federation Credits', secondaryRewards: 'Service Awards', criticalRewards: 'Federation Ship Blueprints', traits: ['Leader', 'Explorer', 'Charismatic', 'Trader'] }),
    new AwayTeamMission({ name: 'Deep Space Reconnaissance', rarity: 'Common', keyStat: 'Health', primaryRewards: 'Rare Star Charts', secondaryRewards: 'Service Awards', criticalRewards: 'Rare Star Charts', traits: ['Explorer', '', '', ''] }),
    new AwayTeamMission({ name: 'Diplomatic Relations', rarity: 'Common', keyStat: 'Health', primaryRewards: 'Officer XP', secondaryRewards: '', criticalRewards: 'Latinum', traits: ['Diplomat', '', '', ''] }),
    new AwayTeamMission({ name: 'Double Agent Interrogation', rarity: 'Rare', keyStat: 'Health', primaryRewards: 'Premium Recruit Tokens', secondaryRewards: 'Service Awards', criticalRewards: 'Moreau or Uhura Shards', traits: ['Empathic', 'Perceptive', 'Security', 'Spy'] }),
    new AwayTeamMission({ name: 'Emergency Evacuation', rarity: 'Uncommon', keyStat: 'Defense', primaryRewards: 'Federation Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Federation Credits', traits: ['Cautious', 'Dedicated', 'Captain', 'Doctor'] }),
    new AwayTeamMission({ name: 'Escort Dignitary (ops <20)', rarity: 'Common', keyStat: 'Health', primaryRewards: 'Officer XP', secondaryRewards: '', criticalRewards: 'Recruit Tokens', traits: ['Warrior', '', '', ''] }),
    new AwayTeamMission({ name: 'Experimental Procedures', rarity: 'Uncommon', keyStat: 'Health', primaryRewards: 'Raw Materials', secondaryRewards: 'Service Awards', criticalRewards: 'Common Materials', traits: ['Physicist', 'Engineer', 'Inventor', 'Scientist'] }),
    new AwayTeamMission({ name: 'Explore Galactic Barrier', rarity: 'Epic', keyStat: 'Defense', primaryRewards: 'Away Teams Credits', secondaryRewards: '', criticalRewards: 'TOS Spock Shards', traits: ['Psionic', 'Analytical', 'Tactical', 'Ambitious'] }),
    new AwayTeamMission({ name: 'Field Operatives (ops <30)', rarity: 'Uncommon', keyStat: 'Attack', primaryRewards: 'Recruit Tokens', secondaryRewards: '', criticalRewards: 'Koth Shards', traits: ['Doctor', 'Resourceful', 'Warrior', ''] }),
    new AwayTeamMission({ name: 'First Contact', rarity: 'Epic', keyStat: 'Health', primaryRewards: 'Federation Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Federation Credits', traits: ['Astronomer', 'Charismatic', 'Explorer', 'Captain'] }),
    new AwayTeamMission({ name: 'Forensic Investigation', rarity: 'Epic', keyStat: 'Attack', primaryRewards: 'Service Awards', secondaryRewards: '', criticalRewards: 'Merits of Honor', traits: ['Specialist', 'Analytical', 'Perceptive', ''] }),
    new AwayTeamMission({ name: 'Form Trade Agreement', rarity: 'Uncommon', keyStat: 'Health', primaryRewards: 'Away Teams Credits', secondaryRewards: '', criticalRewards: 'Latinum', traits: ['Charming', 'Empathic', 'Trader', 'Charismatic'] }),
    new AwayTeamMission({ name: 'Gas Contractor', rarity: 'Uncommon', keyStat: 'Defense', primaryRewards: 'Raw Gas', secondaryRewards: 'Service Awards', criticalRewards: 'Common Gas', traits: ['Miner', 'Scientist', 'Engineer', ''] }),
    new AwayTeamMission({ name: 'Geological Evaluation (Crystal)', rarity: 'Epic', keyStat: 'Health', primaryRewards: 'Service Awards', secondaryRewards: 'Common Crystal', criticalRewards: 'Uncommon Crystal', traits: ['Miner', 'Augment', 'Scientist', 'Surveyor'] }),
    new AwayTeamMission({ name: 'Geological Evaluation (Gas)', rarity: 'Epic', keyStat: 'Health', primaryRewards: 'Service Awards', secondaryRewards: 'Common Gas', criticalRewards: 'Uncommon Gas', traits: ['Miner', 'Engineer', 'Physicist', 'Scientist'] }),
    new AwayTeamMission({ name: 'Geological Evaluation (Ore)', rarity: 'Epic', keyStat: 'Health', primaryRewards: 'Service Awards', secondaryRewards: 'Common Ore', criticalRewards: 'Uncommon Ore', traits: ['Archaeologist', 'Genius', 'Miner', 'Scientist'] }),
    new AwayTeamMission({ name: 'Geothermal Conditioning (Crystal)', rarity: 'Rare', keyStat: 'Defense', primaryRewards: 'Service Awards', secondaryRewards: 'Common Crystal', criticalRewards: 'Uncommon Crystal', traits: ['Genius', 'Miner', 'Scientist', ''] }),
    new AwayTeamMission({ name: 'Geothermal Conditioning (Gas)', rarity: 'Rare', keyStat: 'Defense', primaryRewards: 'Service Awards', secondaryRewards: 'Common Gas', criticalRewards: 'Uncommon Gas', traits: ['Miner', 'Augment', 'Engineer', ''] }),
    new AwayTeamMission({ name: 'Geothermal Conditioning (Ore)', rarity: 'Rare', keyStat: 'Defense', primaryRewards: 'Service Awards', secondaryRewards: 'Common Ore', criticalRewards: 'Uncommon Ore', traits: ['Cybernetic', 'Miner', 'Assimilated', ''] }),
    new AwayTeamMission({ name: 'Host Ambassador', rarity: 'Common', keyStat: 'Attack', primaryRewards: 'Officer XP', secondaryRewards: 'Service Awards', criticalRewards: 'Latinum', traits: ['Charismatic', 'Diplomat', '', ''] }),
    new AwayTeamMission({ name: 'Imperial Strategy', rarity: 'Rare', keyStat: 'Health', primaryRewards: 'Away Teams Credits', secondaryRewards: '', criticalRewards: 'Romulan Credits', traits: ['Leader', 'Manipulative', 'Tactical', 'Warrior'] }),
    new AwayTeamMission({ name: 'Investigate Borg Signal', rarity: 'Epic', keyStat: 'Health', primaryRewards: 'Away Teams Credits', secondaryRewards: '', criticalRewards: 'Ten of Ten Shards', traits: ['Specialist', 'Analytical', 'Miner', 'Assimilated'] }),
    new AwayTeamMission({ name: 'Lead Expedition', rarity: 'Uncommon', keyStat: 'Defense', primaryRewards: 'Away Teams Credits', secondaryRewards: '', criticalRewards: 'Away Teams Credits', traits: ['Impulsive', 'Intimidating', 'Miner', 'Survivor'] }),
    new AwayTeamMission({ name: 'Low Orbit Flyby', rarity: 'Common', keyStat: 'Defense', primaryRewards: 'Axionic Biochips', secondaryRewards: 'Service Awards', criticalRewards: 'Latinum', traits: ['Pilot', '', '', ''] }),
    new AwayTeamMission({ name: 'Mek\'ba Judiciary', rarity: 'Uncommon', keyStat: 'Attack', primaryRewards: 'Klingon Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Klingon Credits', traits: ['Advisor', 'Chancellor', 'Security', ''] }),
    new AwayTeamMission({ name: 'Meridian Shipment (Incomplete)', rarity: '', keyStat: '', primaryRewards: '', secondaryRewards: '', criticalRewards: '', traits: ['', '', '', ''] }),
    new AwayTeamMission({ name: 'Methodical Ambush', rarity: 'Epic', keyStat: 'Attack', primaryRewards: 'G4 Common Battleship Parts', secondaryRewards: 'Service Awards', criticalRewards: 'Pilum Blueprints', traits: ['Intimidating', 'Mastermind', 'Tactical', 'Warrior'] }),
    new AwayTeamMission({ name: 'Observing Kolinahr', rarity: 'Rare', keyStat: 'Health', primaryRewards: 'Federation Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Federation Credits', traits: ['Calculated', 'Analytical', 'Dedicated', ''] }),
    new AwayTeamMission({ name: 'Officer Training', rarity: 'Uncommon', keyStat: 'Health', primaryRewards: 'Trait XP', secondaryRewards: '', criticalRewards: 'Away Teams Credits', traits: ['Impulsive', 'Patriotic', 'Resourceful', 'Uncompromising'] }),
    new AwayTeamMission({ name: 'Ore Contractor', rarity: 'Uncommon', keyStat: 'Health', primaryRewards: 'Raw Ore', secondaryRewards: 'Service Awards', criticalRewards: 'Common Ore', traits: ['Miner', 'Pilot', 'Assimilated', ''] }),
    new AwayTeamMission({ name: 'Peace Treaty', rarity: 'Epic', keyStat: 'Defense', primaryRewards: 'Ultra Recruit Tokens', secondaryRewards: 'Service Awards', criticalRewards: 'Data/Kras Shards', traits: ['Leader', 'Specialist', 'Charismatic', 'Diplomat'] }),
    new AwayTeamMission({ name: 'Peacekeeping Initiative', rarity: 'Rare', keyStat: 'Defense', primaryRewards: 'Premium Recruit Tokens', secondaryRewards: 'Service Awards', criticalRewards: 'Azetbur Shards', traits: ['Charming', 'Dedicated', 'Diplomat', 'Uncompromising'] }),
    new AwayTeamMission({ name: 'Planet Site Shipyard', rarity: 'Epic', keyStat: 'Defense', primaryRewards: 'G4 Common Explorer Parts', secondaryRewards: 'Service Awards', criticalRewards: 'Newton Blueprints', traits: ['Admiral', 'Android', 'Physicist', 'Engineer'] }),
    new AwayTeamMission({ name: 'Planetary Survey', rarity: 'Rare', keyStat: 'Attack', primaryRewards: 'Premium Recruit Tokens', secondaryRewards: 'Service Awards', criticalRewards: 'Moreau/Livis/Azetbur Shards', traits: ['Miner', 'Scientist', 'Surveyor', ''] }),
    new AwayTeamMission({ name: 'Political Espionage', rarity: 'Rare', keyStat: 'Attack', primaryRewards: 'Romulan Credits', secondaryRewards: 'Service Awards', criticalRewards: 'Romulan Ship Blueprints', traits: ['Manipulative', 'Ruthless', 'Deceptive', 'Spy'] }),
    new AwayTeamMission({ name: 'R\'uustai Ceremony', rarity: 'Rare', keyStat: 'Health', primaryRewards: 'Klingon Credits', secondaryRewards: 'Service Awards', criticalRewards: 'Klingon Ship Blueprints', traits: ['Dedicated', 'Reliable', 'Warrior', ''] }),
    new AwayTeamMission({ name: 'Rescue Attempt (ops <20)', rarity: 'Uncommon', keyStat: 'Attack', primaryRewards: 'Repair Speedups', secondaryRewards: '', criticalRewards: 'Speedups', traits: ['Doctor', 'Pilot', '', ''] }),
    new AwayTeamMission({ name: 'Rescue Attempt (ops 20+)', rarity: 'Uncommon', keyStat: 'Attack', primaryRewards: 'Service Awards', secondaryRewards: 'Repair Speedups', criticalRewards: 'Repair Speedups', traits: ['Doctor', 'Warrior', 'Pilot', ''] }),
    new AwayTeamMission({ name: 'Research and Development', rarity: 'Rare', keyStat: 'Defense', primaryRewards: 'Away Teams Credits', secondaryRewards: '', criticalRewards: 'Federation Credits', traits: ['Focused', 'Charismatic', 'Physicist', 'Scientist'] }),
    new AwayTeamMission({ name: 'Rite of MajQa', rarity: 'Rare', keyStat: 'Defense', primaryRewards: 'Klingon Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Klingon Credits', traits: ['Chancellor', 'Warrior', '', ''] }),
    new AwayTeamMission({ name: 'Salvage Operation (Battleship)', rarity: 'Common', keyStat: 'Attack', primaryRewards: 'Broken Battleship Parts', secondaryRewards: 'Service Awards', criticalRewards: 'Uncommon G4 Battleship Parts', traits: ['Genius', 'Assimilated', 'Engineer', 'Resourceful'] }),
    new AwayTeamMission({ name: 'Salvage Operation (Explorer)', rarity: 'Common', keyStat: 'Attack', primaryRewards: 'Broken Explorer Parts', secondaryRewards: 'Service Awards', criticalRewards: 'Uncommon G4 Explorer Parts', traits: ['Android', 'Genius', 'Engineer', 'Resourceful'] }),
    new AwayTeamMission({ name: 'Salvage Operation (Interceptor)', rarity: 'Common', keyStat: 'Attack', primaryRewards: 'Broken Interceptor Parts', secondaryRewards: 'Service Awards', criticalRewards: 'Uncommon G4 Interceptor Parts', traits: ['Cybernetic', 'Genius', 'Engineer', 'Resourceful'] }),
    new AwayTeamMission({ name: 'Salvage Operation (Survey)', rarity: 'Common', keyStat: 'Attack', primaryRewards: 'Broken Survey Parts', secondaryRewards: 'Service Awards', criticalRewards: 'Uncommon G4 Survey', traits: ['Genius', 'Augment', 'Engineer', 'Resourceful'] }),
    new AwayTeamMission({ name: 'Scientific Breakthrough (ops <30)', rarity: 'Common', keyStat: 'Health', primaryRewards: 'Service Awards', secondaryRewards: '', criticalRewards: 'Latinum', traits: ['Scientist', '', '', ''] }),
    new AwayTeamMission({ name: 'Scientific Breakthrough (ops 30+)', rarity: 'Common', keyStat: 'Health', primaryRewards: 'Officer XP', secondaryRewards: 'Service Awards', criticalRewards: 'Latinum', traits: ['Physicist', 'Engineer', 'Inventor', 'Scientist'] }),
    new AwayTeamMission({ name: 'Senate Hearing', rarity: 'Uncommon', keyStat: 'Health', primaryRewards: 'Romulan Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Romulan Credits', traits: ['Analytical', 'Charismatic', 'Patriotic', ''] }),
    new AwayTeamMission({ name: 'Sensor Analysis (ops <20)', rarity: 'Common', keyStat: 'Defense', primaryRewards: 'Ship XP', secondaryRewards: 'Axionic Chips', criticalRewards: 'Latinum', traits: ['Engineer', 'Scientist', '', ''] }),
    new AwayTeamMission({ name: 'Smuggle Cybernetics', rarity: 'Epic', keyStat: 'Attack', primaryRewards: 'Away Teams Credits', secondaryRewards: '', criticalRewards: 'Data Shards', traits: ['Adaptable', 'Rogue', 'Physicist', 'Thief'] }),
    new AwayTeamMission({ name: 'Stellar Cartography', rarity: 'Common', keyStat: 'Health', primaryRewards: 'Rare Star Charts', secondaryRewards: 'Service Awards', criticalRewards: 'Rare Star Charts', traits: ['Explorer', '', '', ''] }),
    new AwayTeamMission({ name: 'Subterranean Excursion (ops <30)', rarity: 'Uncommon', keyStat: 'Attack', primaryRewards: 'Raw Materials', secondaryRewards: '', criticalRewards: 'Uncommon Materials', traits: ['Survivor', 'Augment', 'Surveyor', ''] }),
    new AwayTeamMission({ name: 'Subterranean Excursion (ops 30+)', rarity: 'Uncommon', keyStat: 'Attack', primaryRewards: 'Raw Materials', secondaryRewards: '', criticalRewards: 'Uncommon Materials', traits: ['Cautious', 'Survivor', 'Augment', 'Surveyor'] }),
    new AwayTeamMission({ name: 'Tactical Simulator', rarity: 'Common', keyStat: 'Defense', primaryRewards: 'Axionic Biochips', secondaryRewards: 'Service Awards', criticalRewards: 'Latinum', traits: ['Analytical', 'Tactical', '', ''] }),
    new AwayTeamMission({ name: 'Tal Shiar Inquisition', rarity: 'Epic', keyStat: 'Attack', primaryRewards: 'Romulan Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Romulan Credits', traits: ['Relentless', 'Specialist', 'Patriotic', 'Ruthless'] }),
    new AwayTeamMission({ name: 'Terraforming Expedition', rarity: 'Common', keyStat: 'Defense', primaryRewards: 'Federation Rep', secondaryRewards: '', criticalRewards: 'Federation Credits', traits: ['Miner', 'Inventor', 'Engineer', ''] }),
    new AwayTeamMission({ name: 'Time Heist', rarity: 'Epic', keyStat: 'Attack', primaryRewards: 'Away Teams Credits', secondaryRewards: '', criticalRewards: 'Michael Burnham Shards', traits: ['Mastermind', 'Criminal', 'Genius', 'Escape Artist'] }),
    new AwayTeamMission({ name: 'Undercover Mission', rarity: 'Rare', keyStat: 'Attack', primaryRewards: 'Romulan Rep', secondaryRewards: 'Service Awards', criticalRewards: 'Romulan Credits', traits: ['Charismatic', 'Deceptive', 'Resourceful', 'Spy'] }),
    new AwayTeamMission({ name: 'Wargames (Incomplete)', rarity: '', keyStat: '', primaryRewards: '', secondaryRewards: '', criticalRewards: '', traits: ['', '', '', ''] }),
    new AwayTeamMission({ name: 'Warzone Reclamation', rarity: 'Epic', keyStat: 'Health', primaryRewards: 'G4 Interceptor Parts', secondaryRewards: 'Service Awards', criticalRewards: 'Korinar BPs', traits: ['Specialist', 'Trader', 'Charismatic', 'Assimilated'] }),
    new AwayTeamMission({ name: 'Xenoarchaeology Trip', rarity: 'Common', keyStat: 'Attack', primaryRewards: 'Officer XP', secondaryRewards: 'Service Awards', criticalRewards: 'Latinum', traits: ['Archaeologist', '', '', ''] })
];
