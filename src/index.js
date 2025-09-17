// GML-Quartet V2.0 - Main Entry Point
// BULLETPROOF-9x3 Protocol Applied

import VoiceLeading from './core/VoiceLeading.js';
import HarmonyEngine from './core/HarmonyEngine.js';
import IntegrationBridge from './integration/IntegrationBridge.js';
import StylePresets from './styles/StylePresets.js';

export default class QuartetV2 {
    constructor() {
        this.voiceLeading = new VoiceLeading();
        this.harmonyEngine = new HarmonyEngine();
        this.bridge = new IntegrationBridge();
        this.styles = new StylePresets();
        console.log('GML-Quartet V2.0 initialized');
    }

    generate(options = {}) {
        const {
            key = 'C',
            progression = 'I-IV-V-I',
            style = 'chorale',
            tempo = 120
        } = options;

        try {
            const voicing = this.voiceLeading.generateVoicing(
                key, progression, style
            );
            voicing.metadata = {
                key, style, tempo,
                version: '2.0.0',
                timestamp: new Date().toISOString()
            };
            return voicing;
        } catch (error) {
            console.error('Generation failed:', error);
            return this.getFallback();
        }
    }

    getFallback() {
        return {
            soprano: [72, 72, 71, 72],
            alto: [67, 65, 67, 67],
            tenor: [64, 62, 60, 64],
            bass: [60, 53, 55, 60],
            chords: ['I', 'IV', 'V', 'I'],
            analysis: [{ status: 'fallback-used' }]
        };
    }
}
