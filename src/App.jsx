import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

function App() {
  const [dialogue, setDialogue] = useState("?")

  return (
    <>
      <div className="flex h-screen"
        onClick={() => {
          setDialogue(prev => prev == "?" ? "What's up?" : prev == "What's up?" ? 'Nothing' : prev == "Nothing" ? "Nice" : "?")
        }
        }
      >

        <AnimatePresence mode="wait" initial="false">
          <motion.span
            key={dialogue}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 30 },
            }}
            initial={'hidden'}
            animate={'visible'}
            exit={'exit'}
            className="fixed inset-0 flex items-center justify-center z-10 text-white"
          >
            {dialogue}
          </motion.span>
        </AnimatePresence>
        <motion.div
          layout
          className="flex mx-auto my-auto w-[300px] h-[100px] overflow-hidden justify-center items-center text-lg rounded-md" style={dialogue == "Nothing" ? { width: '100px', height: '100px', background: 'linear-gradient(#FF8C49, #EA6202)' } : dialogue == "?" ? { width: '100px', height: '100px', background: 'linear-gradient(#4983FF, #2A5DEA)' } : { width: '500px', height: '100px', background: 'linear-gradient(#4983FF, #2A5DEA)' }}>
        </motion.div>
      </div>
    </>
  )
}

export default App
