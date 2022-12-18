import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import ThreeTierPricing from '../Features/pricingCards'
import Pricing from '../Features/pricing'
import Commerce from '../Features/Commerce'
export default function PricingPage(){
    return(
        <Box mt={"10rem"}>
    <Tabs size='md' variant='enclosed'>
    <TabList>
        <Tab>Marketing Platform</Tab>
        <Tab>Website & Commerce</Tab>
    </TabList>
    <TabPanels>
        <TabPanel>
            <Box><Pricing/></Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Commerce/>
        </Box>
        </TabPanel>
    </TabPanels>
    </Tabs>
    </Box>
    )
}