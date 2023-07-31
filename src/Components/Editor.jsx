import { javascript } from '@codemirror/lang-javascript'
import React, { useState } from 'react'
import { Controlled } from 'react-codemirror2'

export default function Editor() {
  const [html,setHtml]=useState('')
 
  const handlechange=()=>{}
    return (
        <div className='mx-2 ' style={{ width: '30%' }}>
            <div className="top-part bg-dark text-light px-2 d-flex align-items-center">
                <h4>Hi</h4>
                <button className="btn btn-success my-1 ms-auto">col</button>

            </div>
            <div className="writing-area">
                <Controlled value={html} options={{mode: 'xml',theme: 'material',lineNumbers: true}}
                onChange={setHtml} onBeforeChange={handlechange} />
            </div>
        </div>
    )
}
