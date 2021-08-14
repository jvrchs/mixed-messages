// Messages data
const motivationalMessages = {
  _professionalPhrases: [
    "El único modo de hacer un gran trabajo es amar lo que haces - Steve Jobs",
    "Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo - Michael Jordan",
    "El dinero no es la clave del éxito; la libertad para poder crear lo es - Nelson Mandela",
    "Cuanto más duramente trabajo, más suerte tengo - Gary Player",
    "La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica - Aristóteles",
    "El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu - Helena Rubinstein",
    "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan - Elon Musk",
    "Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida - Confucio",
    "Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro - Colin Powell",
    "Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé - Benjamin Franklin",
    "La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar - Albert Einstein",
    "A veces la adversidad es lo que necesitas encarar para ser exitoso - Zig Ziglar",
    "Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso - Bill Cosby",
    "Ejecuta tus conocimientos con la maestría del que sigue aprendiendo - Jonathan García-Allen",
  ],
  _shortPhrases: [
    "Cuando pierdas, no pierdas la lección - Dalai Lama",
    "No busques los errores, busca un remedio - Henry Ford",
    "La vida es una aventura, atrévete - Teresa de Calcuta",
    "Tu actitud, no tu aptitud, determinará tu altitud - Zig Ziglar",
    "Tienes que hacer las cosas que crees que no puedes hacer - Eleanor Roosevelt",
    "Si te caíste ayer, levántate hoy - H. G. Wells",
    "Siempre parece imposible... hasta que se hace - Nelson Mandela",
    "Si no pierdes, no puedes disfrutar de las victorias - Rafael Nadal",
    "No dejes que el miedo se interponga en tu camino - Babe Ruth",
    "Haz de cada día tu obra maestra John Wooden",
    "No cuentes los días, haz que los días cuenten - Muhammad Ali",
    "El mejor momento del día es ahora - Pierre Bonnard",
    "Si la oportunidad no llama, construye una puerta - Milton Berle",
    "Deja que cada hombre ejerza el arte que domina - Aristófanes",
    "El valor de una idea radica en su uso - Thomas Edison",
  ],
  _famousPhrases: [
    "La innovación distingue al líder del seguidor - Steve Jobs",
    "Si puedes soñarlo, puedes hacerlo - Walt Disney",
    "El secreto para salir adelante es comenzar - Mark Twain",
    "Los obstáculos son esas cosas atemorizantes que ves cuando apartas los ojos de tu meta - Henry Ford",
    "La vida es como montar en bicicleta. Para mantener el equilibrio tienes que avanzar - Albert Einstein",
    "El éxito no es definitivo, el fracaso no es fatídico. Lo que cuenta es el valor para continuar - Winston Churchill",
    "Sé valiente. Toma riesgos. Nada puede sustituir la experiencia - Paulo Coelho",
    "El futuro pertenece a aquellos que creen en la belleza de sus sueños - Eleanor Roosevelt",
    "El conocimiento es poder - Francis Bacon",
    "He aprendido que el valor no es la ausencia de miedo, sino el triunfo sobre él. El hombre valiente no es el que no siente miedo, sino el que lo domina - Nelson Mandela",
    "Solo puede ser feliz siempre el que sabe ser feliz con todo - Confucio",
    "Es la capacidad de resistir a los errores lo que a menudo conduce a un mayor éxito - J. K. Rwolling",
    "Aferrarse al rencor es como beber veneno y esperar que otra persona muera - Buda",
    "No pares cuando estés cansado. Para cuando hayas terminado -  Marilyn Monroe",
    "El 80% del éxito se basa simplemente en insistir - Woody Allen",
  ],
};

// Generate a random number
const randomNumber = (number) => Math.floor(Math.random() * number);

// Main function
const mixMessages = (messageObj) => {
  const mixedMessageArray = [];
  let messagesArray;
  let randomMessage;
  for (const messageType in messageObj) {
    messagesArray = messageObj[messageType];
    //Using random number to get a random index
    randomMessage = messagesArray[randomNumber(messagesArray.length)];
    mixedMessageArray.push(randomMessage);
  }

  return mixedMessageArray.join(" / ");
};

console.log(mixMessages(motivationalMessages));
