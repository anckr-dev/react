import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "../shared/common/Image";
import { oval } from "@/assets/image/images";

const MaterialTable = () => {
	return (
		<TableContainer>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="left">Jobs</TableCell>
						<TableCell align="center">Active candidates</TableCell>
						<TableCell align="center">Applicants</TableCell>
						<TableCell align="center">Spent</TableCell>
						<TableCell align="center">Posted</TableCell>
						<TableCell align="right">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow style={{ borderBottom: "none" }} component={Paper} className="table-cells">
						<TableCell align="left">
							<div className="table-listing">
								<Image src={oval} alt="hrr" width={40} />
								<div className="body-job-text">User Experience Researcher</div>
							</div>
						</TableCell>
						<TableCell align="center">Active candidates</TableCell>
						<TableCell align="center">Applicants</TableCell>
						<TableCell align="center">Spent</TableCell>
						<TableCell align="center">Posted</TableCell>
						<TableCell align="right">Status</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MaterialTable;
