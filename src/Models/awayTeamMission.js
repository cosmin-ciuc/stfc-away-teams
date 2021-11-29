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
