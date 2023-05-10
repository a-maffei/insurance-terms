import Letter from "./Letter";

type CollectionProps = {
  alphabet: string[];
};

export default function Collection(props: CollectionProps) {
  const { alphabet } = props;

  const alphabetButtons: JSX.Element[] = alphabet.map((letter, index) => (
    <Letter key={index} letter={letter} />
  ));

  return <div>{alphabetButtons}</div>;
}
