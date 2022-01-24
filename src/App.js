import { Outlet, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './App.css';

function App() {
	return (
		<div className="App">
			<Box sx={{ backgroundColor: 'background.default' }}>
				<AppBar position="fixed">
					<Toolbar>
						<Typography
							variant="h1"
							textAlign="center"
							sx={{ flexGrow: 1, p: 3 }}
							component="div"
						>
							Untitled App
						</Typography>
					</Toolbar>
				</AppBar>
				<Container maxWidth="lg">
					<Paper sx={{ px: 4, py: 20, minHeight: '100vh' }}>
						<Outlet />
					</Paper>
				</Container>
			</Box>
		</div>
	);
}

export default App;
