import { useEffect, useState } from "react"

export default function useScrollAnimation(ref) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current // Copie du ref.current dans une variable
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [ref]) // ref ne change jamais vraiment, mais on le met pour ESLint

  return isVisible
}