import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from "@react-three/fiber";
import { OrbitControls  } from "@react-three/drei";
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
flex-direction:column;
justify-content:space-between;
`

const Container = styled.div`
height:100vh;
scroll-snap-align:center;
width:1400px;
display:flex;

justify-content:space-between;
`
const Left = styled.div`
flex: 2;
display:flex;
flex-direction:column;
justify-content:center;
margin-left:100px;

`
const Title = styled.h1`
font-size:40px;
color: rgb(204, 310, 204);
`
const WhatWeDo = styled.div`
display:flex;
align-items:center;
gap:10px;


`
const Line = styled.img`
filter:invert(1);
height:5px;
width:30px;
border-radius:105px;


`
const SubTitle = styled.h2`
color: rgb(204, 204, 204);
`
const Desc = styled.p`
font-size:20px;
color: rgb(204, 204, 204);
font-weight:700;
`
const Button = styled.button`
background-color:#285858;
color: rgb(204, 204, 204);
padding:10px;
font-weight:bold;
border:none;
border-radius:5px;
cursor:pointer;
width:100px;
`
const Right = styled.div`
flex:3;
marginleft:100px;
display:flex;
align-items:center;
justify-content:center;
// mix-blend-mode: screen;
opacity:0.7;
position:relative;
// NOTE: position relative right ko dia Q kay ager nahi dain gay to phir jab nichay image ko position absoulute di hay to ya body ko parent samaj kay center ho jay ga to aisi liay ais right ko relative day dia to ya image ka parent ho gaya




`
const Image = styled.img`
width:250px;
height:250px;
border-radius:40px;
object-fit:contain;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;
opacity:90%;

// NOTE: giving animation to image
animation: animate 2s infinite ease alternate;

// name:animation, timing:2s, iteration:infinite,speed:ease(slow),  direction:alternate

@keyframes animate{
  from{
    transform:translateY(-10px);
  }
  to{
    transform:translateY(10px);
  }
}
  // NOTE: image ko auper nichay karny kay liay ya dia hay
`
const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
          <Line src='./img/line.png'/>
          <SubTitle>What we Do</SubTitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful, human-centered digital experiences
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
            {/* Adding 3d model from test.js*/}

         <Canvas>
            {/* OrbitControls should be inside Canvas */}
            <OrbitControls  enableZoom={false}/>
            <ambientLight intensity={1} /> {/* Adding light for visibility */}
            <directionalLight position={[3, 3, 2]} />
            {/* Making sphare 3D */}
            <Sphere arg={[1,100,200]} scale={2.9}>
              
             <MeshDistortMaterial color="#285858" attach="material" distort={0.5} speed={2}/>
            {/*NOTE:  Mesh ko cube component may dala aur phir aus ko yaha import kar lia hay  */}
            </Sphere>
         </Canvas>
          <Image src='./img/technology.png'/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
