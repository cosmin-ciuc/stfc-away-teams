export default class Officer {
    constructor(info = {}) {
        const { name, rarity, traits } = info;

        this.name = name || '';
        this.rarity = rarity || '';
        this.traits = traits || [];
    }
}
