import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Button } from '@/components'

export const AudioButton = () => {
  const [isMusicOn, setIsMusicOn] = useState(false)
  const [audioContextState, setAudioContext] = useState<AudioContext | null>(null)
  const [audioElementState, setAudioElement] = useState<HTMLAudioElement | null>(null)
  const audioElement = useRef(null)

  const handleMusic = () => {
    audioContextState?.resume()
    if (isMusicOn) {
      audioElementState?.pause()
    } else {
      audioElementState?.play()
    }
    setIsMusicOn(!isMusicOn)
  }

  useEffect(() => {
    const AudioContext = new window.AudioContext()
    setAudioContext(AudioContext)
    setAudioElement(audioElement.current)
  }, [audioElement])


  return (
    <>
      <audio ref={audioElement} src='src/audio/3-track-3.mp3' />

      <Button
        type='button'
        textIntl={isMusicOn ? 'MUSIC_TURN_OFF' : 'MUSIC_TURN_ON'}
        onClick={handleMusic}
      />
    </>
  )
}
