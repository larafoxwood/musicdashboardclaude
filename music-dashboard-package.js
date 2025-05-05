// package.json
{
  "name": "music-platform-dashboard",
  "version": "1.0.0",
  "description": "Dashboard for visualizing music platform performance data",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d dist"
  },
  "keywords": [
    "react",
    "dashboard",
    "music",
    "spotify",
    "apple-music",
    "youtube",
    "analytics"
  ],
  "author": "Your Name",
  "license": "MIT",
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "recharts": "^2.5.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.21.0",
    "@babel/core": "^7.21.0",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6"
  }
}

// README.md
# Music Platform Dashboard

A React component for visualizing music platform performance data across multiple services (Spotify, Apple Music, YouTube).

## Installation

```bash
npm install git://github.com/yourusername/music-platform-dashboard.git
```

## Usage

```jsx
import React from 'react';
import MusicPlatformDashboard from 'music-platform-dashboard';

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

## Requirements

- React 16.8+ (Hooks support)
- Recharts 2.x

## License

MIT

// src/index.js
import MusicPlatformDashboard from './MusicPlatformDashboard';
export default MusicPlatformDashboard;

// src/MusicPlatformDashboard.js
import React, { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Line, Bar
} from 'recharts';

// Spotify Week 1 data (Apr 21 - Apr 27, 2025)
const spotifyWeek1Data = [
  { date: '2025-04-21', spotifyClicks: 1.8, spotifyReported: 3, spotifyEstimated: 1.53, spotifyHighEstimate: 2.14, week: 'Week 1' },
  { date: '2025-04-22', spotifyClicks: 4.2, spotifyReported: 4, spotifyEstimated: 3.57, spotifyHighEstimate: 4.99, week: 'Week 1' },
  { date: '2025-04-23', spotifyClicks: 6.1, spotifyReported: 8, spotifyEstimated: 5.19, spotifyHighEstimate: 7.25, week: 'Week 1' },
  { date: '2025-04-24', spotifyClicks: 7.9, spotifyReported: 5, spotifyEstimated: 6.72, spotifyHighEstimate: 9.39, week: 'Week 1' },
  { date: '2025-04-25', spotifyClicks: 9.1, spotifyReported: 6, spotifyEstimated: 7.73, spotifyHighEstimate: 10.82, week: 'Week 1' },
  { date: '2025-04-26', spotifyClicks: 14.9, spotifyReported: 4, spotifyEstimated: 12.67, spotifyHighEstimate: 17.71, week: 'Week 1' },
  { date: '2025-04-27', spotifyClicks: 15.1, spotifyReported: 4, spotifyEstimated: 12.84, spotifyHighEstimate: 17.95, week: 'Week 1' }
];

// Spotify Week 2 data (Apr 28 - May 04, 2025)
const spotifyWeek2Data = [
  { date: '2025-04-28', spotifyClicks: 6, spotifyReported: 3, spotifyEstimated: 5.1, spotifyHighEstimate: 8.4, week: 'Week 2' },
  { date: '2025-04-29', spotifyClicks: 15, spotifyReported: 10, spotifyEstimated: 12.75, spotifyHighEstimate: 21, week: 'Week 2' },
  { date: '2025-04-30', spotifyClicks: 6, spotifyReported: 9, spotifyEstimated: 5.1, spotifyHighEstimate: 8.4, week: 'Week 2' },
  { date: '2025-05-01', spotifyClicks: 9, spotifyReported: 10, spotifyEstimated: 7.65, spotifyHighEstimate: 12.6, week: 'Week 2' },
  { date: '2025-05-02', spotifyClicks: 15, spotifyReported: 7, spotifyEstimated: 12.75, spotifyHighEstimate: 21, week: 'Week 2' },
  { date: '2025-05-03', spotifyClicks: 8, spotifyReported: 8, spotifyEstimated: 6.8, spotifyHighEstimate: 11.2, week: 'Week 2' },
  { date: '2025-05-04', spotifyClicks: 18, spotifyReported: 3, spotifyEstimated: 15.3, spotifyHighEstimate: 25.2, week: 'Week 2' }
];

// Apple Music data for both weeks
const appleMusicWeek1Data = [
  { date: '2025-04-21', appleClicks: 0.6, appleReported: 1.1, week: 'Week 1' },
  { date: '2025-04-22', appleClicks: 1.4, appleReported: 1.7, week: 'Week 1' },
  { date: '2025-04-23', appleClicks: 0.3, appleReported: 0.3, week: 'Week 1' },
  { date: '2025-04-24', appleClicks: 0.7, appleReported: 0.8, week: 'Week 1' },
  { date: '2025-04-25', appleClicks: 3.3, appleReported: 3.6, week: 'Week 1' },
  { date: '2025-04-26', appleClicks: 3.7, appleReported: 4.2, week: 'Week 1' },
  { date: '2025-04-27', appleClicks: 6.3, appleReported: 6.3, week: 'Week 1' }
];

const appleMusicWeek2Data = [
  { date: '2025-04-28', appleClicks: 3, appleReported: 1, week: 'Week 2' },
  { date: '2025-04-29', appleClicks: 3, appleReported: 3, week: 'Week 2' },
  { date: '2025-04-30', appleClicks: 0, appleReported: 1, week: 'Week 2' },
  { date: '2025-05-01', appleClicks: 1, appleReported: 3, week: 'Week 2' },
  { date: '2025-05-02', appleClicks: 6, appleReported: 1, week: 'Week 2' },
  { date: '2025-05-03', appleClicks: 7, appleReported: 10, week: 'Week 2' },
  { date: '2025-05-04', appleClicks: 3, appleReported: null, week: 'Week 2' }
];

// YouTube data for both weeks
const youtubeWeek1Data = [
  { date: '2025-04-21', youtubeClicks: 0.6, youtubeReported: 1.3, week: 'Week 1' },
  { date: '2025-04-22', youtubeClicks: 1.4, youtubeReported: 2.7, week: 'Week 1' },
  { date: '2025-04-23', youtubeClicks: 3.6, youtubeReported: 4.2, week: 'Week 1' },
  { date: '2025-04-24', youtubeClicks: 4.4, youtubeReported: 5.2, week: 'Week 1' },
  { date: '2025-04-25', youtubeClicks: 6.6, youtubeReported: 7.8, week: 'Week 1' },
  { date: '2025-04-26', youtubeClicks: 4.4, youtubeReported: 5.1, week: 'Week 1' },
  { date: '2025-04-27', youtubeClicks: 5.6, youtubeReported: 6.7, week: 'Week 1' }
];

const youtubeWeek2Data = [
  { date: '2025-04-28', youtubeClicks: 5, youtubeReported: 4, week: 'Week 2' },
  { date: '2025-04-29', youtubeClicks: 1, youtubeReported: 1, week: 'Week 2' },
  { date: '2025-04-30', youtubeClicks: 6, youtubeReported: 7, week: 'Week 2' },
  { date: '2025-05-01', youtubeClicks: 2, youtubeReported: 2, week: 'Week 2' },
  { date: '2025-05-02', youtubeClicks: 8, youtubeReported: 11, week: 'Week 2' },
  { date: '2025-05-03', youtubeClicks: 8, youtubeReported: 6, week: 'Week 2' },
  { date: '2025-05-04', youtubeClicks: 6, youtubeReported: 4, week: 'Week 2' }
];

// Combine all data for each platform
const combinedSpotifyData = [...spotifyWeek1Data, ...spotifyWeek2Data];
const combinedAppleMusicData = [...appleMusicWeek1Data, ...appleMusicWeek2Data];
const combinedYoutubeData = [...youtubeWeek1Data, ...youtubeWeek2Data];

const MusicPlatformDashboard = () => {
  const [dataView, setDataView] = useState('week2');
  const [platformView, setPlatformView] = useState('all');
  
  // Styling constants (matching the original aesthetic)
  const sectionStyle = {
    border: '1px solid #e3e8ef',
    borderRadius: '12px',
    padding: '1.5rem',
    backgroundColor: 'white',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
    marginBottom: '2rem'
  };
  
  const chartContainerStyle = {
    height: '400px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.03)'
  };
  
  const platformColors = {
    spotify: {
      bg: '#EBFBF1',
      header: '#1DB954',
      reportedFill: '#C8E6C9',
      clicksFill: '#81C784',
      estimatedFill: '#66BB6A',
      highEstimateFill: '#2E7D32'
    },
    apple: {
      bg: '#FFF1F2',
      header: '#fa233b',
      clicksFill: '#FADBD8',
      reportedFill: '#E6B0AA'
    },
    youtube: {
      bg: '#FFF1F1',
      header: '#FF0000',
      clicksFill: '#FFCDD2',
      reportedFill: '#E57373'
    }
  };
  
  // Get the data for the selected view
  const getSpotifyData = () => {
    switch(dataView) {
      case 'week1':
        return spotifyWeek1Data;
      case 'week2':
        return spotifyWeek2Data;
      case 'both':
        return combinedSpotifyData;
      default:
        return spotifyWeek2Data;
    }
  };
  
  const getAppleData = () => {
    switch(dataView) {
      case 'week1':
        return appleMusicWeek1Data;
      case 'week2':
        return appleMusicWeek2Data;
      case 'both':
        return combinedAppleMusicData;
      default:
        return appleMusicWeek2Data;
    }
  };
  
  const getYoutubeData = () => {
    switch(dataView) {
      case 'week1':
        return youtubeWeek1Data;
      case 'week2':
        return youtubeWeek2Data;
      case 'both':
        return combinedYoutubeData;
      default:
        return youtubeWeek2Data;
    }
  };
  
  // Render the Spotify chart
  const renderSpotifyChart = () => (
    <div style={{ 
      ...sectionStyle,
      backgroundColor: platformColors.spotify.bg
    }}>
      <h2 style={{ 
        margin: 0, 
        marginBottom: '1.5rem',
        fontWeight: '600', 
        color: platformColors.spotify.header, 
        textAlign: 'center', 
        fontSize: '1.5rem' 
      }}>
        Spotify Analysis{dataView === 'week1' ? ' - Week 1' : dataView === 'week2' ? ' - Week 2' : ' - Two Week Comparison'}
      </h2>
      
      <div style={chartContainerStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={getSpotifyData()} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" tick={{ fill: '#666666' }} />
            <YAxis tick={{ fill: '#666666' }} domain={[0, 28]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
              }}
              formatter={(value, name) => [value, name]}
              labelFormatter={(label) => {
                const dataPoint = getSpotifyData().find(d => d.date === label);
                return dataView === 'both' ? `${label} (${dataPoint?.week})` : label;
              }}
            />
            <Legend wrapperStyle={{ paddingTop: '10px' }} />
            <Area 
              type="monotone" 
              dataKey="spotifyReported" 
              stackId="1" 
              stroke={platformColors.spotify.reportedFill} 
              fill={platformColors.spotify.reportedFill} 
              fillOpacity={0.2} 
              name="Spotify (Reported Streams)" 
            />
            <Area 
              type="monotone" 
              dataKey="spotifyClicks" 
              stackId="1" 
              stroke={platformColors.spotify.clicksFill} 
              fill={platformColors.spotify.clicksFill} 
              fillOpacity={0.3} 
              name="Spotify (Clicks to Service)" 
            />
            <Area 
              type="monotone" 
              dataKey="spotifyEstimated" 
              stackId="1" 
              stroke={platformColors.spotify.estimatedFill} 
              fill={platformColors.spotify.estimatedFill} 
              fillOpacity={0.6} 
              name="Spotify (Estimated Streams)" 
            />
            <Area 
              type="monotone" 
              dataKey="spotifyHighEstimate" 
              stackId="1" 
              stroke={platformColors.spotify.highEstimateFill} 
              fill={platformColors.spotify.highEstimateFill} 
              fillOpacity={0.8} 
              name="Spotify (High Estimate)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
  
  // Render the Apple Music chart
  const renderAppleMusicChart = () => (
    <div style={{ 
      ...sectionStyle,
      backgroundColor: platformColors.apple.bg
    }}>
      <h2 style={{ 
        margin: 0, 
        marginBottom: '1.5rem',
        fontWeight: '600', 
        color: platformColors.apple.header, 
        textAlign: 'center', 
        fontSize: '1.5rem' 
      }}>
        Apple Music Analysis{dataView === 'week1' ? ' - Week 1' : dataView === 'week2' ? ' - Week 2' : ' - Two Week Comparison'}
      </h2>
      
      <div style={chartContainerStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={getAppleData()} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" tick={{ fill: '#666666' }} />
            <YAxis tick={{ fill: '#666666' }} domain={[0, 12]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
              }}
              formatter={(value, name) => [value, name]}
              labelFormatter={(label) => {
                const dataPoint = getAppleData().find(d => d.date === label);
                return dataView === 'both' ? `${label} (${dataPoint?.week})` : label;
              }}
            />
            <Legend wrapperStyle={{ paddingTop: '10px' }} />
            <Area 
              type="monotone" 
              dataKey="appleClicks" 
              stackId="1" 
              stroke={platformColors.apple.clicksFill} 
              fill={platformColors.apple.clicksFill} 
              fillOpacity={0.5} 
              name="Apple Music (Clicks to Service)" 
            />
            <Area 
              type="monotone" 
              dataKey="appleReported" 
              stackId="1" 
              stroke={platformColors.apple.reportedFill} 
              fill={platformColors.apple.reportedFill} 
              fillOpacity={0.7} 
              name="Apple Music (Reported Plays)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {(dataView === 'week2' || dataView === 'both') && (
        <div style={{ marginTop: '1rem', backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>
            <strong>Note:</strong> Data for May 4, 2025 is incomplete (N/A for reported plays).
          </p>
        </div>
      )}
    </div>
  );
  
  // Render the YouTube chart
  const renderYoutubeChart = () => (
    <div style={{ 
      ...sectionStyle,
      backgroundColor: platformColors.youtube.bg
    }}>
      <h2 style={{ 
        margin: 0, 
        marginBottom: '1.5rem',
        fontWeight: '600', 
        color: platformColors.youtube.header, 
        textAlign: 'center', 
        fontSize: '1.5rem' 
      }}>
        YouTube Analysis{dataView === 'week1' ? ' - Week 1' : dataView === 'week2' ? ' - Week 2' : ' - Two Week Comparison'}
      </h2>
      
      <div style={chartContainerStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={getYoutubeData()} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" tick={{ fill: '#666666' }} />
            <YAxis tick={{ fill: '#666666' }} domain={[0, 12]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
              }}
              formatter={(value, name) => [value, name]}
              labelFormatter={(label) => {
                const dataPoint = getYoutubeData().find(d => d.date === label);
                return dataView === 'both' ? `${label} (${dataPoint?.week})` : label;
              }}
            />
            <Legend wrapperStyle={{ paddingTop: '10px' }} />
            <Area 
              type="monotone" 
              dataKey="youtubeClicks" 
              stackId="1" 
              stroke={platformColors.youtube.clicksFill} 
              fill={platformColors.youtube.clicksFill} 
              fillOpacity={0.5} 
              name="YouTube (Clicks to Service)" 
            />
            <Area 
              type="monotone" 
              dataKey="youtubeReported" 
              stackId="1" 
              stroke={platformColors.youtube.reportedFill} 
              fill={platformColors.youtube.reportedFill} 
              fillOpacity={0.7} 
              name="YouTube (Reported Views)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
  
  // Summary statistics section
  const renderStatsSummary = () => {
    // Calculate totals for each platform and week
    const totalSpotifyWeek1Clicks = spotifyWeek1Data.reduce((sum, day) => sum + day.spotifyClicks, 0);
    const totalSpotifyWeek1Reported = spotifyWeek1Data.reduce((sum, day) => sum + day.spotifyReported, 0);
    const totalSpotifyWeek2Clicks = spotifyWeek2Data.reduce((sum, day) => sum + day.spotifyClicks, 0);
    const totalSpotifyWeek2Reported = spotifyWeek2Data.reduce((sum, day) => sum + day.spotifyReported, 0);
    
    const totalAppleWeek1Clicks = appleMusicWeek1Data.reduce((sum, day) => sum + day.appleClicks, 0);
    const totalAppleWeek1Reported = appleMusicWeek1Data.reduce((sum, day) => sum + day.appleReported, 0);
    const totalAppleWeek2Clicks = appleMusicWeek2Data.reduce((sum, day) => sum + day.appleClicks, 0);
    const validAppleReportedData = appleMusicWeek2Data.filter(day => day.appleReported !== null);
    const totalAppleWeek2Reported = validAppleReportedData.reduce((sum, day) => sum + day.appleReported, 0);
    
    const totalYoutubeWeek1Clicks = youtubeWeek1Data.reduce((sum, day) => sum + day.youtubeClicks, 0);
    const totalYoutubeWeek1Reported = youtubeWeek1Data.reduce((sum, day) => sum + day.youtubeReported, 0);
    const totalYoutubeWeek2Clicks = youtubeWeek2Data.reduce((sum, day) => sum + day.youtubeClicks, 0);
    const totalYoutubeWeek2Reported = youtubeWeek2Data.reduce((sum, day) => sum + day.youtubeReported, 0);
    
    // Calculate growth percentages
    const spotifyClicksGrowth = ((totalSpotifyWeek2Clicks - totalSpotifyWeek1Clicks) / totalSpotifyWeek1Clicks) * 100;
    const spotifyReportedGrowth = ((totalSpotifyWeek2Reported - totalSpotifyWeek1Reported) / totalSpotifyWeek1Reported) * 100;
    const appleClicksGrowth = ((totalAppleWeek2Clicks - totalAppleWeek1Clicks) / totalAppleWeek1Clicks) * 100;
    const appleReportedGrowth = ((totalAppleWeek2Reported - totalAppleWeek1Reported) / totalAppleWeek1Reported) * 100;
    const youtubeClicksGrowth = ((totalYoutubeWeek2Clicks - totalYoutubeWeek1Clicks) / totalYoutubeWeek1Clicks) * 100;
    const youtubeReportedGrowth = ((totalYoutubeWeek2Reported - totalYoutubeWeek1Reported) / totalYoutubeWeek1Reported) * 100;
    
    return (
      <div style={{ 
        ...sectionStyle,
        marginTop: '1rem'
      }}>
        <h2 style={{ 
          margin: 0, 
          marginBottom: '1.5rem',
          fontWeight: '600', 
          color: '#333', 
          textAlign: 'center', 
          fontSize: '1.5rem' 
        }}>
          Performance Summary
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem'
        }}>
          <div style={{ 
            backgroundColor: platformColors.spotify.bg, 
            borderRadius: '8px', 
            padding: '1rem',
            border: '1px solid #e0e0e0'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: platformColors.spotify.header, fontSize: '1.1rem' }}>Spotify</h3>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Week 1:</strong> {totalSpotifyWeek1Clicks.toFixed(2)} clicks, {totalSpotifyWeek1Reported.toFixed(2)} streams</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Week 2:</strong> {totalSpotifyWeek2Clicks.toFixed(2)} clicks, {totalSpotifyWeek2Reported.toFixed(2)} streams</p>
            <p style={{ margin: '0' }}><strong>Growth:</strong> <span style={{ color: spotifyClicksGrowth > 0 ? 'green' : 'red' }}>{spotifyClicksGrowth.toFixed(2)}%</span> clicks, <span style={{ color: spotifyReportedGrowth > 0 ? 'green' : 'red' }}>{spotifyReportedGrowth.toFixed(2)}%</span> streams</p>
          </div>
          
          <div style={{ 
            backgroundColor: platformColors.apple.bg, 
            borderRadius: '8px', 
            padding: '1rem',
            border: '1px solid #e0e0e0'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: platformColors.apple.header, fontSize: '1.1rem' }}>Apple Music</h3>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Week 1:</strong> {totalAppleWeek1Clicks.toFixed(2)} clicks, {totalAppleWeek1Reported.toFixed(2)} plays</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Week 2:</strong> {totalAppleWeek2Clicks.toFixed(2)} clicks, {totalAppleWeek2Reported.toFixed(2)} plays*</p>
            <p style={{ margin: '0' }}><strong>Growth:</strong> <span style={{ color: appleClicksGrowth > 0 ? 'green' : 'red' }}>{appleClicksGrowth.toFixed(2)}%</span> clicks, <span style={{ color: appleReportedGrowth > 0 ? 'green' : 'red' }}>{appleReportedGrowth.toFixed(2)}%</span> plays*</p>
          </div>
          
          <div style={{ 
            backgroundColor: platformColors.youtube.bg, 
            borderRadius: '8px', 
            padding: '1rem',
            border: '1px solid #e0e0e0'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: platformColors.youtube.header, fontSize: '1.1rem' }}>YouTube</h3>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Week 1:</strong> {totalYoutubeWeek1Clicks.toFixed(2)} clicks, {totalYoutubeWeek1Reported.toFixed(2)} views</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Week 2:</strong> {totalYoutubeWeek2Clicks.toFixed(2)} clicks, {totalYoutubeWeek2Reported.toFixed(2)} views</p>
            <p style={{ margin: '0' }}><strong>Growth:</strong> <span style={{ color: youtubeClicksGrowth > 0 ? 'green' : 'red' }}>{youtubeClicksGrowth.toFixed(2)}%</span> clicks, <span style={{ color: youtubeReportedGrowth > 0 ? 'green' : 'red' }}>{youtubeReportedGrowth.toFixed(2)}%</span> views</p>
          </div>
        </div>
        
        <div style={{ marginTop: '1rem', backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>
            <strong>Note:</strong> *Apple Music data for May 4, 2025 is incomplete (N/A for reported plays).
          </p>
        </div>
      </div>
    );
  };
  
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr', 
      gap: '2rem', 
      padding: '2rem',
      backgroundColor: '#f7f9fc',
      borderRadius: '12px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h1 style={{ 
          margin: 0,
          fontWeight: '600',
          color: '#333',
          fontSize: '1.75rem'
        }}>
          Music Platform Performance Dashboard
        </h1>
        
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <select
            value={dataView}
            onChange={e => setDataView(e.target.value)}
            style={{ 
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              color: '#333'
            }}
          >
            <option value="week2">Week 2 (Apr 28 - May 04)</option>
            <option value="week1">Week 1 (Apr 21 - Apr 27)</option>
            <option value="both">Both Weeks</option>
          </select>
          
          <select
            value={platformView}
            onChange={e => setPlatformView(e.target.value)}
            style={{ 
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              color: '#333'
            }}
          >
            <option value="all">All Platforms</option>
            <option value="spotify">Spotify Only</option>
            <option value="apple">Apple Music Only</option>
            <option value="youtube">YouTube Only</option>
          </select>
        </div>
      </div>
      
      {(platformView === 'all' || platformView === 'spotify') && renderSpotifyChart()}
      {(platformView === 'all' || platformView === 'apple') && renderAppleMusicChart()}
      {(platformView === 'all' || platformView === 'youtube') && renderYoutubeChart()}
      
      {renderStatsSummary()}
    </div>
  );
};

export default MusicPlatformDashboard;

// .gitignore
node_modules/
dist/
.DS_Store
.env
npm-debug.log
yarn-error.log
.vscode/

// .babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

// LICENSE
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
