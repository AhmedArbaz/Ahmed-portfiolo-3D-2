import React, { useRef } from 'react'
import { RenderTexture,Text, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';


const Cube = () => {
    const textRef = useRef();
    useFrame((state) =>(textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2));
    
  return (
  <>
  
  <mesh>
    <boxGeometry/> {/* remove args={[1,1,1]} add give it on our canvas camara={{fov: 25, position: [5, 5, 5] }} in who.js */}
    <meshStandardMaterial color="pink" > {/* Adding material */}

      {/* Making Prespective Because without it our text shows wiered */}
      <PerspectiveCamera makeDefault position={[0, 0, 5]}/>{/* Adding geometry 3 values for x,y,z axis */}

{/*NOTE: For making text Abhi hello bhot ajeeb a raha hay Q kay ham nay camara set nahi kia hay */}

      <RenderTexture attach='map'>
        <color attach="background" args={["pink"]} />
        <Text ref={textRef} fontSize={4} color="Black">
          Hello 
        </Text>
      </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  </>
  )
}

export default Cube
