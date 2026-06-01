import React, { useEffect, useRef } from 'react'

import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Quote from '@editorjs/quote'
import ImageTool from '@editorjs/image'
import Embed from '@editorjs/embed'
import Paragraph from '@editorjs/paragraph'
import Marker from '@editorjs/marker'
import Underline from '@editorjs/underline'

const EditorJSComponent = ({ data, onChange }) => {
  const editorRef = useRef(null)

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: 'editorjs',

        autofocus: true,

        data: data || {},

        tools: {
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },

          header: {
            class: Header,
            inlineToolbar: true,

            config: {
              placeholder: 'Enter Heading',
              levels: [1, 2, 3, 4],
              defaultLevel: 2,
            },
          },

          list: {
            class: List,
            inlineToolbar: true,
          },

          marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
          },

          underline: Underline,

          quote: {
            class: Quote,
            inlineToolbar: true,

            config: {
              quotePlaceholder: 'Enter Quote',
              captionPlaceholder: 'Quote Author',
            },
          },

          embed: {
            class: Embed,
            inlineToolbar: true,
          },

          image: {
            class: ImageTool,

            config: {
              uploader: {
                uploadByFile(file) {
                  return new Promise((resolve) => {
                    const url = URL.createObjectURL(file)

                    resolve({
                      success: 1,

                      file: {
                        url,
                      },
                    })
                  })
                },
              },
            },
          },
        },

        onChange: async () => {
          const output = await editorRef.current.save()

          onChange(output)
        },
      })
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy()
        editorRef.current = null
      }
    }
  }, [])

  return (
    <div
      id="editorjs"
      className="min-h-[300px] rounded-xl border border-gray-300 bg-white p-4 shadow-sm"
    />
  )
}

export default EditorJSComponent
