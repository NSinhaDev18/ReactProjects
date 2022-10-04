import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Profile from './components/Profile';
import ProfileHeader from './components/profileHeader';

function App() {
  return (
    <div className="App">
      <Box class="personal"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 528,
          height: 328,
        },
      }}
      >
        <Paper elevation={3}>
          <ProfileHeader />
        </Paper>
      </Box>
<Box class="personal"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 528,
          height: 328,
        },
      }}
    >
  <Paper elevation={3}>
    <Profile />

    </Paper>
  
</Box>
   </div>
    
  );
}

export default App;
