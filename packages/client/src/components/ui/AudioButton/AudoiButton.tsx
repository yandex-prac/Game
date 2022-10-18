import React, { useEffect, useState } from 'react'
import { Button } from '@/components'

export const AudoiButton = () => {
  const [isMusicOn, setIsMusicOn] = useState(false)
  const [audioContextState, setAudioContext] = useState(null as any)
  const [audioElementState, setAudioElement] = useState(null as any)

  const handleMusic = () => {
    audioContextState.resume()
    isMusicOn ? audioElementState.pause() : audioElementState.play()
    setIsMusicOn(!isMusicOn)
  }

  useEffect(() => {
    const AudioContext = new window.AudioContext()
    setAudioContext(AudioContext)
    const audioElement: any = document.querySelector('audio')
    setAudioElement(audioElement)
  }, [])

  return (
    <>
      <audio src="src/audio/3-track-3.mp3" />

      <Button
        type="button"
        textIntl={isMusicOn ? 'MUSIC_TURN_OFF' : 'MUSIC_TURN_ON'}
        onClick={handleMusic}
      />
    </>
  )
}
