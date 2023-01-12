import './App.css';
import {  ChakraProvider, Grid,GridItem} from '@chakra-ui/react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Body from './Components/Body';

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header"
                  "nav body"
                  "footer footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'300px 1fr'}
        h="100vh"
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='blue.500' area={'header'}>
          <Header  />
        </GridItem>
        <GridItem pl='2' bg='blue.500' area={'nav'}>
          <Nav />
        </GridItem>
        <GridItem pl='2' bg='black' area={'body'}>
          <Body />
        </GridItem>
        <GridItem pl='2' bg='blue.500' area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider >

  );
}

export default App;
