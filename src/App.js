import {Box} from '@mui/material'
import Drawer from './Components/Drawer'
import Header from './Components/Header'

function App() {
  return (
    <Box height='100vh' backgroundColor="primary.light">
      <Header/>
      <Drawer/>
      
    </Box>
  );
}

export default App;
