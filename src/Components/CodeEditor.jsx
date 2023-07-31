import React from 'react'
import Editor from './Editor'

export default function CodeEditor() {
    return (
        <div>
            <div className="d-flex my-2">
                <Editor />
                <Editor />
                <Editor />
            </div>

        </div>
    )
}
