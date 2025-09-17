// StylePresets.js - Musical Style Definitions
export default class StylePresets {
    constructor() {
        this.presets = {
            chorale: { name: 'Bach Chorale', tempo: 72 },
            jazz: { name: 'Jazz Voicing', tempo: 120 },
            pop: { name: 'Pop Harmony', tempo: 120 },
            barbershop: { name: 'Barbershop', tempo: 100 }
        };
    }
    getPreset(style) {
        return this.presets[style] || this.presets.chorale;
    }
}
