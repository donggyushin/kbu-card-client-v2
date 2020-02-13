import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
    downloadApp: () => void
}

const SimpleSnackbar: React.FC<IProps> = ({
    downloadApp
}) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="하단의 홈 화면에 추가 버튼을 눌러 앱으로 이용해보세요."
                action={
                    <React.Fragment>
                        <Button color="primary" size="small" onClick={downloadApp}>
                            YES
            </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}

export default SimpleSnackbar