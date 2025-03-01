"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { Github, MessageCircle } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import flower from "@/assets/bg-ifw01.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ElegantShape({
                        className,
                        delay = 0,
                        width = 400,
                        height = 100,
                        rotate = 0,
                        gradient = "from-white/[0.08]",
                      }: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
      <motion.div
          initial={{
            opacity: 0,
            y: -150,
            rotate: rotate - 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: rotate,
          }}
          transition={{
            duration: 2.4,
            delay,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
          }}
          className={cn("absolute", className)}
      >
        <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              width,
              height,
            }}
            className="relative"
        >
          <div
              className={cn(
                  "absolute inset-0 rounded-full",
                  "bg-gradient-to-r to-transparent",
                  gradient,
                  "backdrop-blur-[2px] border-2 border-white/[0.15]",
                  "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                  "after:absolute after:inset-0 after:rounded-full",
                  "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
              )}
          />
        </motion.div>
      </motion.div>
  )
}

export default function Infinity({
                                        badge = "Infinity Wayy",
                                        title1 = "MITE Remastered"
                                 }: {
    badge?: string
    title1?: string
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    }

  return (
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Replace the gradient background with the Minecraft image */}
        <div className="absolute inset-0">
          <Image
              src= {flower}
              alt="Minecraft landscape"
              fill
              style={{ objectFit: "cover" }}
              priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Social Links */}
        <div className="absolute left-4 top-4 z-20 flex flex-col gap-2">
          <a
              href="https://github.com/infinityWayy/InfinityWay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors duration-200"
          >
            <Github className="w-6 h-6 text-white" />
            <span className="sr-only">GitHub Repository</span>
          </a>
          <a
              href="https://qm.qq.com/q/RF9hNB0VWw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors duration-200"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="sr-only">QQ Group</span>
          </a>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-green-800/70 border border-green-700 mb-8 md:mb-12"
            >
              <div className="w-5 h-5 bg-green-600 rounded-sm"></div>
              <span className="text-sm text-white tracking-wide font-mono">{ badge }</span>
            </motion.div>

            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{ title1 }</span>
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" />
          </div>
        </div>

        {/* Copyright notice */}
        <div className="absolute bottom-4 left-0 right-0 z-20 text-center">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-white/80 text-sm space-y-1"
          >
            <p>Copyright © 2025 InfinityWay Development</p>
            <p>All Rights Reserved.</p>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
      </div>
  )
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";

