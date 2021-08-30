import React,{Fragment} from 'react';
import Message from '../Common/Message';
import ButtonPrimary from '../Common/ButtonPrimary';

const NotFound = () => (
    <Fragment>
        <Message infoText="404: Url Not Found" />
        <ButtonPrimary text="Back" to="/" />
    </Fragment>
);

export default NotFound;
