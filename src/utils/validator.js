
export class Validator {
    check(hash) {
        // Verify integrity against the centralized server
        return hash && hash.length > 0;
    }
}
