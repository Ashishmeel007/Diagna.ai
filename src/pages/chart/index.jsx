import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


const columns = [
  { id: "input", label: "Input", minWidth: 170 },
  { id: "unitI", label: "Unit", minWidth: 70,align: "center", },
  {
    id: "output",
    label: "Output",
    minWidth: 170,
    align: "left",
  },
  {
    id: "unitO",
    label: "Unit",
    minWidth: 70,
    align: "center",
  },
];


  function createData(input,unitI, output,unitO) {
    return { input,unitI, output,unitO};
  }
  
  const rows = [
    createData("Calories","", "Cerebral Ventricular #1","43ml"),
    createData("IVF Ingredient", "1.77ml", "TF Residual", "0ml"),
    createData("Water", "100ml", "Oral Gastric", "0ml"),
    createData("Oral/Gastric Ingredient", "50ml", "Condom Cath", "1475ml"),
    createData("Blood Ingredient", "0", "Fecal Bag", "575ml"),
    createData("Calcium(ingr)", "0", "TF Residual Output", "0"),
    createData("Enternal Nutrition Ingredient", "1000ml", "", ""),
    createData("Protein", "10ml", "", ""),
    createData("Total Intake", "", "Total Output", ""),
  ];

let totalIntake = 0;
let totalOutput = 0;

rows.forEach((row) => {
  if (!isNaN(parseFloat(row.unitI))) {
    totalIntake += parseFloat(row.unitI);
  }

  if (!isNaN(parseFloat(row.unitO))) {
    totalOutput += parseFloat(row.unitO);
  }
});

rows[rows.length - 1] = createData(
  "Total Intake",
  Math.floor(totalIntake).toString() + "ml",
  "Total Output",
  Math.floor(totalOutput).toString() + "ml"
);
  
  export default function StickyHeadTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box style={{marginBottom:"50px"}}>
        <Header title="DATE" subtitle="Data of each single day" />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>

          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell 
                    key={column.id}
                    align={column.align}
                    style={{
                      backgroundColor: colors.blueAccent[700],
                      minWidth: column.minWidth,
                      borderRight:
                        index !== columns.length - 1
                          ? "1px solid #e0e0e0"
                          : "none",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            fontSize:"large",
                            borderRight:
                              index !== columns.length - 1
                                ? "1px solid #e0e0e0"
                                : "none",
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      </Box>
    );
  }