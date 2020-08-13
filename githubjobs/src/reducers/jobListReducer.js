import { FETCHING_JOB_LIST, FETCH_JOB_SUCCESS, FETCHING_JOB_LIST_FAIL } from '../actions/jobListAction'


export const initialState = {
    jobs: [],
    loading: false,
    error: ''
}

export const jobListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_JOB_LIST:
            return {
                ...state,
                job:[],
                loading: true,
                error: ''
            }
        case FETCH_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: action.payload,
                error: ''
            }
        case FETCHING_JOB_LIST_FAIL:
            return {
                ...state,
                jobs:[],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}