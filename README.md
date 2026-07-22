# Thermaltake Level 20 RGB — SignalRGB Plugin

SignalRGB plugin for the **Thermaltake Level 20 RGB keyboard**.

This plugin was reverse engineered from USB HID captures and tested on hardware with:

- Vendor ID: `0x264A`
- Product ID: `0x3017`
- HID interface: `1`
- Usage page: `0xFF00`

## Status

Stable hardware-tested release.

Working areas:

- Main keyboard and function row
- Bottom row, including Space, Right Alt, Fn, Menu, and Right Ctrl
- Navigation, arrow, numpad, and multimedia keys
- Center vertical RGB strip
- U-shaped outer underglow
- SignalRGB canvas effects and forced-color mode

## Installation

1. Close SignalRGB.
2. Copy `Thermaltake_Level20_RGB.js` into your SignalRGB user plugin directory.
3. Start SignalRGB.
4. Select **Thermaltake Level 20 RGB**.
5. Start with `Geometry Mode: Horizontal Sync`.

The exact plugin directory can vary by SignalRGB version and Windows installation.

## Device protocol

### Initialization handshake

```text
41 03
43 00 00 00 01
51 00
50 00
12 22
52 92
52 10
40 61
```

### RGB frame

Each complete RGB frame contains 11 HID reports:

- 10 reports beginning with `C0 01 0F F7`
- 1 final report beginning with `C0 01 06 F7`

The plugin preserves the tested report-index table and packet sequence.

## Important electrical-map findings

- The center vertical strip uses 11 electrical zones.
- The left outer-lighting section uses seven zones:
  `A3 → A2 → A1 → A0 → AF → AE → AD`
- The Menu / right-click key uses electrical index `0x3C`.
- The outer lighting follows a U-shaped physical layout rather than a four-sided rectangle.

See [`docs/protocol.md`](docs/protocol.md) for more detail.

## Credits

Reverse engineering, hardware captures, and testing: **Kittipatt Phatpitiphan**  
Protocol analysis and plugin development assistance: **OpenAI ChatGPT**

## License

MIT License. See [`LICENSE`](LICENSE).
