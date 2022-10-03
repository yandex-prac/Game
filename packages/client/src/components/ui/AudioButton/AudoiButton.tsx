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
  const MEDIA_ELEMENT_NODES = new WeakMap()

  useEffect(() => {
    const AudioContext = new window.AudioContext()

    const audioElement = document.querySelector('audio')

    let track: any

    if (audioElement) {
      if (MEDIA_ELEMENT_NODES.has(audioElement)) {
        track = MEDIA_ELEMENT_NODES.get(audioElement)
      } else {
        track = AudioContext.createMediaElementSource(audioElement)
        MEDIA_ELEMENT_NODES.set(audioElement, track)
      }
    }

    setAudioContext(track.context)
    setAudioElement(track.mediaElement)
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
