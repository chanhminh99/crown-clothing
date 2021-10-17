import React from 'react'

import Spinner from '../spinner/spinner.component'

const WithSpinner = WrappedComponent => ({isLoading, ...restProps}) => {
    return isLoading ? (<Spinner />) : (<WrappedComponent {...restProps} />)
}

// const WithSpinner = WrappedComponent => {
//     const Spinner = ({isLoading, ...restProps}) => {
//         return (
//             isLoading ? (
//                 <SpinnerOverlay>
//                     <SpinnerContainer />
//                 </SpinnerOverlay>
//             )
//                 : (
//                     <WrappedComponent {...restProps} />
//                 )
//         )
//     }
//     return Spinner
// }

export default WithSpinner