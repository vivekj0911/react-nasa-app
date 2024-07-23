import React from 'react';
// import './styles.css'; // Make sure this path is correct

export default function Main(props) {
  const {data} = props
  return (
    <div className="imgContainer">
      <img src={data?.hdurl} alt={ data?.title || 'bgImage'} className="bgImage" />
    </div>
  );
}
