# API Reference

## `SlotCore`
The main class for handling game logic.

### `constructor(config)`
Initializes the engine with RTP and Volatility settings.

### `spin()`
Returns a Promise that resolves to the spin result object containing:
- `hash`: SHA-3 signature
- `stops`: Array of reel positions
- `timestamp`: Unix timestamp
