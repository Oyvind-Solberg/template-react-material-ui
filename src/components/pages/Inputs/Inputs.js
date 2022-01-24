import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { checkValidity } from '../../../shared/utility';

function Inputs() {
	const [checkbox1Checked, setCheckbox1Checked] = useState(true);
	const [checkbox2Checked, setCheckbox2Checked] = useState(false);
	const [radioGroupValue, setRadioGroupValue] = useState('female');
	const [selectValue, setSelectValue] = useState('');

	const [textFieldValue, setTextFieldValue] = useState('');
	const [textFieldIsValid, setTextFieldIsValid] = useState(true);
	const handleTextFieldChange = (event) => {
		setTextFieldValue(event.target.value);
		setTextFieldIsValid(
			checkValidity(event.target.value, { minLength: 3, maxLength: 12 })
		);
	};

	return (
		<div className="Inputs">
			<Typography gutterBottom variant="h2">
				Inputs
			</Typography>

			{/* Button */}
			<Typography gutterBottom variant="h3">
				Button
			</Typography>
			<Button onClick={() => {}} variant="text">
				Text
			</Button>
			<Button onClick={() => {}} variant="contained">
				Contained
			</Button>
			<Button onClick={() => {}} variant="outlined">
				Outlined
			</Button>

			<Divider sx={{ my: 3 }}></Divider>

			{/* Button Group */}
			<Typography gutterBottom variant="h3">
				Button Group
			</Typography>
			<ButtonGroup
				variant="contained"
				aria-label="outlined primary button group"
			>
				<Button onClick={() => {}}>One</Button>
				<Button onClick={() => {}}>Two</Button>
				<Button onClick={() => {}}>Three</Button>
			</ButtonGroup>

			<Divider sx={{ my: 3 }}></Divider>

			{/* Checkbox */}
			<Typography gutterBottom variant="h3">
				Checkbox
			</Typography>
			<FormControl
				sx={{ marginLeft: 2 }}
				component="fieldset"
				variant="standard"
			>
				<FormLabel component="legend">Checkbox title</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={checkbox1Checked}
								onChange={(event) => setCheckbox1Checked(event.target.checked)}
							/>
						}
						label="Label 1"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={checkbox2Checked}
								onChange={(event) => setCheckbox2Checked(event.target.checked)}
							/>
						}
						label="Label 2"
					/>
				</FormGroup>
				<FormHelperText>Helper text</FormHelperText>
			</FormControl>

			<Divider sx={{ my: 3 }}></Divider>

			{/* Radio Button */}
			<Typography gutterBottom variant="h3">
				Radio button
			</Typography>
			<FormControl sx={{ marginLeft: 2 }} variant="standard">
				<FormLabel id="radio-buttons-group">Gender</FormLabel>
				<RadioGroup
					aria-labelledby="radio-buttons-group"
					name="radio-buttons-group"
					value={radioGroupValue}
					onChange={(event) => setRadioGroupValue(event.target.value)}
				>
					<FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="male" control={<Radio />} label="Male" />
				</RadioGroup>
				<FormHelperText>Helper text</FormHelperText>
			</FormControl>

			<Divider sx={{ my: 3 }}></Divider>

			{/* Select */}
			<Typography gutterBottom variant="h3">
				Select
			</Typography>
			<FormControl fullWidth>
				<InputLabel id="select-label">Age</InputLabel>
				<Select
					labelId="select-label"
					id="select"
					value={selectValue}
					label="Age"
					onChange={(event) => setSelectValue(event.target.value)}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				<FormHelperText>Helper text</FormHelperText>
			</FormControl>

			<Divider sx={{ my: 3 }}></Divider>

			{/* Text field

      variant: outlined, filled, standard
      type: password, number, search

      multiline
      minRows
      maxRows

      */}
			<Typography gutterBottom variant="h3">
				Text field
			</Typography>
			<TextField
				error={!textFieldIsValid}
				id="name"
				label="Name"
				variant="outlined"
				helperText="Helper text"
				value={textFieldValue}
				onChange={handleTextFieldChange}
			/>
		</div>
	);
}

export default Inputs;
