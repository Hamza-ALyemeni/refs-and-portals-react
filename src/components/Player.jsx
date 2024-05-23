import {useState , useRef} from 'react';

export default function Player() {
  const playerName = useRef();
  const[enteredPlayerName,setEnterdPlayerName] = useState(null);
  // const[submited,setSubmited] = useState(false);

  // function handleChange(event) {
  //   setSubmited(false);
  //   setEnterdPlayerName(event.target.value);
  // }

  function handleClick() {
    // setSubmited(true);
    setEnterdPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'something else'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
