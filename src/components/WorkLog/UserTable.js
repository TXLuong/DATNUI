import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
	head : {
		backgroundColor : theme.palette.common.black,
		color : theme.palette.common.white,
	},
	body : {
		fontSize : 14,
	},
}))(TableCell);

const StyledTableRow = withStyles ((theme) => ({
	root: {
		'& : nth-of-type(odd)' : {
			backgroundColor : theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData (name, timeIn, timeOut, totalTime, day){
	return {name, timeIn, timeOut, totalTime, day}
}
// const rows = [
// 	createData("Alex", "8h10", "18h10", "8h", "4-5-2021"),
// 	createData("Alex", "8h10", "18h10", "8h", "4-5-2021"),
// 	createData("Alex", "8h10", "18h10", "8h", "4-5-2021"),
// 	createData("Alex", "8h10", "18h10", "8h", "4-5-2021")
// ];

const useStyles = makeStyles({
	table : {
		minWidth : 700,
	}
	,
});

export default function UserTable (props) {
	const classes = useStyles();
	return (
		 <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Day</StyledTableCell>
            <StyledTableCell align="right">Time in</StyledTableCell>
            <StyledTableCell align="right">Time out</StyledTableCell>
            <StyledTableCell align="right">Total time &nbsp;(hour)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	);
}

	
	

	

