import { React, memo } from "react";
import { useState, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { Dialog, DialogContent, DialogTitle, DialogActions, Input } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Close from "@material-ui/icons/Close";

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";
import embedPanelStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/embedPanelStyle.js";
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

const useDesktop14PageStyles = makeStyles(desktop14PageStyle);
const useJavascriptStyles = makeStyles(javascriptStyles);
const useEmbedPanelStyles = makeStyles(embedPanelStyle);
const useBasicStyles = makeStyles(basicsStyle);

import Slide from "@material-ui/core/Slide";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";

// export default function EmbeddedGroup(props) {
const EmbeddedGroup = (props) => {
	const pageClasses = useDesktop14PageStyles();
  const javascriptStylesClasses = useJavascriptStyles();
  const embedClasses = useEmbedPanelStyles();
  const basicStyleClasses = useBasicStyles();

	const [embeddedPanel, setEmbeddedPanel] = useState(false);
  const [checkedA, setCheckedA] = useState(true);

	return (
		<div className={pageClasses.embeddedGroup}>
			<Button color="danger" className={pageClasses.embeddedBtn} onClick={() => setEmbeddedPanel(true)}>
				EMBEDDED
			</Button>
			<Dialog
				classes={{
					root: javascriptStylesClasses.modalRoot,
					paper: javascriptStylesClasses.modal + " " + embedClasses.dialog,
				}}
				open={embeddedPanel}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => setEmbeddedPanel(false)}
				aria-labelledby="classic-modal-slide-title"
				aria-describedby="classic-modal-slide-description"
			>
				<DialogTitle
					id="classic-modal-slide-title"
					disableTypography
					className={javascriptStylesClasses.modalHeader}
				>
					<Button
						simple
						className={javascriptStylesClasses.modalCloseButton}
						key="close"
						aria-label="Close"
						onClick={() => setEmbeddedPanel(false)}
					>
						{" "}
						<Close className={embedClasses.modalClose} />
					</Button>
					<span className={embedClasses.title}>Embed maps in your site</span>
				</DialogTitle>
				<DialogContent
					className={embedClasses.modalBody}
				>  
					<span className={embedClasses.howToTitle}>Learn more about how to embed the logic{" "}
						<a className={embedClasses.fontStyle}
							href="https://www.creative-tim.com/?ref=mkpr-javascript-components"
						>
							here
						</a>
					</span>
					<div>
						<OutlinedInput
							className={embedClasses.howToInput}
							type={'text'}
							endAdornment={<InputAdornment position="end">
								<FormControlLabel
									control={
										<Switch
											checked={checkedA}
											onChange={(event) => setCheckedA(event.target.checked)}
											value="checkedA"
											classes={{
												switchBase: embedClasses.switchBase,
												checked: embedClasses.switchChecked,
												thumb: embedClasses.switchIcon,
												track: embedClasses.switchBar,
											}}
										/>
									}
									classes={{
										label: basicStyleClasses.label,
										root: embedClasses.labelRoot,
									}}
								/>
							</InputAdornment>}
							value={checkedA ? "iFrame" : "Web component"}
						/>
					</div>
					<CustomInput
						// labelText="You can write your text here..."
						id="textarea-input-embedded"
						formControlProps={{
							fullWidth: true,
							className: embedClasses.contentPanel,
						}}
						inputProps={{
							multiline: true,                          
							rows: 7,
						}}
						white
					/>
				</DialogContent>
				<DialogActions className={embedClasses.modalFooter}>
					<div className={embedClasses.space}>
						<Button link className={embedClasses.copyBtn}>Copy</Button>
						<Button
							onClick={() => setEmbeddedPanel(false)}
							simple
							className={embedClasses.dismissBtn}
						>
							Dismiss
						</Button>
					</div>
				</DialogActions>
			</Dialog>
		</div>
	)
};

export default memo(EmbeddedGroup);
