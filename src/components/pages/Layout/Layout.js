import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

function Layout() {
	return (
		<div className="Layout">
			<Typography gutterBottom variant="h2">
				Layout
			</Typography>

			{/* Container */}
			<Typography gutterBottom variant="h3">
				Container
			</Typography>
			<Container sx={{ bgcolor: '#cfe8fc', p: 5 }} maxWidth="md">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
				consequuntur dicta laboriosam expedita esse debitis deleniti explicabo
				enim, unde, nobis beatae. Distinctio sint, modi fugit rem voluptatibus
				quasi! Quibusdam esse corrupti sed asperiores vel molestiae ad beatae
				quia nulla, eius, nisi ut nostrum quod architecto illum praesentium
				similique! Quasi nemo repudiandae et unde nostrum inventore sint
				doloremque animi maiores, recusandae aliquam, eum provident aliquid fuga
				sapiente reiciendis voluptas excepturi. Temporibus, assumenda doloribus
				officiis ex at sit in consectetur voluptatum, quia, quam ducimus veniam
				voluptatem quo aspernatur libero amet quas dolorum inventore cupiditate
				et vel harum. Nihil ullam officiis alias quam.
			</Container>

			<Divider sx={{ my: 3 }}></Divider>

			{/* Stack */}
			<Typography gutterBottom variant="h3">
				Stack
			</Typography>

			<Stack sx={{ marginBottom: 5 }} spacing={2}>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
			</Stack>

			<Stack direction="row" spacing={2}>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
			</Stack>
		</div>
	);
}

export default Layout;
