import React, { useState } from 'react';
import './App.css';

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleGenerate = () => {
    // 这里添加生成逻辑
    console.log('生成按钮被点击');
    console.log('PDF文件:', pdfFile);
    console.log('职位描述:', jobDescription);
  };

  return (
    <div className="App">
      <h1>简历分析器</h1>
      
      <div className="upload-section">
        <h2>1. 上传PDF简历</h2>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
      </div>

      <div className="job-description-section">
        <h2>2. 输入职位描述</h2>
        <textarea
          value={jobDescription}
          onChange={handleJobDescriptionChange}
          placeholder="在此输入或粘贴职位描述"
          rows="6"
        />
      </div>

      <div className="generate-section">
        <h2>3. 生成分析</h2>
        <button onClick={handleGenerate}>生成</button>
      </div>
    </div>
  );
}

export default App;
