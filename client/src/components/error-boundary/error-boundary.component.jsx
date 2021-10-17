import React from 'react'

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return {hasErrored: true}
    }

    componentDidCatch(error, errorInfo) {
        // You can put the log error info to an error reporting service
        // KibanaLog...
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png' />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary