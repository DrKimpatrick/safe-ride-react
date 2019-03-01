import React from 'react';
import { connect } from 'react-redux';
import '../../styles/pageLoader.css';

const PageLoader = (props) => (
    props.isRequestLoading ? (
    <div className="facebook">
        <div className="face">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    </div>): ''
     
)   
const mapStateToProps = state => ({ ...state.pageLoaderReducer });

export default connect(mapStateToProps)(PageLoader);