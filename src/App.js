import React from 'react';
import './App.scss';
import Editor from '@monaco-editor/react'
import Splitter from './ui/splitter';
import CheckBox from './ui/checkbox';
import raw from 'raw.macro';
import TabBar from './ui/tabs';
const code = raw('./default-code.html'), defaultLine=10;

var models= {
    "index.html": {
        language: "html",
        value: code
    },
    "index.js": {
        language: "javascript",
        value: "// Coming soon"
    }
}

function App() {
    var [html, setHtml] = React.useState(code);
    var [iframeContent, setIframeContent] = React.useState('');
    var [autoUpdate, setAutoUpdate] = React.useState(false);
    var [currentFile, setCurrentFile] = React.useState('index.html');
    return (
        <div className="App">
            <div className="header">
                <button className="button" onClick={()=>setIframeContent(html)}>Run</button>
                <CheckBox checked={autoUpdate} onChange={()=>setAutoUpdate(!autoUpdate)}>Auto-update</CheckBox>
            </div>
            <Splitter>
                <Splitter.Section>
                    <TabBar currentTab={currentFile} onChange={setCurrentFile}>
                        <TabBar.Tab title="HTML" id="index.html"/>
                        <TabBar.Tab title="JS" id="index.js"/>
                    </TabBar>
                    <Editor height="100%"
                            path={currentFile}
                            defaultLanguage={models[currentFile].language}
                            defaultValue={models[currentFile].value}
                            onChange={value=> {
                                if(currentFile==="index.html"){
                                    setHtml(value); 
                                }
                                models[currentFile].value=value;
                            }}
                            line={defaultLine}
                            loading={<div className="loading"/>}/>
                </Splitter.Section>
                <Splitter.Section>
                    <iframe srcDoc={autoUpdate? html : iframeContent} title="Result"></iframe>
                </Splitter.Section>
            </Splitter>
        </div>
    );
}

export default App;
