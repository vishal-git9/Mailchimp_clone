import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
export default function CheckoutSteps() {
    let location = useLocation()
    let path = location.pathname
    console.log(path==="/checkout")
    return(
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/checkout" >Payment</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isLastChild>
        <BreadcrumbLink href="/checkout/confirmation" >Cofirmation</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>);
  }