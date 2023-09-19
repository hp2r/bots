import Form from './form';

export function App() {
  return (
    <div>
      <h1>The Bots Frontend coding challenge</h1>
      <p>
        For this challenge we would like you to create a{' '}
        <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caeser Cipher</a>.
        You will create an input, which will take any string and apply the
        cipher, then display the results below.
      </p>
      <p>
        In a Caeser cipher, you can specify the 'shift' and direction of the
        substitution. Bonus points if your solution allows these to be updated
        in the UI.
      </p>

      <h2>Getting started</h2>
      <ul>
        <li>Open a terminal and run `npm run start`</li>
        <li>A second terminal can be opened to run tests: `npm run test`</li>
      </ul>

      <h2>The rules</h2>
      <ul>
        <li>No libraries please</li>
        <li>The solution should come with unit tests</li>
        <li>All code should be typed</li>
        <li>Expected time should be 45mins</li>
      </ul>
      <p>
        Please save your results and send the link back to us when you are
        happy!
      </p>
      <h2>Solution</h2>
      <Form />
    </div>
  );
}
