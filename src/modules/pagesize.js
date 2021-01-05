import React, { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const useContentize = (ref) => {
  const [constentSize, setConstentSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      ref.current !== undefined && setConstentSize(ref.current.clientWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return constentSize;
};
