// import 'react-pro-sidebar/dist/css/styles.css';
import { useState } from "react";
import { ProSidebar, Menu, MenuItem} from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

import { tokens } from "../../theme";
import HistoryIcon from '@mui/icons-material/History';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import TimelineIcon from '@mui/icons-material/Timeline';
import BiotechIcon from '@mui/icons-material/Biotech';
import WebhookIcon from '@mui/icons-material/Webhook';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SidebarPro = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("dashboard");

  return (
    <Box
    sx={{
      position: 'fixed',  
      height:"100%",
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
    }}
    >
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <KeyboardDoubleArrowRightIcon /> : undefined}
            style={{
              margin: "20px 0 30px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h2" color={colors.blueAccent[500]}>
                  Diagna.ai
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <KeyboardDoubleArrowLeftIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"} >
            <Item
              title="Patient List"
              to="/"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="History"
              to="*"
              icon={<HistoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Vitals"
              to="*"
              icon={<TimelineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Lab Investigation"
              to="*"
              icon={<BiotechIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Neurology"
              to="*"
              icon={<WebhookIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="I/O chart"
              to="/line"
              icon={<BalanceIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Respiratory chart"
              to="*"
              icon={<FavoriteIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Drug chart"
              to="*"
              icon={<VaccinesIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              to="*"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              to="*"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              to="*"
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SidebarPro;