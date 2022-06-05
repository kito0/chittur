import { useState } from 'react';

import { Markdown } from 'components';

export const Accordion = ({ title, content }: Accordion) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`accordion ${open ? 'open' : ''}`}>
      <p className='accordion__title a' onClick={handleOpen}>
        {title}
      </p>
      <div className='accordion__content'>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};
