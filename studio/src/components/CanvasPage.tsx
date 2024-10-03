import { Canvas } from '@react-three/fiber'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'


const CanvasPage = () => {
  return (
    <>
    
      <Canvas>
      <ambientLight intensity={1.5}/>
      <EffectComposer>
                 <Noise 
                 premultiply
                 blendFunction={BlendFunction.SOFT_LIGHT}/>
           </EffectComposer>

       <mesh>
          <planeGeometry args={[20,10]} />
          <meshStandardMaterial color = "#fff" />
       </mesh>
          
        
      </Canvas>
    </>
  )
}

export default CanvasPage
