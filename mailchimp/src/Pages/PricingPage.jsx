import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import ThreeTierPricing from '../Features/pricingCards'
import Pricing from '../Features/pricing'
import Commerce from '../Features/Commerce'
export default function PricingPage(){
    return(
        <Box>
    <Tabs size='md' variant='enclosed'>
    <TabList>
        <Tab>Marketing Platform</Tab>
        <Tab>Website & Commerce</Tab>
        <Tab>Transactional Email</Tab>
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
        <TabPanel>
        <Box><ThreeTierPricing/></Box>
        </TabPanel>
    </TabPanels>
    </Tabs>
    </Box>
    )
}