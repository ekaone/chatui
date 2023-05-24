import { VStack, IconButton, Tooltip } from "@chakra-ui/react";
import { MdDashboard, MdMail, MdSettings } from "react-icons/md";
import { HiLightningBolt, HiBell, HiTag, HiSearch } from "react-icons/hi";

import ChakraLogo from "./ChakraLogo";
import { IconInbox } from "@/icons/icon-inbox";
import { IconSearch } from "@/icons/icon-search";
import { IconHome } from "@/icons/icon-home";
import { IconSetting } from "@/icons/icon-setting";
import { IconNotification } from "@/icons/icon-notification";
import { Logo } from "@/icons/logo";

const Navigation = () => {
  return (
    <VStack p={6} justifyContent="space-between" alignItems="center" w="full">
      <VStack>
        <Logo mb={6} />
        <Tooltip label="Home" placement="right">
          <IconButton color="gray.500" icon={<IconHome />} aria-label="Home" />
        </Tooltip>
        <Tooltip label="Search" placement="right">
          <IconButton
            color="gray.500"
            icon={<IconSearch />}
            aria-label="Search"
          />
        </Tooltip>
        <Tooltip label="Notifications" placement="right">
          <IconButton
            color="gray.500"
            icon={<IconNotification />}
            aria-label="Notifications"
          />
        </Tooltip>
        <Tooltip label="Messages" placement="right">
          <IconButton
            color="gray.500"
            icon={<IconInbox />}
            aria-label="Messages"
          />
        </Tooltip>
      </VStack>
      <Tooltip label="Settings" placement="right">
        <IconButton
          color="gray.500"
          icon={<IconSetting />}
          aria-label="Settings"
        />
      </Tooltip>
    </VStack>
  );
};

export default Navigation;
