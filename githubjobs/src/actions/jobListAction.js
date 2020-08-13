import axios from 'axios';

export const FETCHING_JOB_LIST = 'FETCHING_JOB_LIST';
export const FETCH_JOB_SUCCESS = 'FETCH_JOB_SUCCESS';
export const FETCHING_JOB_LIST_FAIL = 'FETCHING_JOB_LIST_FAIL';

export const fetchJobs = (params, page) => (dispatch) => {
    dispatch({ type: FETCHING_JOB_LIST });

    axios
        
        .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`, {
            params: {markdown: true, page: page, ...params}
        })
        .then((res) => {
            console.log(res)
            dispatch({type: FETCH_JOB_SUCCESS, payload: res.data})
        })
        .catch((err) => 
            // console.log(err)
            dispatch({type: FETCHING_JOB_LIST_FAIL, payload: {error: err}})
        )
}
