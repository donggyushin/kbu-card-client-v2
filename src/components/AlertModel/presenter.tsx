import React, { Dispatch } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../types/index.d';
import { TURN_DOWN_ALERT } from '../../actions/types.d';

interface IDispatch {
    type: string
}

export default function AlertDialog() {
    // const [open, setOpen] = React.useState(true);

    const dispatch = useDispatch<Dispatch<IDispatch>>()
    const open: boolean = useSelector((state: ReducerStateType) => state.modal.open)
    const title: string = useSelector((state: ReducerStateType) => state.modal.title)
    const text: string = useSelector((state: ReducerStateType) => state.modal.text)
    const callBack: ((param?: any) => void) | undefined = useSelector((state: ReducerStateType) => state.modal.callBack)

    const handleClose = () => {
        if (callBack !== undefined) {
            callBack()
        }
        dispatch({
            type: TURN_DOWN_ALERT
        })

    };

    const DisagreeButton = () => {
        dispatch({
            type: TURN_DOWN_ALERT
        })
    }

    return (
        <div>
            <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={DisagreeButton} color="secondary">
                        싫어요
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        좋아요
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}