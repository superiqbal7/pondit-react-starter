import { useState } from 'react';

const ClickHoc = (IncomingComponent) => {

  const OutgoingComponent = () => {
    const [clickCount, setClickCount] = useState(0);
  
    const onClicked = () => {
      setClickCount(clickCount+1);
    }

    return (<IncomingComponent clickCount={clickCount} onClicked={onClicked} />)
  }

  return OutgoingComponent

}

export default ClickHoc;
