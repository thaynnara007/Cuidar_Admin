import React, { useRef } from 'react';
import { HeaderButton } from '../styles/buttons.style';

function FileUploader({ children, handleUpload }) {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];

    handleUpload(file);
  };

  return (
    <>
      <HeaderButton onClick={handleClick} style={{ margin: '0px' }}>
        {children}
      </HeaderButton>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </>
  );
}

export default FileUploader;
