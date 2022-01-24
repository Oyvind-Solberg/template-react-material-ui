import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const rows = [
	{ name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
	{ name: 'Ice cream', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
	{ name: 'Eclair', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
	{ name: 'Cupcake', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
	{ name: 'Gingerbread', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
];

function DataDisplay() {
	return (
		<div className="DataDisplay">
			<Typography gutterBottom variant="h2">
				Data display
			</Typography>

			{/* Table */}
			<Typography gutterBottom variant="h3">
				Table
			</Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="food table">
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.fat}</TableCell>
								<TableCell align="right">{row.carbs}</TableCell>
								<TableCell align="right">{row.protein}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Divider sx={{ my: 3 }}></Divider>

			{/* Divider */}
			<Typography gutterBottom variant="h3">
				Divider
			</Typography>
			<Stack>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem eum, possimus, voluptate, minima dolorum expedita
					laboriosam pariatur maiores soluta quisquam nobis fugit similique enim
					dolorem unde nostrum rem obcaecati. Aliquid.
				</p>
				<Divider>Text divider</Divider>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe amet
					consequuntur quibusdam expedita odit non suscipit possimus nesciunt
					voluptates reiciendis, ad cum sequi dolorem blanditiis repellendus
					consequatur similique. Incidunt, id?
				</p>
			</Stack>
			<Stack direction="row">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem eum, possimus, voluptate, minima dolorum expedita
					laboriosam pariatur maiores soluta quisquam nobis fugit similique enim
					dolorem unde nostrum rem obcaecati. Aliquid.
				</p>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ marginLeft: 3, marginRight: 3 }}
				></Divider>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe amet
					consequuntur quibusdam expedita odit non suscipit possimus nesciunt
					voluptates reiciendis, ad cum sequi dolorem blanditiis repellendus
					consequatur similique. Incidunt, id?
				</p>
			</Stack>
		</div>
	);
}

export default DataDisplay;
