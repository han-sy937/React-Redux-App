import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/jobListAction'


 const JobLists = (props) => {
    useEffect(() => {
        props.fetchJobs();
    },[])
    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        jobs: state.jobs,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchJobs})(JobLists)