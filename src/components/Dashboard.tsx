import React from 'react';
import AddItems from './shopping/AddItems';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DashboardHeader from './shopping/DashboardHeader';
import ListItems from './shopping/ListItems';

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DashboardHeader />
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add items
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <div className='add-item-close'>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle> */}
          <DialogContent dividers>
            <AddItems />
          </DialogContent>
          {/* <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
      <ListItems />
      <h2>Welcome to dash board</h2>
    </div>
  );
};
export default Dashboard;
