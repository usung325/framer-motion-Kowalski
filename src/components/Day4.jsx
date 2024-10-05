import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Day4.css'
import IconStars from '../icons/IconStars'
import IconMenuGrid from '../icons/IconMenuGrid'
import IconSetting from '../icons/IconSetting'

export default function Day4() {
    const imList = ['soft1', 'soft2', 'soft3', 'soft4']
    const [currIm, setCurrIm] = useState(0)
    const [dir, setDir] = useState(1)
    const [tab, setTab] = useState('story')

    const handleLeft = (e) => {
        e.preventDefault()
        if (currIm == 0) {
            return
        }
        setCurrIm(prev => prev - 1)
        setDir(-1)
    }
    const handleRight = (e) => {
        e.preventDefault()
        if (currIm == imList.length - 1) {
            return
        }
        setCurrIm(prev => prev + 1)
        setDir(1)
    }

    const card = useMemo(() => {
        switch (currIm) {
            case (0): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm]}`}
                            className="card"
                            src={`/images/${imList[currIm]}.jpeg`} />
                    </>
                )
            }
            case (1): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm]}`}
                            className="card"
                            src={`/images/${imList[currIm]}.jpeg`} />
                    </>
                )

            }
            case (2): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm]}`}
                            className="card"
                            src={`/images/${imList[currIm]}.jpeg`} />
                    </>
                )

            }
            case (3): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm]}`}
                            className="card"
                            src={`/images/${imList[currIm]}.jpeg`} />
                    </>
                )
            }
        }
    })
    const cardPrev = useMemo(() => {
        switch (currIm) {
            case (0): {
                return null
            }
            case (1): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm - 1]}`}
                            className="cardPrev"
                            src={`/images/${imList[currIm - 1]}.jpeg`}
                        // style={{ transform: 'rotate(-20deg)' }}
                        />
                    </>
                )

            }
            case (2): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm - 1]}`}
                            className="cardPrev"
                            src={`/images/${imList[currIm - 1]}.jpeg`}
                        // style={{ transform: 'rotate(-20deg)' }}
                        />
                    </>
                )

            }
            case (3): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm - 1]}`}
                            className="cardPrev"
                            src={`/images/${imList[currIm - 1]}.jpeg`}
                        // style={{ transform: 'rotate(-20deg)' }}
                        />
                    </>
                )
            }
        }
    })
    const cardNext = useMemo(() => {
        switch (currIm) {
            case (0): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm + 1]}`}
                            className="cardNext"
                            src={`/images/${imList[currIm + 1]}.jpeg`}
                        // style={{ transform: 'rotate(20deg)' }}
                        />
                    </>
                )
            }
            case (1): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm + 1]}`}
                            className="cardNext"
                            src={`/images/${imList[currIm + 1]}.jpeg`}
                        // style={{ transform: 'rotate(20deg)' }}
                        />
                    </>
                )

            }
            case (2): {
                return (
                    <>
                        <motion.img
                            layout
                            key={`img-${imList[currIm + 1]}`}
                            className="cardNext"
                            src={`/images/${imList[currIm + 1]}.jpeg`}
                        // style={{ transform: 'rotate(20deg)' }}
                        />
                    </>
                )

            }
            case (3): {
                return null
            }
        }
    })

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    }
    return (
        <>
            <div className="overlay w-full h-screen ">
                <div className="wrapper relative flex gap-5 flex-col mt-[9%] mx-auto w-[500px] h-[720px] bg-[#1b1b1b] p-5 rounded-2xl">
                    <div className="inner bg-[#2f2f2f] flex relative h-[900px] items-center justify-center overflow-hidden rounded-lg">
                        <div className="absolute left-5 top-5 bg-[#1b1b1b] rounded-full p-1.5">
                            <IconMenuGrid />
                        </div>
                        <div className="absolute right-5 top-5 bg-[#1b1b1b] rounded-full p-1.5">
                            <IconSetting />
                        </div>
                        <AnimatePresence
                            transition={{ ease: "easeIn", delay: 1 }}
                            mode="popLayout"
                        >
                            <motion.div
                                onClick={(e) => handleLeft(e)}
                                variants={variants}
                                initial="hidden"
                                animate='visible'
                                exit='exit'
                                layoutId={imList[currIm - 1]}
                                key={imList[currIm - 1]}
                                className="absolute -left-14 -bottom-10 w-[150px] h-[150px]"
                            >
                                {cardPrev}
                            </motion.div>
                            <motion.div
                                variants={variants}
                                initial="hidden"
                                animate='visible'
                                exit='exit'
                                layoutId={imList[currIm]}
                                key={imList[currIm]}
                                className="absolute bottom-[50%] w-[200px] h-[150px] " >
                                {card}
                            </motion.div>
                            <motion.div
                                onClick={(e) => handleRight(e)}
                                variants={variants}
                                initial="hidden"
                                animate='visible'
                                exit='exit'
                                layoutId={imList[currIm + 1]}
                                key={imList[currIm + 1]}
                                className="absolute -right-14 -bottom-10 w-[150px] h-[150px]" >
                                {cardNext}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="textBox flex flex-col bg-[#2f2f2f] h-full p-5 gap-2 text-white">
                        <div className="relative flex justify-between">
                            {tab == 'story' ? (
                                <motion.div
                                    className="absolute left-[40px] top-0"
                                    layoutId="dot"
                                    key="dot"
                                >
                                    <svg

                                        height="5"
                                        width="5">
                                        <circle
                                            cx="2.5"
                                            cy="2.5"
                                            r="2.5"
                                            fill="red"
                                        />
                                    </svg>
                                </motion.div>
                            ) :
                                <motion.div
                                    className="absolute left-[110px] top-0"
                                    layoutId="dot"
                                    key="dot"
                                >
                                    <svg

                                        height="5"
                                        width="5">
                                        <circle
                                            cx="2.5"
                                            cy="2.5"
                                            r="2.5"
                                            fill="red"
                                        />
                                    </svg>
                                </motion.div>
                            }
                            <div className="flex gap-5 ">
                                <p
                                    onClick={() => setTab('story')}
                                >Story</p>
                                <p
                                    onClick={() => setTab('screen')}
                                    className="text-[#6f6f6f]">Screen</p>
                            </div>
                            <div className="flex items-center bg-[#000000] px-2 text-sm rounded-full text-[#6f6f6f]">
                                2-10
                            </div>
                        </div>
                        <AnimatePresence mode="popLayout">
                            {tab == 'story' ? (
                                <div className="flex flex-col h-full justify-between">
                                    <motion.div
                                        key="storyText"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        style={{ transformOrigin: "top left" }}
                                        transition={{ type: 'spring', bounce: 0.1, duration: 0.3 }}
                                        className="flex text-white ">
                                        <p>One day Fluffies found a magical rainbow fading away. To save it, they set off to spread kindess and love acrros Fluffville. Will they succeed?</p>
                                    </motion.div>
                                    <motion.div
                                        exit={{ opacity: 0 }}
                                        className="text-[#6f6f6f] flex w-full justify-between">
                                        <p>Enter prompt for whole story</p>
                                        <IconStars />
                                    </motion.div>
                                </div>
                            ) : (
                                <motion.div
                                    key="screenText"
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: 0.1, } }}
                                    exit={{ opacity: 0, y: '-50%' }}
                                    transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}
                                    className="text-[#6f6f6f]">
                                    <p>Enter prompt for whole story</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
            </div >

        </>
    )
}