"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = document.documentElement
    const initialTheme = root.classList.contains("dark") ? "dark" : "light"
    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = theme === "light" ? "dark" : "light"

    if (newTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    setTheme(newTheme)
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="fixed top-6 right-6 h-10 w-10 rounded-full">
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      <span className="sr-only">테마 전환</span>
    </Button>
  )
}
