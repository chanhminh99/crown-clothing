import styled, {css} from 'styled-components';

const defaultButtonStyles = css`
    background-color: black;
    color: white;
    border: none:

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const getButtonStylesByProps = props => {
    if (props.isGoogleSignInButton) {
        return googleSignInStyles
    }

    return props.inverted ? invertedStyles : defaultButtonStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStylesByProps}
`

// export const CustomButtonContainer = styled(CustomButton).attrs((props) => ({className: props.className}))``
