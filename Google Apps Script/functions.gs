function createTable(arr){
  console.log(arr)
  const len = arr.map(elem => elem[0].length);
  const max = Math.max(...len)%2===0?Math.max(...len):Math.max(...len)+1;
  console.log(max)
  let text = `\`\`\`\nFound ${arr.length} members\n`;
  for(let i=0;i<arr.length;i++){
    text += "\n  " + arr[i][1] + " | "
    text += String(arr[i][0]);
  }
  text +="\n\`\`\`"
  console.log(text);
  return text;
}
