import React, { type JSX } from 'react'

/**
 * Converts a string with \n line breaks into renderable JSX elements,
 * inserting a <br /> tag for each line break.
 *
 * @param text - the text string retrieved from the i18n file
 * @returns an array of React fragments containing text and <br /> tags.
 */
export const formatNewLines = (text: string | undefined | null): JSX.Element | null => {
  // Return null immediately if the text is undefined, null or an empty string
  if (!text) return null

  // Split the string by the newline character (\n)
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, index, array) => (
        <React.Fragment key={index}>
          {line}
          {index < array.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      ))}
    </>
  )
}
