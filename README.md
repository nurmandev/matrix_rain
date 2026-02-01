# Matrix Rain Remotion Template

This project is a [Remotion](https://www.remotion.dev/) template specifically designed for creating a **Matrix digital rain animation**.

## 📺 Preview

|                               Preview 1                               |                               Preview 2                               |
| :-------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| [![Matrix Rain Animation 1](public/matrix_preview.png)](IMG_3537.mp4) | [![Matrix Rain Animation 2](public/matrix_preview.png)](IMG_3538.mp4) |

_(Note: Click the images above to play the videos)_

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- `npm` or `pnpm`

### Installation

```bash
npm install
```

### Development

To open the Remotion Studio and preview the animation:

```bash
npm start
```

### Rendering

To render the video to an MP4 file:

```bash
npm run build
```

## 📂 Project Structure

- **`src/components/MatrixRain.tsx`**: The core component that handles the Canvas-based Matrix rain logic.
- **`src/Root.tsx`**: The entry point where the video compositions are registered.
- **`src/Composition/`**: Contains the main scene layouts.

## 🛠️ Customization

You can customize the Matrix effect by editing `src/components/MatrixRain.tsx`. Key parameters include:

- `fontSize`: The size of the characters.
- `characters`: The string of characters used in the rain (Katakana, Latin, numbers, and symbols).
- `speed`: The falling speed of each column.
- `opacity`: The trail effect intensity.

## 📽️ Features

- **Dynamic Canvas Rendering**: Optimized for performance using the HTML5 Canvas API within the Remotion lifecycle.
- **Randomized Drops**: Each column of characters falls at a unique speed and starts at a unique offset.
- **Support for Special Characters**: Includes Japanese Katakana for that authentic Matrix feel.

---

Built with [Remotion](https://www.remotion.dev/) 🎬

## 🌟 Show your support

Give a ⭐️ if this project helped you!

[https://github.com/nurmandev/matrix_rain](https://github.com/nurmandev/matrix_rain)
