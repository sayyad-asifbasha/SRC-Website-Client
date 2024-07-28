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

function TeamCollapse(props) {
  const [open, setOpen] = React.useState(false);

  const { winnersList } = props;
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
                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    style={{ borderBottom: "none" }}
                  >
                    {winnersList.name}
                  </TableCell>

                  <TableCell align="left" style={{ borderBottom: "none" }}>
                    {
                      <SvgIcon
                        component={LinkedInIcon}
                        style={{ cursor: "pointer" }}
                      />
                    }
                  </TableCell>
                  <TableCell align="left" style={{ borderBottom: "none" }}>
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

export default function TableData(props) {
  const { event } = props;
  console.log(event);
  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "black" }}
      sx={{ "& svg": { color: "white" }, "& th": { color: "white" } }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ borderBottom: "none !important" }}>
            <TableCell />
            <TableCell
              align="left"
              style={{ fontWeight: "bold", fontSize: "1.3rem" }}
            >
              Winners
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {event && event.name !== "Hackathon"
            ? event &&
              event.winners.map((winner) => (
                <React.Fragment key={winner.rank}>
                  {<WinnersList key={winner.name} winnersList={winner} />}
                </React.Fragment>
              ))
            : event &&
              event.winners.map((winner, index) => (
                <React.Fragment key={index}>
                  <TeamCollapse winnersList={winner} />
                </React.Fragment>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
