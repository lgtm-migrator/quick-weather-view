import React from 'react';

interface Props {
  title: string;
}

const Newtab: React.FC<Props>  = ({title} : Props) => {
  return (
    <div className="text-100 App font-roboto">
      <header className="text-2xl text-center">{title}</header>
      Hello
    </div>
  );
};

export default Newtab;
