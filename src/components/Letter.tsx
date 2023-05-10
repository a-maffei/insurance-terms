type LetterProps = {
  letter: string;
};

export default function Letter(props: LetterProps) {
  return <button>{props.letter}</button>;
}
