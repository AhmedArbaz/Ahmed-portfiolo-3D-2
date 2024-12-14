import React from 'react'
import styled from 'styled-components'


// NOTE: nichay ya to ham 5 li banaty aus ki jaga yaha data array bana lia ais ko List yani ul may map kar lain gay
const data = [
  'Web Designer',
  "Development",
  'Illustration',
  'Poster Design',
  'Social Media Design',

];

const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
justify-content:center;
`
const Container = styled.div`
height:100vh;
scroll-snap-align:center;
width:1400px;
display:flex;
justify-content:space-between;

`
const Left = styled.div`
flex: 1;
color: white;
display:flex;
align-items:center;
`
const List = styled.ul`
display:flex;
flex-direction:column;
gap:20px;
List-style:none;
`
const ListItem = styled.li`
font-size:40px;
font-weight:500;
cursor:pointer;
position:relative;
color:transparent;
-webkit-text-stroke:1px white;
position:relative;
// NOTE: ya bold aur transparent karny kay liay -webkit-text-stroke:1px white; kia hay


// NOTE: hover karny ka way
&:hover{
  color:transparent;
}
&:hover::after{
  content: "${(props) => props.text}";
  position:absolute;  
  color:pink;
  top:0;
  left:0;
  width:0;
  overflow:hidden;
  white-space:nowrap;
  

// Ab animation vahi ruk jay gi prui hony kay bad;

  animation:animate 0.5s linear both;

  @keyframes animate{
    to{
    width:100%
    }
    
    }
  }
}


// NOTE: content may jo bhi likho to ya ager match ho ga to aus kay bad ata hay eg ager hamaray text may test word hay to ya ausi kay nichay likha a jay ga

// ::after{
// content: "${(props) => props.text}";
// position:absolute;  
// top:0;
// left:0;
// color:pink;
// width:0px;
// overflow:hidden;
// white-space:nowrap;

// }

// &:hover::after{
 
//   animation:moveText 0.5s linear both;

//   @keyframes moveText{
//     to{
// width:100%;
//     }
//   }
//   }

`

const Right = styled.div`
flex:1;

`



const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
            {/* NOTE: yaha use kar lia data.map phir same ak var aur item ka name vo print karay ga aur hamaysha aus ko unique key dani hoti hay jo kay ham nay item rakh di hay */}
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>{item}</ListItem>
              // NOTE: ya text={item} ham nay prop pass kia hay
            ))}
          </List>
        </Left>
        <Right>
                    {/*3D model in it  */}
        </Right>
      </Container>
    </Section>
  )
}

export default Works
