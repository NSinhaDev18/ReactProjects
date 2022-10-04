import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function CreatePostButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Create post"}
        </DialogTitle>
        

        <DialogContent dividers>
          <DialogContentText id="alert-dialog-description">
          <TextareaAutosize
      maxRows={10}
      minRows={10}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Write the post here"
      style={{ width: 400 }}
    /> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}