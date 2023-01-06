import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchBar from "material-ui-search-bar";
import { Link } from "react-router-dom";
import { useState } from "react";





export default function DenseTable() {
  let originalRows = JSON.parse(localStorage.getItem("array"));
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        style={{marginBottom:"10px"}}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Date of Birth</TableCell>
              <TableCell align="right">Time of Birth</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Reference</TableCell>
              <TableCell align="right">Documnet Path</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.dob}</TableCell>
                <TableCell align="right">{row.tob}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.refrence}</TableCell>
                <TableCell align="right">{row.document}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/">Form</Link>
    </Paper>
  );
}
