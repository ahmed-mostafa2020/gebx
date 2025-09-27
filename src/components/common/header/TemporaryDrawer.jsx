"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const TemporaryDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations('common');
  const locale = useLocale();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navLinks = [
    { name: t('about'), link: `/${locale}/about-us` },
    { name: t('products'), link: `/${locale}/products` },
    { name: "Industries", link: `/${locale}/industries` },
    { name: "Services", link: `/${locale}/services` },
    { name: t('news'), link: `/${locale}/news` },
    { name: "Careers", link: `/${locale}/careers` },
    { name: t('contact'), link: `/${locale}/contact-us` },
  ];

  const DrawerList = (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((navLink, index) => (
          <ListItem key={navLink.name} disablePadding>
            <Link href={navLink.link} className="w-full">
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={navLink.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="text-white">
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
