import { AppStateInterface } from '../../interfaces';
import { modalSelector } from '../../selectors';
import { closeModalAction } from '../../redux/actions';
import { HomePage } from './HomePage';

import { Dispatch} from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state: AppStateInterface) => ({
    modalState: modalSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    closeModal: (...payload: Parameters<closeModalAction>) =>
        dispatch(closeModalAction(...payload))
});

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default withTranslation('common') (connectedStateAndProps(HomePage));