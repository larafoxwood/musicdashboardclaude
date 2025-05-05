# Music Platform Dashboard

A React component for visualizing music platform performance data across multiple services (Spotify, Apple Music, YouTube).

## Installation

```bash
npm install git://github.com/larafoxwood/musicdashboardclaude.git
```

Or using yarn:

```bash
yarn add git://github.com/larafoxwood/musicdashboardclaude.git
```

## Usage

```jsx
import React from 'react';
import MusicPlatformDashboard from 'musicdashboardclaude';

function App() {
  return (
    <div className="App">
      <h1>My Music Analytics</h1>
      <MusicPlatformDashboard />
    </div>
  );
}

export default App;
```

## Features

- View performance data for Spotify, Apple Music, and YouTube
- Compare metrics across platforms
- Analyze week-over-week growth
- Interactive visualizations with filtering options
- Detailed statistics summaries
- Responsive design for all screen sizes

## Data Visualization

The dashboard shows:

- **Spotify**: Clicks to service, reported streams, estimated streams, and high estimate projections
- **Apple Music**: Clicks to service and reported plays
- **YouTube**: Clicks to service and reported views

## Interactive Controls

- Toggle between Week 1, Week 2, or both weeks
- Filter by specific platforms
- See platform-specific analytics

## Requirements

- React 16.8+ (Hooks support)
- Recharts 2.x

## License

MIT
