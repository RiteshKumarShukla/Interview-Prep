import './App.css';
import {Box, Flex }from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import AllRoutex from './Routes/AllRoutex';
function App() {
  return (
    <Box className="App">
      <Flex p='1rem' bgColor={'black'} color='white' justifyContent={'space-around'}>
        <Link to='/'>SignUP</Link>    
        <Link to='/signin'>SignIn</Link>    
        <Link to='/getProfile'>Profile</Link>    
        <Link to='/editProfile'>Edit Profile</Link>    
      </Flex>
      <AllRoutex/>
    </Box>
  );
}

export default App;
