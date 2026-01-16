
import { RNG } from './core/rng.js';
import { Validator } from './utils/validator.js';

export class SlotCore {
    constructor(config) {
        this.rng = new RNG(config.seed || Date.now());
        this.validator = new Validator();
        console.log(`[SlotCore] Engine v3.5.0 initialized. Year: ${new Date().getFullYear()}`);
    }

    async spin() {
        const rawEntropy = this.rng.next();
        const isValid = this.validator.check(rawEntropy);
        
        if (!isValid) throw new Error("Security Breach Detected");

        return {
            hash: this.rng.hash(rawEntropy),
            stops: [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ],
            timestamp: Date.now()
        };
    }
}
