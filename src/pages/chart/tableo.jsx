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
  
  const Tableo = () => {
    
    const dummyData = [
      {
        id: 1,
        name: "Hourly N.G.",
        "1am": "15ml", "2am": "20ml", "3am": "25ml", "4am": "30ml", "5am": "35ml", "6am": "20ml", "7am": "40ml", "8am": "45ml", "9am": "50ml", "10am": "30ml", "11am": "25ml", "12mid": "15ml", "1pm": "20ml", "2pm": "35ml", "3pm": "40ml", "4pm": "25ml", "5pm": "20ml", "6pm": "30ml", "7pm": "35ml", "8pm": "40ml", "9pm": "45ml", "10pm": "35ml", "11pm": "25ml", "12noon": "250ml"
      },
      {
        id: 2,
        name: "Cumulative N.G.",
        "1am": "15ml", "2am": "35ml", "3am": "60ml", "4am": "90ml", "5am": "125ml", "6am": "145ml", "7am": "185ml", "8am": "230ml", "9am": "280ml", "10am": "310ml", "11am": "335ml", "12mid": "350ml", "1pm": "370ml", "2pm": "405ml", "3pm": "445ml", "4pm": "470ml", "5pm": "490ml", "6pm": "520ml", "7pm": "555ml", "8pm": "595ml", "9pm": "640ml", "10pm": "675ml", "11pm": "700ml", "12noon": "950ml"
      },
      {
        id: 3,
        name: "Hourly Urine",
        "1am": "100ml", "2am": "120ml", "3am": "130ml", "4am": "110ml", "5am": "90ml", "6am": "80ml", "7am": "70ml", "8am": "60ml", "9am": "50ml", "10am": "40ml", "11am": "30ml", "12mid": "40ml", "1pm": "50ml", "2pm": "60ml", "3pm": "70ml", "4pm": "80ml", "5pm": "90ml", "6pm": "100ml", "7pm": "110ml", "8pm": "120ml", "9pm": "130ml", "10pm": "140ml", "11pm": "150ml", "12noon": "1000ml"
      },
      {
        id: 4,
        name: "Cumulative Urine",
        "1am": "100ml", "2am": "220ml", "3am": "350ml", "4am": "460ml", "5am": "550ml", "6am": "630ml", "7am": "700ml", "8am": "760ml", "9am": "810ml", "10am": "850ml", "11am": "880ml", "12mid": "920ml", "1pm": "970ml", "2pm": "1030ml", "3pm": "1100ml", "4pm": "1180ml", "5pm": "1270ml", "6pm": "1370ml", "7pm": "1480ml", "8pm": "1600ml", "9pm": "1730ml", "10pm": "1870ml", "11pm": "2020ml", "12noon": "3020ml"
      },
    ];
    const totalOutputRow = {
      id: 5,
      name: "Total Output",
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
    dummyData.push(totalOutputRow);
  
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
        <Box >
      <Table data={{ nodes: dummyData }} theme={theme} layout={{ custom: true }} >
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
                  <Cell>{item["1am"]}</Cell>
                  <Cell>{item["2am"]}</Cell>
                  <Cell>{item["3am"]}</Cell>
                  <Cell>{item["4am"]}</Cell>
                  <Cell>{item["5am"]}</Cell>
                  <Cell>{item["6am"]}</Cell>
                  <Cell>{item["7am"]}</Cell>
                  <Cell>{item["8am"]}</Cell>
                  <Cell>{item["9am"]}</Cell>
                  <Cell>{item["10am"]}</Cell>
                  <Cell>{item["11am"]}</Cell>
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
  
  export default Tableo;
  