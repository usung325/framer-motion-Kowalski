import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import './Day3.css'

export default function Day3() {
    const imList = ['soft1', 'soft2', 'soft3', 'soft4']
    const [currIm, setCurrIm] = useState(0)
    const [dir, setDir] = useState(1)

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
                        <img
                            // key={imList[currIm]}
                            // className="card"
                            src={`/images/${imList[currIm]}.jpeg`} />
                    </>
                )
            }
            case (1): {
                return (
                    <>
                        <img
                            // key={imList[currIm]}
                            // className="card"
                            src={`/images/${imList[currIm]}.jpeg`} />
                    </>
                )

            }
            case (2): {
                return (
                    <>
                        <img
                            // key={imList[currIm]}
                            // className="card"
                            src={`/images/${imList[currIm]}.jpeg`} />
                    </>
                )

            }
            case (3): {
                return (
                    <>
                        <img
                            // key={imList[currIm]}
                            // className="card"
                            src={`/images/${imList[currIm]}.jpeg`} />
                    </>
                )
            }
        }
    })

    const variants = {
        hidden: (dir) => {
            return { x: `${-200 * dir}%` }
        },
        visible: (dir) => {
            return { x: 0 }
        },
        exit: (dir) => {
            return { x: `${200 * dir}%` }
        }
    }

    return (
        <>
            <div className="overlay w-full h-screen">
                <div className="wrapper relative flex flex-col mt-10 mx-auto w-[500px] h-[720px] bg-[#292929] rounded-lg  overflow-hidden p-5">
                    <div className="inner flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="popLayout" custom={dir} initial={false}>
                            <motion.div
                                variants={variants}
                                key={currIm}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                                className="card w-[200px]"
                                custom={dir}
                            >
                                {card}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="textBox flex justify-between px-10">
                        <button
                            onClick={(e) => handleLeft(e)}
                            className="leftBtn bg-red-300">
                            left
                        </button>
                        <button
                            onClick={(e) => handleRight(e)}
                            className="rightBtn bg-blue-300">
                            right
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}