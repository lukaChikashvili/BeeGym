
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'


const Scene = () => {
  return (
 <>
     <EffectComposer>
                 <Noise 
                 premultiply
                 
                 blendFunction={BlendFunction.SRC}/>
           </EffectComposer>

       <mesh>
          <planeGeometry args={[20,10]} />
          <meshBasicMaterial color = "#454545" />
       </mesh>
          
 </>
  )
}

export default Scene
