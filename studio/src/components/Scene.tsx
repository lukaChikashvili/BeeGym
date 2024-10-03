
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'


const Scene = () => {
  return (
 <>
     <EffectComposer>
                 <Noise 
                 premultiply
                 blendFunction={BlendFunction.SOFT_LIGHT}/>
           </EffectComposer>

       <mesh>
          <planeGeometry args={[20,10]} />
          <meshStandardMaterial color = "#229799" />
       </mesh>
          
 </>
  )
}

export default Scene
