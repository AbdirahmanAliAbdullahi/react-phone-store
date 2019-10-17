import styled from  'styled-components'


 
export const ButtonContainer = styled.button `
text-transform:capitalize;
background:transparent;
&:hover{
    background:${prop => 
    prop.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    color:var(--mainBlue);
};
color:${prop =>prop.cart?"var(--mainYellow)":"var(--lightBlue)"};
border-color:${props =>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
border:0.004rem solid var(--lightBlue);
padding:0.2rem 0.4rem;
margin:0.3rem 0.2rem;
border-radius:0.5rem;
transition:all 0.4s ease-in-out;
&:focus{
    outline:none;
}
`