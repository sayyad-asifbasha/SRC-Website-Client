import * as React from "react";
// import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SvgIcon } from "@mui/material";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {row.domainName}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Sub-Events
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.subEvents.map((subEvents) => (
                    <SubEve subEve={subEvents} />
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
function SubEve(props) {
  const { subEve } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          "& td": {
            fontSize: "1.25rem",
            color: "white",
          },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="right">
          {subEve.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {subEve.name !== "Hackathon" ? "Winners" : "Teams"}
              </Typography>
              <Table size="small" aria-label="purchases">
                {/* {subEve.name !== "Hackathon" ? (
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">LinkedIn</TableCell>
                      <TableCell align="left">GitHub</TableCell>
                    </TableRow>
                  </TableHead>
                ) : (
                  ""
                )} */}
                <TableBody>
                  {subEve.name !== "Hackathon"
                    ? subEve.winners.map((winner) => (
                        <React.Fragment key={winner.rank}>
                          {
                            <WinnersList
                              key={winner.name}
                              winnersList={winner}
                            />
                          }
                        </React.Fragment>
                      ))
                    : subEve.winners.map((winner, index) => (
                        <React.Fragment key={index}>
                          <TeamCollapse winnersList={winner} />
                        </React.Fragment>
                      ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
function TeamCollapse(props) {
  const [open, setOpen] = React.useState(false);

  const { winnersList } = props;
  console.log(winnersList);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {winnersList.rank.map((winner, index) => winner.teamName)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                {/* <TableHead>
                  <TableRow>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">LinkedIn</TableCell>
                    <TableCell align="left">GitHub</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  {winnersList.rank.map((winner, index) => (
                    <React.Fragment key={index}>
                      {<WinnersList key={index} winnersList={winner} />}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
function WinnersList(props) {
  const { winnersList } = props;

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Box sx={{ margin: 1 }}>
            <Table size="small" aria-label="purchases">
              <TableBody>
                <TableRow key={winnersList.name}>
                  <TableCell align="left" component="th" scope="row">
                    {winnersList.name}
                  </TableCell>

                  <TableCell align="left">
                    {
                      <SvgIcon
                        component={LinkedInIcon}
                        style={{ cursor: "pointer" }}
                      />
                    }
                  </TableCell>
                  <TableCell align="left">
                    {
                      <SvgIcon
                        component={GitHubIcon}
                        style={{ cursor: "pointer" }}
                      />
                    }
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default function TableData(props) {
  const { event } = props;

  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "black" }}
      sx={{ "& svg": { color: "white" }, "& th": { color: "white" } }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell
              align="left"
              style={{ fontWeight: "bold", fontSize: "1.3rem" }}
            >
              Domains
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {event.domains.map((row) => (
            <Row key={row.domainName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
