import React from 'react';

interface Props {
  title: string;
}

const Newtab: React.FC<Props>  = ({title} : Props) => {
  return (
    <div className="App">
      <header>{title}</header>
      Hello
    </div>
  );
};

export default Newtab;
