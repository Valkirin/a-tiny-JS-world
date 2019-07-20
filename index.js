/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const dog = {
  type: "dog",
  name: "Rex",
  legs: 4,
  hands: 0,
  say: "Woff!"
};

const cat = {
  type: "cat",
  name: "Buba",
  legs: 4,
  hands: 0,
  say: "Meow!"
};

const woman = {
  type: "woman",
  name: "Katalin",
  legs: 2,
  hands: 2,
  say: '"need make up my nails"'
};

const man = {
  type: "man",
  name: "Bob",
  legs: 2,
  hands: 2,
  say: '"Everything will be done. But tomorrow."'
};

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

print(
  "Hi. I'm " +
    dog.type +
    " and my name is " +
    dog.name +
    ". I have " +
    dog.legs +
    " legs and " +
    dog.hands +
    " hands. I like to say " +
    dog.say +
    "."
);

print(
  "Hi. I'm " +
    cat.type +
    " and my name is " +
    cat.name +
    ". I have " +
    cat.legs +
    " legs and " +
    cat.hands +
    " hands. I like to say " +
    cat.say +
    "."
);

print(
  "Hi. I'm " +
    woman.type +
    " and my name is " +
    woman.name +
    ". I have " +
    woman.legs +
    " legs and " +
    woman.hands +
    " hands. I like to say " +
    woman.say +
    "."
);

print(
  "Hi. I'm " +
    man.type +
    " and my name is " +
    man.name +
    ". I have " +
    man.legs +
    " legs and " +
    man.hands +
    " hands. I like to say " +
    man.say +
    "."
);
/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
