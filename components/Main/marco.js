import styled from '@emotion/styled'

export const Marco = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${props => props.image});
    background-size: cover;
    margin: 0;
    padding: 0;
    width: 200px;
    height: 250px;
    cursor:pointer;
    text-align: center;
    color: white;

    h1{
        margin-top: 8rem !important;
    }

    a{
        font-size: 1.3rem;
        text-decoration-line: underline;
    }
`;

