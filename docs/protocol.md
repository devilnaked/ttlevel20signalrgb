# Protocol notes

## USB identity

| Property | Value |
|---|---:|
| Vendor ID | `0x264A` |
| Product ID | `0x3017` |
| HID interface | `1` |
| Usage page | `0xFF00` |

## Initialization

The tested software-mode handshake is:

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

## RGB transport

A complete RGB update is sent as 11 HID reports:

```text
10 × C0 01 0F F7 ...
 1 × C0 01 06 F7 ...
```

Do not change the packet sequence or report-index table without new USB-capture evidence.

## Confirmed key LED IDs from reactive captures

### Number row

| Key | ID | Key | ID |
|---|---:|---|---:|
| 1 | `0x01` | 7 | `0x19` |
| 2 | `0x08` | 8 | `0x20` |
| 3 | `0x09` | 9 | `0x21` |
| 4 | `0x10` | 0 | `0x28` |
| 5 | `0x11` | - | `0x29` |
| 6 | `0x18` | = | `0x30` |

### Q row

| Key | ID | Key | ID |
|---|---:|---|---:|
| Q | `0x03` | I | `0x22` |
| W | `0x0A` | O | `0x23` |
| E | `0x0B` | P | `0x2A` |
| R | `0x12` | [ | `0x2B` |
| T | `0x13` | ] | `0x32` |
| Y | `0x1A` | \\ | `0x33` |
| U | `0x1B` | | |

### A row

| Key | ID | Key | ID |
|---|---:|---|---:|
| A | `0x05` | J | `0x1D` |
| S | `0x0C` | K | `0x24` |
| D | `0x0D` | L | `0x25` |
| F | `0x14` | ; | `0x2C` |
| G | `0x15` | ' | `0x2D` |
| H | `0x1C` | | |

### Z row

| Key | ID | Key | ID |
|---|---:|---|---:|
| Z | `0x07` | M | `0x1F` |
| X | `0x0E` | , | `0x26` |
| C | `0x0F` | . | `0x27` |
| V | `0x16` | / | `0x2E` |
| B | `0x17` | | |
| N | `0x1E` | | |

## Final mapping corrections

- Menu / right-click key: `0x3C`
- Center vertical strip: 11 zones
- Left U-frame zones: `A3, A2, A1, A0, AF, AE, AD`

These corrections were verified using dedicated reactive and around-lighting captures.
