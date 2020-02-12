const initialState = {
    isLoading: false,
    isError: false,
    itnrsPackage: [],
}

const ItnrsPackageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ITNRS_PACKAGE_PENDING":
            return {
                ...state,
                isError: false,
                isLoading: true
            }
        case "FETCH_ITNRS_PACKAGE_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "FETCH_ITNRS_PACKAGE":
            return {
                ...state,
                itnrsPackage: action.payload,
                isError: false,
                isLoading: false
            }
        default:
            return state
    }
}

export default ItnrsPackageReducer