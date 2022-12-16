import { useToast } from '@chakra-ui/react';
export default function AlertLogin({title}){
    const toast = useToast()
    return(
        toast({
            title: 'Login succesful.',
            description: `welcome back ${title}`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    )
}