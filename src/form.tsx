import { useEffect, useRef, useState } from 'react';
import { caesarCipher } from './cipher';
import { DirectionTypes } from './types/directions';

export default function Form() {
  const [output, setOutput] = useState<string>('');
  const [shift, setShift] = useState<number>(13);
  const [direction, setDirection] = useState<DirectionTypes>(
    DirectionTypes.LEFT
  );
  const cipherInput = useRef<HTMLInputElement>(null);

  const setCipher = (val: string) => {
    val = val.replace(/[^A-Za-z]/gi, '');
    setOutput(caesarCipher(val.toLowerCase(), shift, direction));
  };

  useEffect(() => {
    if (cipherInput.current && cipherInput.current.value) {
        console.log('shift: '+shift+' - direction: '+direction)
          setOutput(
            caesarCipher(cipherInput.current.value.toLowerCase(), shift, direction)
          );
        }
  },[direction, shift])

  return (
    <>
      NOTE: all input will automatically output to lowercase. Non alphabet
      characters will be ignored in the output
      <br /><br />
      <label>
        Caeser direction:{' '}
        <select
            name="directions"
            id="directionType"
            onChange={(e) =>  setDirection(e.target.value as DirectionTypes)}
        >
            <option value={DirectionTypes.LEFT}>Left</option>
            <option value={DirectionTypes.RIGHT}>Right</option>
        </select>
      </label>
      <br />
      <label>
        Caeser shift:{' '}
        <input
          data-testid="shiftInput"
          type="number"
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Cipher input:{' '}
        <input
          ref={cipherInput}
          data-testid={'cipherInput'}
          onChange={(e) => setCipher(e.target.value)}
        />
      </label>
      <br />
      Output: {output}
    </>
  );
}
