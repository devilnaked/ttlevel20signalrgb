// Thermaltake Level 20 RGB Keyboard - V28 Vertical Wave Fix
// VID 0x264A / PID 0x3017
// V28: Physical 2D is now the default so vertical Canvas effects retain per-row Y phases.
// Horizontal Sync remains available as a compatibility option for strictly horizontal effects.
// Handshake and ACK flow are inherited from the proven V9/V10 implementation.
// 46 alphanumeric keys are calibrated from Reactive USB capture; remaining keys are provisional.

export function Name() { return "Thermaltake Level 20 RGB (V28 Vertical Wave Fix)"; }
export function Publisher() { return "Kittipatt Phatpitiphan / OpenAI"; }
export function VendorId() { return 0x264A; }
export function ProductId() { return 0x3017; }
export function Type() { return "Hid"; }
export function DeviceType() { return "keyboard"; }
export function Size() { return [23, 7]; }
export function DefaultPosition() { return [120, 80]; }
export function DefaultScale() { return 8.0; }

/* global LightingMode:readonly GeometryMode:readonly ForcedColor:readonly UserBrightness:readonly ShutdownColor:readonly */

export function ControllableParameters() {
    return [
        { property: "LightingMode", group: "lighting", label: "Lighting Mode", type: "combobox", values: ["Canvas", "Forced"], default: "Canvas" },
        { property: "GeometryMode", group: "lighting", label: "Geometry Mode", type: "combobox", values: ["Physical 2D", "Horizontal Sync"], default: "Physical 2D" },
        { property: "ForcedColor", group: "lighting", label: "Forced Color", type: "color", min: "0", max: "360", default: "#FF0000" },
        { property: "UserBrightness", group: "lighting", label: "Brightness", type: "number", min: "0", max: "100", step: "1", default: "100" },
        { property: "ShutdownColor", group: "lighting", label: "Shutdown Color", type: "color", min: "0", max: "360", default: "#000000" }
    ];
}

