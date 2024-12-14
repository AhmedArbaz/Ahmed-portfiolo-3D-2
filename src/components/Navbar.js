import React from 'react'


import styled from 'styled-components'

// NOTE: ya asay hota hay kay styled kay bad ham koi bhi html tag day saktay hain vo ausi ki thara kam karay ga 
const Section = styled.div`
display:flex;
justify-content:center;
`;

const Container = styled.div`
width:90%;
// background-color:red;
display:flex;
justify-content: space-between;
cursor:pointer;
padding:10px;
`;
const Links = styled.div`
display: flex;


`;
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
align-items:center;


`;
const ListItem = styled.li`

font-weight:700;
`;
// Logo may image ay gi to vo mention kar dia hay 
const Logo = styled.img`
width:100px;
height:100px;
mix-blend-mode: luminosity;


`;
const Icons = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:10px;
`;
// Icon tag may image hay to yaha mention kar dia kay bhai Icon may image ko put karin gay ham
const Icon = styled.img`
width: 60px;
height:50px;
filter: invert();
display:flex;
align-items:center;
`;
const Button = styled.button`
    
background: #262626;
color:white;
padding: 20px;
border-radius: 10px;
font-weight:700;
border: none;
`;
const Navbar = () => {
  return (
    <Section>
      <Container>
      <Links>
      <Logo src="./img/logo.jpg"/>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Studio</ListItem>
        <ListItem>Works</ListItem>
        <ListItem>Contact</ListItem>
      </List>
      </Links>
      <Icons>
            <Icon src="./img/search.png"/>
                <Button>Hire now</Button>
      </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
