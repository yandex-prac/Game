import React from 'react'

type TestType = {
  style?: Record<string, string>
}

export const Test = ({ style }: TestType) => <div style={style}>Test</div>
