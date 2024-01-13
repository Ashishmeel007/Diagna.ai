import { Box } from "@mui/material";
import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
  } from "@table-library/react-table-library/table";
  import { useTheme } from "@table-library/react-table-library/theme";
  
  const Tablepro = () => {
    // Create dummy data
    const dummyData = [
      {
        id: 1,
        name: "Oral/R.T.",
        "1am": "30ml", "2am": "35ml", "3am": "25ml", "4am": "40ml", "5am": "45ml", "6am": "30ml", "7am": "50ml", "8am": "55ml", "9am": "60ml", "10am": "40ml", "11am": "35ml", "12mid": "25ml", "1pm": "30ml", "2pm": "45ml", "3pm": "55ml", "4pm": "35ml", "5pm": "30ml", "6pm": "40ml", "7pm": "50ml", "8pm": "55ml", "9pm": "60ml", "10pm": "45ml", "11pm": "35ml", "12noon": "400ml"
      },
      {
        id: 2,
        name: "Hourly Intravenous",
        "1am": "75ml", "2am": "110ml", "3am": "90ml", "4am": "150ml", "5am": "180ml", "6am": "120ml", "7am": "200ml", "8am": "220ml", "9am": "250ml", "10am": "180ml", "11am": "150ml", "12mid": "100ml", "1pm": "120ml", "2pm": "160ml", "3pm": "200ml", "4pm": "140ml", "5pm": "110ml", "6pm": "130ml", "7pm": "180ml", "8pm": "220ml", "9pm": "250ml", "10pm": "200ml", "11pm": "150ml", "12noon": "1000ml"
      },
      {
        id: 3,
        name: "Cumulative Intravenous",
        "1am": "85ml", "2am": "120ml", "3am": "100ml", "4am": "160ml", "5am": "190ml", "6am": "130ml", "7am": "210ml", "8am": "230ml", "9am": "260ml", "10am": "190ml", "11am": "160ml", "12mid": "110ml", "1pm": "130ml", "2pm": "170ml", "3pm": "210ml", "4pm": "150ml", "5pm": "120ml", "6pm": "140ml", "7pm": "190ml", "8pm": "230ml", "9pm": "260ml", "10pm": "210ml", "11pm": "160ml", "12noon": "1100ml"
      },
    ];
    const totalIntakeRow = {
      id: 4,
      name: "Total Intake",
      "1am": sumColumn("1am"),
      "2am": sumColumn("2am"),
      "3am": sumColumn("3am"),
      "4am": sumColumn("4am"),
      "5am": sumColumn("5am"),
      "6am": sumColumn("6am"),
      "7am": sumColumn("7am"),
      "8am": sumColumn("8am"),
      "9am": sumColumn("9am"),
      "10am": sumColumn("10am"),
      "11am": sumColumn("11am"),
      "12mid": sumColumn("12mid"),
      "1pm": sumColumn("1pm"),
      "2pm": sumColumn("2pm"),
      "3pm": sumColumn("3pm"),
      "4pm": sumColumn("4pm"),
      "5pm": sumColumn("5pm"),
      "6pm": sumColumn("6pm"),
      "7pm": sumColumn("7pm"),
      "8pm": sumColumn("8pm"),
      "9pm": sumColumn("9pm"),
      "10pm": sumColumn("10pm"),
      "11pm": sumColumn("11pm"),
      "12noon": sumColumn("12noon"),
    };

    function sumColumn(time) {
      return dummyData.reduce((sum, row) => sum + parseInt(row[time] || 0, 10), 0) + "ml";
    }
    dummyData.push(totalIntakeRow);
  
    
    const theme = useTheme({
      Table: `
          --data-table-library_grid-template-columns:  200px 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%  150px;
        
        `,
      BaseCell: `
          padding: 15px;
          &:nth-of-type(1) {
            left: 0px;
          }
  
          &:not(:nth-of-type(26)) {
            right: 0px;
            border-right: 1px solid #a0a8ae;
            border-left: 1px solid #a0a8ae;
            white-space: nowrap; /* Prevent text from wrapping */
            overflow: hidden;
            text-overflow: ellipsis;
          }   
        `,
      HeaderRow: `
          .th {
            border: 1px solid #a0a8ae;
            white-space: nowrap; /* Prevent text from wrapping */
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &:first-of-type {
            background-color: #a4a9fc;
          }
        `,
      Row: `
          &:not(:last-of-type) .td {
            border-bottom: 1px solid #a0a8ae;
          }
        `,
    });
  
    return (
        <Box style={{marginBottom:"50px", borderRadius:"12px"}} >
      <Table data={{ nodes: dummyData }} theme={theme} layout={{ custom: true }}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell pinLeft>Output</HeaderCell>
                <HeaderCell>1am</HeaderCell>
                <HeaderCell>2am</HeaderCell>
                <HeaderCell>3am</HeaderCell>
                <HeaderCell>4am</HeaderCell>
                <HeaderCell>5am</HeaderCell>
                <HeaderCell>6am</HeaderCell>
                <HeaderCell>7am</HeaderCell>
                <HeaderCell>8am</HeaderCell>
                <HeaderCell>9am</HeaderCell>
                <HeaderCell>10am</HeaderCell>
                <HeaderCell>11am</HeaderCell>
                <HeaderCell>12noon</HeaderCell>
                <HeaderCell>1pm</HeaderCell>
                <HeaderCell>2pm</HeaderCell>
                <HeaderCell>3pm</HeaderCell>
                <HeaderCell>4pm</HeaderCell>
                <HeaderCell>5pm</HeaderCell>
                <HeaderCell>6pm</HeaderCell>
                <HeaderCell>7pm</HeaderCell>
                <HeaderCell>8pm</HeaderCell>
                <HeaderCell>9pm</HeaderCell>
                <HeaderCell>10pm</HeaderCell>
                <HeaderCell>11pm</HeaderCell>
                <HeaderCell pinRight>12mid</HeaderCell>
              </HeaderRow>
            </Header>
  
            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell pinLeft>{item.name}</Cell>
                  <Cell>{item["1am"]}   </Cell>
                  <Cell>{item["2am"]}   </Cell>
                  <Cell>{item["3am"]}   </Cell>
                  <Cell>{item["4am"]}   </Cell>
                  <Cell>{item["5am"]}   </Cell>
                  <Cell>{item["6am"]}   </Cell>
                  <Cell>{item["7am"]}   </Cell>
                  <Cell>{item["8am"]}   </Cell>
                  <Cell>{item["9am"]}   </Cell>
                  <Cell>{item["10am"]}  </Cell>
                  <Cell>{item["11am"]}  </Cell>
                  <Cell>{item["12noon"]}</Cell>
                  <Cell>{item["1pm"]}</Cell>
                  <Cell>{item["2pm"]}</Cell>
                  <Cell>{item["3pm"]}</Cell>
                  <Cell>{item["4pm"]}</Cell>
                  <Cell>{item["5pm"]}</Cell>
                  <Cell>{item["6pm"]}</Cell>
                  <Cell>{item["7pm"]}</Cell>
                  <Cell>{item["8pm"]}</Cell>
                  <Cell>{item["9pm"]}</Cell>
                  <Cell>{item["10pm"]}</Cell>
                  <Cell>{item["11pm"]}</Cell>
                  <Cell pinRight>{item["12mid"]}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
      </Box>
    );
  };
  
  export default Tablepro;
  