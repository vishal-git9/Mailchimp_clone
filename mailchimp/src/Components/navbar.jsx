import {
  Image,
  transition,
} from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { AuthContext } from "../Context/Authcontext";
import { useRef,useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProductSidebar from "./sidebar"
import AvatarButton from "./Avatar";
import { useContext } from "react";
import LoginButton from "./LoginButton";
// export default function Navbar() {
//   // consuming the context
//   const{AuthStatus} = useContext(AuthContext)
//   const{isAuth,data} = AuthStatus
//   const navigate = useNavigate()
//   // const getel = useRef(null)
//   // const [isHovering, setIsHovering] = useState(false);
//   // for pages
//   const LoginPage = ()=>{
//     return navigate("/login")
//   }
//   const SignupPage = ()=>{
//     return navigate("/pricing")
//   }
//   const ProductsPage = ()=>{
//     return navigate("/")
//   }
//   const PricingPage = ()=>{
//     return navigate("/pricing")
//   }

  

//   return (
//     <Box width="100%" flexDirection={"column"}>
//       <Box width={"100%"}
//       display="flex"
//       justifyContent={"space-around"}
//       padding="20px 0px"
//       alignItems={"center"}
//       fontWeight="500"
//       position={"fixed"} zIndex="2" backgroundColor={"white"}>
        
//       <Flex justifyContent="space-around" gap={"40px"}>
//         <Text
//           _hover={{
//             color: "blue",
//             textDecoration: "underline",
//             cursor: "pointer",
//           }} 
//           ref={Products} onClick={ProductsPage}>
//           Products
//         </Text>
//         <Text
//           _hover={{
//             color: "blue",
//             textDecoration: "underline",
//             cursor: "pointer",
//           }}
//           ref={Inspiration}
//           // onClick={getInspiration}
//         >
//           Inspiration
//         </Text>
//         <Text
//           _hover={{
//             color: "blue",
//             textDecoration: "underline",
//             cursor: "pointer",
//           }} 
//           ref={Resources}
//           // onClick={getResources}
//         >
//           Resources
//         </Text>
//         <Text
//           _hover={{
//             color: "blue",
//             textDecoration: "underline",
//             cursor: "pointer",
//           }} 
//           // onClick={getPricing}
//           onClick={PricingPage}
//         >
//           Pricing
//         </Text>
//       </Flex>
//       <Stack>
//         <Image src="https://i.ibb.co/jkyhkNB/Light-mail.png" width={"150px"} height="50px" objectFit={"cover"}></Image>
//         </Stack>
//       </Box>
//       {/* <Box position={"sticky"} zIndex="1000" top={"0"} left="0" width={"50%"} > */}
//       {/* {isHovering && (<ProductSidebar isHovering={isHovering}/>)} */}
//       </Box>
    
//   );
// }


export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const{AuthStatus} = useContext(AuthContext)
  const{isAuth,data} = AuthStatus
  const navigate = useNavigate()
  const LoginPage = ()=>{
    return navigate("/login")
  }
  const SignupPage = ()=>{
    return navigate("/pricing")
  }
  const ProductsPage = ()=>{
    return navigate("/")
  }
  const PricingPage = ()=>{
    return navigate("/pricing")
  }
  return (
    <Box position={"fixed"} width="100%" zIndex={"1000"}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Stack onClick={ProductsPage} cursor="pointer">
          <Image src="https://i.ibb.co/jkyhkNB/Light-mail.png" width={"150px"} height="50px" objectFit={"cover"}></Image>
          </Stack>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {isAuth?<AvatarButton/>:<LoginButton LoginPage={LoginPage} SignupPage={SignupPage}/>}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Products',
    children: [
      {
        label: 'Get your business online',
        subLabel: 'Take your business global',
        href: '#',
      },
      {
        label: 'Market your business',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Podcast',
        subLabel: 'get our newly podcast for business',
        href: '#',
      },
      {
        label: 'Series',
        subLabel: 'get our newly series for business',
        href: '#',
      },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
];