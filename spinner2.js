const spinner2 = (spin, time) => {
  setTimeout( () => {
    process.stdout.write(`\r ${spin}    `)
  }, time * 100);
};
spinner2("|", 3);
spinner2("/", 5);
spinner2("-", 7);
spinner2("\\", 9);
spinner2("|", 11);
spinner2("/", 13);
spinner2("-", 13);
spinner2("|", 15);


