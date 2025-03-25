"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const shapes = [
  {
    type: "cube",
    size: 60,
    position: { x: 15, y: 20 },
    rotation: { x: 45, y: 45, z: 0 },
    color: "from-purple-500 to-purple-800",
    animation: "animate-float-slow",
  },
  {
    type: "pyramid",
    size: 70,
    position: { x: 80, y: 60 },
    rotation: { x: 30, y: 45, z: 0 },
    color: "from-indigo-500 to-purple-700",
    animation: "animate-float-medium",
  },
  {
    type: "sphere",
    size: 50,
    position: { x: 75, y: 25 },
    rotation: { x: 0, y: 0, z: 0 },
    color: "from-violet-500 to-purple-600",
    animation: "animate-float-fast",
  },
  {
    type: "cylinder",
    size: 40,
    position: { x: 25, y: 70 },
    rotation: { x: 60, y: 0, z: 45 },
    color: "from-fuchsia-500 to-purple-700",
    animation: "animate-float-medium",
  },
]

export default function Floating3DElements() {
  const elementsRef = useRef([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) / 50
      const moveY = (clientY - window.innerHeight / 2) / 50

      elementsRef.current.forEach((element) => {
        if (element) {
          element.style.transform = `${element.dataset.baseTransform} rotateX(${moveY}deg) rotateY(${-moveX}deg)`
        }
      })
    }

    // Set base transforms
    elementsRef.current.forEach((element, index) => {
      if (element) {
        const shape = shapes[index]
        const baseTransform = `translate(-50%, -50%) rotateX(${shape.rotation.x}deg) rotateY(${shape.rotation.y}deg) rotateZ(${shape.rotation.z}deg)`
        element.dataset.baseTransform = baseTransform
        element.style.transform = baseTransform
      }
    })

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {shapes.map((shape, index) => (
        <div
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          className={cn("absolute opacity-5 backdrop-blur-xl", shape.animation)}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.position.x}%`,
            top: `${shape.position.y}%`,
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          {shape.type === "cube" && (
            <div className="relative w-full h-full transform-style-3d">
              {/* Front face */}
              <div className={`absolute inset-0 bg-gradient-to-br ${shape.color} transform translate-z-[30px]`}></div>
              {/* Back face */}
              <div className={`absolute inset-0 bg-gradient-to-br ${shape.color} transform -translate-z-[30px]`}></div>
              {/* Left face */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${shape.color} transform -translate-x-[30px] rotate-y-90`}
              ></div>
              {/* Right face */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${shape.color} transform translate-x-[30px] rotate-y-90`}
              ></div>
              {/* Top face */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${shape.color} transform -translate-y-[30px] rotate-x-90`}
              ></div>
              {/* Bottom face */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${shape.color} transform translate-y-[30px] rotate-x-90`}
              ></div>
            </div>
          )}

          {shape.type === "pyramid" && (
            <div className="relative w-full h-full transform-style-3d">
              <div
                className={`absolute w-full h-full bg-gradient-to-br ${shape.color} clip-triangle transform translate-z-[20px]`}
              ></div>
              <div
                className={`absolute w-full h-full bg-gradient-to-br ${shape.color} clip-triangle transform rotate-y-180 translate-z-[20px]`}
              ></div>
              <div
                className={`absolute w-full h-full bg-gradient-to-br ${shape.color} clip-triangle transform rotate-y-90 translate-z-[20px]`}
              ></div>
              <div
                className={`absolute w-full h-full bg-gradient-to-br ${shape.color} clip-triangle transform rotate-y-270 translate-z-[20px]`}
              ></div>
              <div
                className={`absolute w-full h-full bg-gradient-to-br ${shape.color} transform translate-y-[35px] rotate-x-90`}
              ></div>
            </div>
          )}

          {shape.type === "sphere" && (
            <div className={`w-full h-full rounded-full bg-gradient-to-br ${shape.color} shadow-lg`}></div>
          )}

          {shape.type === "cylinder" && (
            <div className="relative w-full h-full transform-style-3d">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${shape.color}`}></div>
              <div
                className={`absolute top-0 left-0 w-full h-[1px] rounded-full bg-gradient-to-br ${shape.color} transform -translate-y-[20px]`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-full h-[1px] rounded-full bg-gradient-to-br ${shape.color} transform translate-y-[20px]`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

