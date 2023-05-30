import {Divider, Grid, GridItem,Text} from '@chakra-ui/react'
 
const UiChakra=()=>{
    return (
<>
        <Grid
        templateAreas={{base:`'nav'
                              'wid'
                              'cont'`, md:'none'}}  templateColumns={{base:'1', md:'repeat(8,1fr)'}} templateRows={{base:'1', md:'repeat(1,auto)'}} gap={6}>
        <GridItem w='100%' area={{base:'nav' ,md:'none'}} colSpan={{base:1,md:2}} rowSpan={{base:1,md:1}} h={{base:'100',md:'300'}} bg='blue.500' >
        <Text color={'white'} fontSize="2xl">Navbar</Text>    
        </GridItem> 
        <GridItem w='100%' colSpan={{base:1,md:4}} area={{base:'cont' , md:'none'}} rowSpan={{base:1,md:1}} bg='orange.500' h={{base:'300', md:'300'}}>
            <Text color={'white'} fontSize="2xl">Content</Text>
        </GridItem>
        <GridItem w='100%' colSpan={{base:1,md:2}} area = {{base:'wid' , md:'none'}} rowSpan={{base:1,md:1}} h={{base:'100',md:'300'}} bg='red.500' >
            <Text color={'white'} fontSize="2xl">Widget
            </Text>
        </GridItem>
        {/* <GridItem bg='orange.500' h='300' w='100%' ></GridItem>
        <GridItem bg='orange.500' h='300' w='100%' ></GridItem>
        <GridItem bg='orange.500' h='300' w='100%' ></GridItem>
         */}
      </Grid>

<br />
      <Grid h='300px' templateColumns={{base:'repeat(1,1fr)', md:'repeat(3,1fr)'}} templateRows={{base:'repeat(3,1fr)', md:'repeat(3,1fr)'}} gap={6}>
<GridItem w='100%' colSpan={{base:1,md:2}} rowSpan={{base:1,md:2}} bg='purple.500'></GridItem>
<GridItem w='100%' colSpan={{base:1,md:1}} rowSpan={{base:1,md:3}} bg='red.500'></GridItem>
<GridItem w='100%' colSpan={{base:1,md:2}} rowSpan={{base:1,md:1}} bg='blue.200'></GridItem>
      </Grid>

      <h1> third</h1>

      <Grid h='300px' templateColumns={{base:'repeat(1,1fr)', md:'repeat(4,1fr)', lg:'repeat(6,1fr)'}} templateRows={{base:'repeat(6,1fr)', md:'repeat(7,1fr)', lg:'repeat(7,1fr)'}} gap={6}>
<GridItem w='100%' colSpan={{base:1,md:2,lg:3}} rowSpan={{base:1,md:2,lg:2}} bg='purple.500'></GridItem>
<GridItem w='100%' colSpan={{base:1,md:2,lg:3}} rowSpan={{base:1,md:2,lg:2}} bg='red.500'></GridItem>
<GridItem w='100%' colSpan={{base:1,md:4,lg:6}} rowSpan={{base:2,md:3,lg:3}} bg='blue.200'></GridItem>
<GridItem w='100%' colSpan={{base:1,md:4,lg:2}} rowSpan={{base:1,md:2,lg:2}} bg='red.500'></GridItem>
<GridItem w='100%' colSpan={{base:1,md:4,lg:2}} rowSpan={{base:1,md:2,lg:2}} bg='red.500'></GridItem>
<GridItem w='100%' colSpan={{base:0,md:0,lg:2}} rowSpan={{base:0,md:0,lg:2}} bg='red.500'></GridItem>

      </Grid>
      </>
    )   
}

export default UiChakra;