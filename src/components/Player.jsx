import {useState} from 'react';

export default function Player() {
  const[enteredPlayerName,setEnterdPlayerName] = useState('');
  const[submited,setSubmited] = useState(false);

  function handleChange(event) {
    setEnterdPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmited(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submited ? enteredPlayerName : 'something else'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
