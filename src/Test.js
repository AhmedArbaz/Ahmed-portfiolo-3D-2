import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls  } from "@react-three/drei";
import Cube from "./components/Cube";


const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test = () => {
  return (
    <Container>
      <Canvas>
        {/* OrbitControls should be inside Canvas */}
        <OrbitControls />
        <ambientLight intensity={1} /> {/* Adding light for visibility */}
        <directionalLight position={[3, 2, 1]} />
        {/* NOTE: mesh vala code jo directionalLight kay nichay tha vo cube may dal dia hay */}
        <Cube/>
        {/*NOTE:  Mesh ko cube component may dala aur phir aus ko yaha import kar lia hay  */}
      </Canvas>
    </Container>
  );
};

export default Test;
