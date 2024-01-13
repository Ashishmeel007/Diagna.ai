import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Team from "../chart";
import Tablepro from "../chart/table";
import Tableo from "../chart/tableo";


const Line = () => {

  return (
    <Box m="20px">
      <Box>
      <Typography variant="h4">Rishab Dev | 45,M | Bed 1</Typography>
      </Box>
      <Header title="Daily I/O Balance" />
      <Box height="50vh">
        <LineChart />
        <Team />
       <Tablepro />
       <Tableo />
      </Box>
      
    </Box>
  );
};

export default Line;