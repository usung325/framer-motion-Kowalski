import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './Day2.css'


export default function Day2() {
    const [dialogue, setDialogue] = useState("?")
    const [isHovered, setIsHovered] = useState(false)

    const handleClick = () => {
        if (dialogue == "?") {
            setDialogue("What's up?")
            setTimeout(() => {
                setDialogue("Nothing")
            }, 1500)
        }
        if (dialogue == "Nothing") {
            setDialogue("Nice.")
            setTimeout(() => {
                setDialogue("?")
            }, 2000)
        }
    }
    return (
        <div className="flex h-screen"

        >

            <AnimatePresence mode="wait" initial="false">
                <motion.span
                    key={dialogue}
                    variants={{
                        hidden: { opacity: 0, },
                        visible: { opacity: 1, },
                        exit: { opacity: 0, },
                    }}
                    initial={'hidden'}
                    animate={'visible'}
                    exit={'exit'}
                    transition={{ duration: 0.2, ease: "easeIn", delay: 0.1 }}
                    className="boxText"
                >
                    {dialogue}
                </motion.span>
            </AnimatePresence>
            <motion.div
                onClick={() => {
                    handleClick()
                }
                }
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                layoutId='diagBox'


                variants={{
                    hidden: { y: -10 },
                    visible: { y: 0, },
                    exit: { y: 10 },
                }}
                initial={'hidden'}
                animate={'visible'}
                exit={'exit'}


                transition={{ type: "spring", bounce: 0.25 }}
                className={`dialogue-box ${dialogue == 'Nothing' ? "nothing" : dialogue == "?" ? 'question' : 'other'} `}
            // className="flex mx-auto my-auto w-[150px] h-[100px] overflow-hidden justify-center items-center text-lg rounded-md" style={dialogue == "Nothing" ? { width: '100px', height: '50px', background: 'linear-gradient(#FF8C49, #EA6202)' } : dialogue == "?" ? { width: '50px', height: '50px', background: 'linear-gradient(#4983FF, #2A5DEA)' } : { width: '200px', height: '100px', background: 'linear-gradient(#4983FF, #2A5DEA)' }}
            >
            </motion.div>
        </div>

    )
}