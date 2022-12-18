import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Stack,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
export default function AvatarButton({image}) {
  const {setAuthStatus} = useContext(AuthContext)
  const navigate = useNavigate()
  const Dashboard = ()=>{
    navigate("/dashboard")
  }
  const logout = ()=>{
    setAuthStatus({
      isAuth:false,
      data:null
    })
  }
  return (
    <Stack>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar name="Dan Abrahmov" src={image}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={Dashboard}>Dashboard</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
}
