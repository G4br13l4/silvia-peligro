import { modalSelector } from '../../../selectors';
import { AppStateInterface } from '../../../interfaces';
import { closeModalAction, setInstagramVideoAction} from '../../../redux/actions';
import { CustomModal } from './CustomModal';
import { connect, Dispatch } from 'react-redux';

const mapStateToProps = (state: AppStateInterface) => ({
    modalState: modalSelector(state)
});


const mapDispatchToProps = (dispatch: Dispatch) => ({
    closeModal: (...payload: Parameters<closeModalAction>) =>
        dispatch(closeModalAction(...payload)),
    setInstagramVideo: (...payload: Parameters<setInstagramVideoAction>) =>
        dispatch(setInstagramVideoAction(...payload))
});

export const SmartModal = connect(mapStateToProps, mapDispatchToProps)(CustomModal);