import * as React from 'react';
import FloatingShapes from './FloatingShapes';

/**
 * Visual background layers: Aurora glowing gradient blobs, subtle mesh grid,
 * and floating 3D isometric cubes. Fixed behind content.
 */
export default function Backdrop() {
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span className="aurora__blob aurora__blob--a" />
        <span className="aurora__blob aurora__blob--b" />
        <span className="aurora__blob aurora__blob--c" />
        <span className="aurora__blob aurora__blob--d" />
      </div>
      <div className="mesh" aria-hidden="true" />
      <FloatingShapes />
    </>
  );
}
