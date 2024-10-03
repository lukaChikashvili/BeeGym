import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './Scene'


const CanvasPage = () => {
  return (
    <>
    
      <Canvas>
        
      <ambientLight intensity={1.5}/>

        <Suspense fallback = {null}>
            <Scene />
        </Suspense>
        
      </Canvas>
    </>
  )
}

export default CanvasPage