const ledNames = [
    "Esc",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
    "Tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "[",
    "]",
    "\\",
    "Caps Lock",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ";",
    "'",
    "Enter",
    "Left Shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    ",",
    ".",
    "/",
    "Right Shift",
    "Left Ctrl",
    "Left Win",
    "Left Alt",
    "Space",
    "Right Alt",
    "Fn",
    "Menu",
    "Right Ctrl",
    "LED 0x66",
    "LED 0x67",
    "LED 0x6B",
    "LED 0x38",
    "LED 0x39",
    "LED 0x78",
    "LED 0x3A",
    "LED 0x3B",
    "LED 0x7A",
    "LED 0x3D",
    "LED 0x3F",
    "LED 0x3E",
    "LED 0x7E",
    "LED 0x48",
    "LED 0x49",
    "LED 0x50",
    "LED 0x51",
    "LED 0x4A",
    "LED 0x4B",
    "LED 0x52",
    "LED 0x53",
    "LED 0x4C",
    "LED 0x4D",
    "LED 0x54",
    "LED 0x4E",
    "LED 0x4F",
    "LED 0x56",
    "LED 0x55",
    "LED 0x7F",
    "LED 0x57",
    "Around 0xB1",
    "Around 0xB2",
    "LED 0x44",
    "LED 0x75",
    "LED 0x45",
    "LED 0x76",
    "LED 0x46",
    "Around 0x86",
    "Around 0x87",
    "Around 0x85",
    "Around 0x84",
    "Around 0x83",
    "Around 0x82",
    "Around 0x8F",
    "Around 0x8E",
    "Around 0x8D",
    "Around 0x8C",
    "Around 0x8B",
    "Around 0xA3",
    "Around 0xA2",
    "Around 0xA1",
    "Around 0xA0",
    "Around 0xAF",
    "Around 0xAE",
    "Around 0xAD",
    "Around 0xAC",
    "Around 0xAB",
    "Around 0xAA",
    "Around 0xA9",
    "Around 0xA8",
    "Around 0xB7",
    "Around 0xB6",
    "Around 0xB5",
    "Around 0xB4",
    "Around 0xB3",
    "Around 0x8A",
    "Around 0x89",
    "Around 0x88",
    "Around 0x97",
    "Around 0x96",
    "Around 0x95",
    "Around 0x94",
    "Around 0x93",
    "Around 0x92",
    "Around 0x91",
    "Around 0x90",
    "Around 0x9F",
    "Around 0x9A",
    "Around 0x99",
    "Around 0x98",
    "Around 0xA7",
    "Around 0xA6"
];
const ledPositions = [
    [17, 0],
    [17, 1],
    [17, 2],
    [17, 3],
    [18, 0],
    [18, 1],
    [18, 2],
    [11, 0],
    [11, 1],
    [11, 2],
    [21, 3],
    [21, 4],
    [21, 5],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [9, 1],
    [10, 1],
    [11, 1],
    [12, 1],
    [13, 1],
    [14, 1],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
    [8, 2],
    [9, 2],
    [10, 2],
    [11, 2],
    [12, 2],
    [13, 2],
    [14, 2],
    [1, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [9, 3],
    [10, 3],
    [11, 3],
    [12, 3],
    [13, 3],
    [14, 3],
    [1, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [10, 4],
    [11, 4],
    [12, 4],
    [13, 4],
    [14, 4],
    [15, 3],
    [15, 2],
    [15, 4],
    [15, 5],
    [15, 6],
    [15, 6],
    [10, 4],
    [8, 6],
    [17, 6],
    [17, 6],
    [18, 3],
    [10, 0],
    [10, 1],
    [21, 0],
    [10, 2],
    [10, 3],
    [21, 2],
    [10, 5],
    [10, 6],
    [10, 6],
    [21, 6],
    [13, 0],
    [13, 1],
    [14, 0],
    [14, 1],
    [13, 2],
    [13, 3],
    [14, 2],
    [14, 3],
    [13, 4],
    [13, 5],
    [14, 4],
    [13, 6],
    [13, 6],
    [14, 6],
    [14, 5],
    [21, 6],
    [14, 6],
    [0, 0],
    [1, 0],
    [11, 4],
    [20, 5],
    [11, 5],
    [20, 6],
    [11, 6],
    [2, 0],
    [3, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0],
    [12, 0],
    [13, 0],
    [14, 0],
    [15, 0],
    [16, 0],
    [17, 0],
    [18, 0],
    [20, 0],
    [21, 0],
    [21, 1],
    [21, 2],
    [21, 3],
    [21, 4],
    [21, 5],
    [20, 6],
    [19, 6],
    [18, 6],
    [17, 6],
    [16, 6],
    [15, 6],
    [13, 6],
    [12, 6],
    [11, 6],
    [10, 6],
    [9, 6],
    [8, 6],
    [7, 6],
    [5, 6],
    [4, 6],
    [3, 6],
    [2, 6],
    [1, 6],
    [0, 6],
    [0, 4],
    [0, 3],
    [0, 2],
    [0, 1]
];
// Align calibrated rows to shared integer columns. This keeps the original
// 23 x 7 SignalRGB canvas and removes the artificial diagonal caused by
// shifting each keyboard row by a full canvas cell.
function setKeyPosition(name, x, y) {
    const slot = ledNames.indexOf(name);
    if (slot >= 0) ledPositions[slot] = [x, y];
}

(function applyHorizontalRows() {
    const numberRow = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="];
    for (let i = 0; i < numberRow.length; i++) setKeyPosition(numberRow[i], 1 + i, 1);
    setKeyPosition("Backspace", 14, 1);

    const qRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"];
    setKeyPosition("Tab", 1, 2);
    for (let i = 0; i < qRow.length; i++) setKeyPosition(qRow[i], 2 + i, 2);

    const aRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"];
    setKeyPosition("Caps Lock", 1, 3);
    for (let i = 0; i < aRow.length; i++) setKeyPosition(aRow[i], 2 + i, 3);
    setKeyPosition("Enter", 14, 3);

    const zRow = ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"];
    setKeyPosition("Left Shift", 1, 4);
    for (let i = 0; i < zRow.length; i++) setKeyPosition(zRow[i], 2 + i, 4);
    setKeyPosition("Right Shift", 14, 4);
})();

(function applyFunctionAndBottomRows() {
    const fRow = ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"];
    // Integer columns approximate the physical gaps between F-key groups while
    // keeping all keys on the same horizontal SignalRGB phase.
    const fX = [1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16];
    for (let i = 0; i < fRow.length; i++) setKeyPosition(fRow[i], fX[i], 0);

    // Fractional X coordinates follow the actual key-cap centres on the
    // photographed bottom row. SignalRGB accepts fractional sampling points.
    setKeyPosition("Left Ctrl", 1.0, 5);
    setKeyPosition("Left Win", 2.2, 5);
    setKeyPosition("Left Alt", 3.4, 5);
    setKeyPosition("Space", 7.5, 5);
    setKeyPosition("Right Alt", 11, 5);
    setKeyPosition("Fn", 12, 5);
    setKeyPosition("Menu", 13, 5);
    setKeyPosition("Right Ctrl", 14, 5);
})();


(function applyRightClusterAndLightingGeometry() {
    const rename = (slot, name, x, y) => {
        ledNames[slot] = name;
        ledPositions[slot] = [x, y];
    };

    // Geometry calibrated from the user's straight top-down white-light photo.
    // Canvas columns:
    //   0..14  main keyboard
    //   15     center RGB light bar
    //   16..18 navigation / arrows
    //   19..22 numpad

    // Top-right system keys, aligned above the navigation block.
    rename(74, "Print Screen", 16, 0);
    rename(75, "Scroll Lock", 17, 0);
    rename(76, "Pause",       18, 0);

    // Navigation block: 2 rows x 3 columns.
    rename(77, "Insert",    16, 1);
    rename(78, "Home",      17, 1);
    rename(79, "Page Up",   18, 1);
    rename(80, "Delete",    16, 2);
    rename(81, "End",       17, 2);
    rename(82, "Page Down", 18, 2);

    // Arrow cluster: physically lower than navigation and offset toward its left.
    rename(83, "Arrow Up",    17, 4);
    rename(84, "Arrow Left",  16, 5);
    rename(85, "Arrow Down",  17, 5);
    rename(86, "Arrow Right", 18, 5);

    // Full four-column numpad. Tall keys are sampled at their visual centers.
    rename(87,  "Num Lock",     19, 1);
    rename(88,  "Numpad /",     20, 1);
    rename(89,  "Numpad *",     21, 1);
    rename(90,  "Numpad -",     22, 1);
    rename(91,  "Numpad 7",     19, 2);
    rename(92,  "Numpad 8",     20, 2);
    rename(93,  "Numpad 9",     21, 2);
    rename(94,  "Numpad +",     22, 3);
    rename(95,  "Numpad 4",     19, 3);
    rename(96,  "Numpad 5",     20, 3);
    rename(97,  "Numpad 6",     21, 3);
    rename(98,  "Numpad 1",     19, 4);
    rename(99,  "Numpad 2",     20, 4);
    rename(100, "Numpad 3",     21, 4);
    rename(101, "Numpad Enter", 22, 5);
    rename(102, "Numpad 0",     20, 5);
    rename(103, "Numpad .",     21, 5);

    // V27 capture-confirmed decorative electrical map.
    //
    // Center strip uses exactly eleven protocol indexes:
    //   86,87,85,84,83,82,8F,8E,8D,8C,8B
    //
    // Earlier builds incorrectly added A3,A2,A1 to the center strip. The
    // Around-only right-moving wave capture proves those three indexes are the
    // upper part of the OUTER LEFT strip. That misclassification is why the
    // lower-left chassis corner never aligned regardless of coordinate tweaks.
    const auxiliaryNames = [
        "Left TT Logo", "Auxiliary Logo",
        "Media Previous", "Media Play Pause", "Media Next", "Media Mute", "Media Volume"
    ];
    const auxiliaryPositions = [
        [0, 0], [15, 0],
        [18, 0], [19, 0], [20, 0], [21, 0], [22, 0]
    ];
    for (let i = 0; i < 7; i++) {
        rename(104 + i, auxiliaryNames[i], auxiliaryPositions[i][0], auxiliaryPositions[i][1]);
    }

    // All physical center-strip segments share one horizontal phase. Their Y
    // coordinates remain available for Physical 2D mode, while buildLedColors
    // locks them to the right edge of the main keyboard in Horizontal Sync.
    for (let i = 0; i < 11; i++) rename(111 + i, `Center Strip ${i + 1}`, 15, i * 6 / 10);

    // Full U-frame recovered from the iTAKE Around-only wave capture:
    //   A3,A2,A1,A0,AF,AE,AD       left vertical (7)
    //   AC..92                     lower/front edge (19)
    //   91..A6                     right vertical (8)
    const leftSideSlots = [122, 123, 124, 125, 126, 127, 128];
    const bottomSlots = [
        129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
        139, 140, 141, 142, 143, 144, 145, 146, 147
    ];
    const rightSideSlots = [148, 149, 150, 151, 152, 153, 154, 155];

    // Every segment on the physical left wall has the same X phase in a
    // right-moving wave. Use x=1, aligned with Left Ctrl and the first bottom
    // strip segment. This reproduces the equal hue seen for A3 through AD in
    // the capture and removes the persistent lower-left phase discontinuity.
    for (let i = 0; i < leftSideSlots.length; i++) {
        const slot = leftSideSlots[i];
        ledNames[slot] = `Outer Left ${i + 1}`;
        ledPositions[slot] = [1, i * 6 / (leftSideSlots.length - 1)];
    }

    for (let i = 0; i < bottomSlots.length; i++) {
        const slot = bottomSlots[i];
        ledNames[slot] = `Outer Bottom ${i + 1}`;
        ledPositions[slot] = [1 + i * 21 / (bottomSlots.length - 1), 6];
    }

    for (let i = 0; i < rightSideSlots.length; i++) {
        const slot = rightSideSlots[i];
        ledNames[slot] = `Outer Right ${i + 1}`;
        ledPositions[slot] = [22, 6 - i * 6 / (rightSideSlots.length - 1)];
    }

})();


const horizontalPhaseKeys = new Set([
    "Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12",
    "Left Ctrl", "Left Win", "Left Alt", "Space", "Right Alt", "Fn", "Menu", "Right Ctrl",
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",
    "Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
    "Left Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Right Shift",
    "Print Screen", "Scroll Lock", "Pause",
    "Media Previous", "Media Play Pause", "Media Next", "Media Mute", "Media Volume",
    "Insert", "Home", "Page Up", "Delete", "End", "Page Down",
    "Arrow Up", "Arrow Left", "Arrow Down", "Arrow Right",
    "Num Lock", "Numpad /", "Numpad *", "Numpad -", "Numpad 7", "Numpad 8", "Numpad 9",
    "Numpad +", "Numpad 4", "Numpad 5", "Numpad 6", "Numpad 1", "Numpad 2", "Numpad 3",
    "Numpad Enter", "Numpad 0", "Numpad ."
]);
const horizontalSampleY = 3;

export function LedNames() { return ledNames; }
export function LedPositions() { return ledPositions; }

export function Validate(endpoint) {
    return endpoint.interface === 1 && endpoint.usage_page === 0xFF00;
}

const reportIndexes = [
    [0x60,0x61,0x62,0x63,0x68,0x69,0x6A,0x40,0x41,0x42,0x7B,0x7C,0x7D,0x00,0x01],
    [0x08,0x09,0x10,0x11,0x18,0x19,0x20,0x21,0x28,0x29,0x30,0x31,0x02,0x03,0x0A],
    [0x0B,0x12,0x13,0x1A,0x1B,0x22,0x23,0x2A,0x2B,0x32,0x33,0x04,0x05,0x0C,0x0D],
    [0x14,0x15,0x1C,0x1D,0x24,0x25,0x2C,0x2D,0x34,0x06,0x07,0x0E,0x0F,0x16,0x17],
    [0x1E,0x1F,0x26,0x27,0x2E,0x2F,0x5B,0x5A,0x5C,0x5D,0x5E,0x5F,0x3C,0x36,0x66],
    [0x67,0x6B,0x38,0x39,0x78,0x3A,0x3B,0x7A,0x3D,0x3F,0x3E,0x7E,0x48,0x49,0x50],
    [0x51,0x4A,0x4B,0x52,0x53,0x4C,0x4D,0x54,0x4E,0x4F,0x56,0x55,0x7F,0x57,0xB1],
    [0xB2,0x44,0x75,0x45,0x76,0x46,0x86,0x87,0x85,0x84,0x83,0x82,0x8F,0x8E,0x8D],
    [0x8C,0x8B,0xA3,0xA2,0xA1,0xA0,0xAF,0xAE,0xAD,0xAC,0xAB,0xAA,0xA9,0xA8,0xB7],
    [0xB6,0xB5,0xB4,0xB3,0x8A,0x89,0x88,0x97,0x96,0x95,0x94,0x93,0x92,0x91,0x90],
    [0x9F,0x9A,0x99,0x98,0xA7,0xA6,0x88,0x97,0x96,0x95,0x94,0x93,0x92,0x91,0x90]
];

const indexToSlot = {
    0x60: 0,
    0x61: 1,
    0x62: 2,
    0x63: 3,
    0x68: 4,
    0x69: 5,
    0x6A: 6,
    0x40: 7,
    0x41: 8,
    0x42: 9,
    0x7B: 10,
    0x7C: 11,
    0x7D: 12,
    0x00: 13,
    0x01: 14,
    0x08: 15,
    0x09: 16,
    0x10: 17,
    0x11: 18,
    0x18: 19,
    0x19: 20,
    0x20: 21,
    0x21: 22,
    0x28: 23,
    0x29: 24,
    0x30: 25,
    0x31: 26,
    0x02: 27,
    0x03: 28,
    0x0A: 29,
    0x0B: 30,
    0x12: 31,
    0x13: 32,
    0x1A: 33,
    0x1B: 34,
    0x22: 35,
    0x23: 36,
    0x2A: 37,
    0x2B: 38,
    0x32: 39,
    0x33: 40,
    0x04: 41,
    0x05: 42,
    0x0C: 43,
    0x0D: 44,
    0x14: 45,
    0x15: 46,
    0x1C: 47,
    0x1D: 48,
    0x24: 49,
    0x25: 50,
    0x2C: 51,
    0x2D: 52,
    0x34: 53,
    0x06: 54,
    0x07: 55,
    0x0E: 56,
    0x0F: 57,
    0x16: 58,
    0x17: 59,
    0x1E: 60,
    0x1F: 61,
    0x26: 62,
    0x27: 63,
    0x2E: 64,
    0x2F: 65,
    0x5B: 66,
    0x5A: 67,
    0x5C: 68,
    0x5D: 69,
    0x5E: 70,
    0x5F: 71,
    0x3C: 72,
    0x36: 73,
    0x66: 74,
    0x67: 75,
    0x6B: 76,
    0x38: 77,
    0x39: 78,
    0x78: 79,
    0x3A: 80,
    0x3B: 81,
    0x7A: 82,
    0x3D: 83,
    0x3F: 84,
    0x3E: 85,
    0x7E: 86,
    0x48: 87,
    0x49: 88,
    0x50: 89,
    0x51: 90,
    0x4A: 91,
    0x4B: 92,
    0x52: 93,
    0x53: 94,
    0x4C: 95,
    0x4D: 96,
    0x54: 97,
    0x4E: 98,
    0x4F: 99,
    0x56: 100,
    0x55: 101,
    0x7F: 102,
    0x57: 103,
    0xB1: 104,
    0xB2: 105,
    0x44: 106,
    0x75: 107,
    0x45: 108,
    0x76: 109,
    0x46: 110,
    0x86: 111,
    0x87: 112,
    0x85: 113,
    0x84: 114,
    0x83: 115,
    0x82: 116,
    0x8F: 117,
    0x8E: 118,
    0x8D: 119,
    0x8C: 120,
    0x8B: 121,
    0xA3: 122,
    0xA2: 123,
    0xA1: 124,
    0xA0: 125,
    0xAF: 126,
    0xAE: 127,
    0xAD: 128,
    0xAC: 129,
    0xAB: 130,
    0xAA: 131,
    0xA9: 132,
    0xA8: 133,
    0xB7: 134,
    0xB6: 135,
    0xB5: 136,
    0xB4: 137,
    0xB3: 138,
    0x8A: 139,
    0x89: 140,
    0x88: 141,
    0x97: 142,
    0x96: 143,
    0x95: 144,
    0x94: 145,
    0x93: 146,
    0x92: 147,
    0x91: 148,
    0x90: 149,
    0x9F: 150,
    0x9A: 151,
    0x99: 152,
    0x98: 153,
    0xA7: 154,
    0xA6: 155
};

let initialized = false;
let lastFrameHash = "";
let lastSendTime = 0;
const minimumFrameIntervalMs = 47;

export function Initialize() {
    initialized = false;
    lastFrameHash = "";
    lastSendTime = 0;
    device.clearReadBuffer();
    enterSoftwareMode();
    device.pause(50);
    initialized = true;
}

export function Render() {
    if (!initialized) return;
    const now = Date.now();
    if (now - lastSendTime < minimumFrameIntervalMs) return;

    const colors = buildLedColors();
    const hash = frameHash(colors);
    if (hash === lastFrameHash) return;

    sendPerLedFrame(colors);
    lastFrameHash = hash;
    lastSendTime = now;
}

export function Shutdown() {
    if (!initialized) return;
    const color = applyBrightness(hexToRgb(ShutdownColor));
    const colors = new Array(ledNames.length);
    for (let i = 0; i < colors.length; i++) colors[i] = color;
    sendPerLedFrame(colors);
    initialized = false;
}

function buildLedColors() {
    const colors = new Array(ledNames.length);
    if (LightingMode === "Forced") {
        const forced = applyBrightness(hexToRgb(ForcedColor));
        for (let i = 0; i < colors.length; i++) colors[i] = forced;
        return colors;
    }

    for (let i = 0; i < ledPositions.length; i++) {
        const p = ledPositions[i];
        // Main calibrated keyboard rows share one Y phase. This preserves
        // left-to-right X movement while preventing a diagonal phase offset
        // between the number, Q, A and Z rows. Decorative/around LEDs retain
        // their physical Y coordinates.
        const syncAllZones = GeometryMode !== "Physical 2D";
        const isKeyboardKey = horizontalPhaseKeys.has(ledNames[i]);
        const isCenterStrip = ledNames[i].startsWith("Center Strip");
        const isOuterStrip = ledNames[i].startsWith("Outer ");

        // The physical center bar is vertical, but visually it belongs to the
        // left-to-right keyboard wave. Always sample every bar segment from
        // the same keyboard Y phase so the effect cannot travel upward/downward.
        // V22 samples all fourteen REAL center-strip electrical slots from one
        // fixed point at the right edge of the main keyboard. Every segment gets
        // the exact same RGB triplet each frame, so no top/bottom phase exists.
        // V27 no longer needs per-slot guesses. Menu is now assigned to its
        // capture-confirmed electrical index 0x3C, and the complete left-side
        // chain is represented by its real seven indexes A3 through AD.
        const sampleX = isCenterStrip ? 14 : p[0];
        const sampleY = isCenterStrip
            ? horizontalSampleY
            : ((syncAllZones && (isKeyboardKey || isOuterStrip)) ? horizontalSampleY : p[1]);
        const sampled = device.color(sampleX, sampleY);
        const raw = sampled && sampled.length >= 3 ? [sampled[0], sampled[1], sampled[2]] : [0, 0, 0];
        colors[i] = applyBrightness(raw);
    }
    return colors;
}

function enterSoftwareMode() {
    sendCommand([0x41, 0x03]);
    sendCommand([0x43, 0x00, 0x00, 0x00, 0x01]);
    sendCommand([0x51, 0x00]);
    sendCommand([0x50, 0x00]);
    sendCommand([0x12, 0x22]);
    device.pause(30);
    sendCommand([0x52, 0x92]);
    device.pause(30);
    sendCommand([0x52, 0x10]);
    sendCommand([0x40, 0x61]);
}

function sendCommand(bytes) {
    const payload = new Array(64).fill(0x00);
    for (let i = 0; i < bytes.length; i++) payload[i] = bytes[i];
    sendPayload(payload);
    device.pause(2);
    drainAck();
}

function sendPerLedFrame(colors) {
    for (let reportNo = 0; reportNo < reportIndexes.length; reportNo++) {
        const payload = new Array(64).fill(0x00);
        payload[0] = 0xC0;
        payload[1] = 0x01;
        payload[2] = reportNo === 10 ? 0x06 : 0x0F;
        payload[3] = 0xF7;

        const indexes = reportIndexes[reportNo];
        for (let entry = 0; entry < 15; entry++) {
            const index = indexes[entry];
            const slot = indexToSlot[index];
            const color = colors[slot] || [0, 0, 0];
            const offset = 4 + entry * 4;
            payload[offset] = index;
            payload[offset + 1] = clampByte(color[0]);
            payload[offset + 2] = clampByte(color[1]);
            payload[offset + 3] = clampByte(color[2]);
        }

        sendPayload(payload);
        device.pause(2);
        drainAck();
    }
}

function drainAck() { device.read([], 65, 30); }
function sendPayload(payload) {
    const report = new Array(65).fill(0x00);
    for (let i = 0; i < 64; i++) report[i + 1] = payload[i];
    device.write(report, 65);
}

function frameHash(colors) {
    let hash = "";
    for (let i = 0; i < colors.length; i++) {
        const c = colors[i];
        hash += String.fromCharCode(c[0], c[1], c[2]);
    }
    return hash;
}
function applyBrightness(color) {
    const brightness = clamp(Number(UserBrightness), 0, 100) / 100;
    return [clampByte(color[0] * brightness), clampByte(color[1] * brightness), clampByte(color[2] * brightness)];
}
function hexToRgb(hex) {
    const normalized = String(hex || "#000000").replace("#", "");
    const match = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalized);
    if (!match) return [0, 0, 0];
    return [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)];
}
function clamp(value, min, max) {
    const numeric = Number(value);
    const safe = Number.isFinite(numeric) ? numeric : min;
    return Math.min(max, Math.max(min, safe));
}
function clampByte(value) { return Math.round(clamp(value, 0, 255)); }
