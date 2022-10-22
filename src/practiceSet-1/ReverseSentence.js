export const ReverseSentence = () => {
  let sentence = "i love building beautiful things";
  const reverseSentence = (sentence, separator) => {
    return sentence.split(separator).reverse().join(separator);
  };
  console.log(reverseSentence(sentence, ""));
  return (
    <div>
      <h2>Reverse the sentence</h2>
    </div>
  );
};
