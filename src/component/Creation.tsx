import "../Creation.css"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef, useEffect, useState } from "react"

function Creation() {
  const containerRef = useRef(null)

  const [sizes, setSizes] = useState({
    itemWidth: 400,
    gap: 30,
  })

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth

      const itemWidth = Math.min(width * 0.7, 400)
      const gap = Math.min(width * 0.03, 30)

      setSizes({ itemWidth, gap })
    }

    updateSizes()
    window.addEventListener("resize", updateSizes)

    return () => window.removeEventListener("resize", updateSizes)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const items = [
    { id: 1, image: "/creation/crea1.jpeg" },
    { id: 2, image: "/creation/crea2.jpeg" },
    { id: 3, image: "/creation/crea5.jpeg" },
    
  ]

  const totalDistance =
    (items.length - 1) * (sizes.itemWidth + sizes.gap)

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

  return (
    <div id="example">
      <section className="intro-section">
        <h1 className="fff text-4xl text-center md:text-6xl text-[#0d0d0f] leading-10 mb-6 md:mb-10">
          CRÉATION
        </h1>
      </section>

      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          <motion.div className="gallery" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                style={{
                  "--item-image": `url(${item.image})`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Creation