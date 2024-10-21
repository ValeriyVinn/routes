import css from './hire.module.css';

const JavaScriptHire = () => {
  return (
    <div>
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd>What data types are present in JavaScript?</dd>

          <dt>Answer:</dt>
          <dd>
            There are eight data types. Seven primitive and one complex data
            type. Primitive types: number, string, boolean, symbol, bigInt,
            null, undefined. Complex type - object. It is used for collections
            of data and for declaring more complex entities. It is also passed
            by reference, and simple data types by value.
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
            JavaScript has several built-in data types, which can be divided
            into two categories: primitive types and non-primitive types
            (objects). Here's a list of both:
            <ol>
              <li>
                Primitive Types: <br />
                These are immutable data types, meaning their values cannot be
                changed after they are created.
                <ul>
                  <li>
                    Number: Represents both integer and floating-point numbers.
                    <pre className={css.code}>
                      let age = 25; <br />
                      let price = 9.99;
                    </pre>
                  </li>
                  <li>
                    String: Represents a sequence of characters (text).
                    <pre className={css.code}>let name = "Alice";</pre>
                  </li>
                  <li>
                    Boolean: Represents a logical value, either true or false.
                    <pre className={css.code}>let isOnline = true;</pre>
                  </li>
                  <li>
                    Undefined: A variable that has been declared but not
                    assigned a value.
                    <pre className={css.code}>
                      let x; <br />
                      console.log(x); // undefined
                    </pre>
                  </li>
                  <li>
                    Null: Represents an intentional absence of any object value.
                    <pre className={css.code}>let y = null;</pre>
                  </li>
                  <li>
                    Symbol: Represents a unique and immutable value, often used
                    as keys for object properties.
                    <pre className={css.code}>let uniqueID = Symbol();</pre>
                  </li>
                  <li>
                    BigInt: Represents large integers that are beyond the safe
                    range of the Number type.
                    <pre className={css.code}>
                      let bigNumber = BigInt(12345678901234567890);
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                Non-Primitive Types (Objects): <br />
                These can hold collections of values and more complex entities.
                <ul>
                  <li>
                    Object: A collection of key-value pairs (properties and
                    methods).
                    <pre className={css.code}>
                      let person = {'{'} name: "Bob", age: 30 {'}'};
                    </pre>
                  </li>
                  <li>
                    Array: A list-like object used to store multiple values.
                    <pre className={css.code}>let numbers = [1, 2, 3, 4];</pre>
                  </li>
                  <li>
                    Function: A block of code designed to perform a particular
                    task.
                    <pre className={css.code}>
                      function greet() {'{'} <br />
                      console.log("Hello!");
                      {'}'}
                    </pre>
                  </li>
                  <li>
                    Date: Used to represent dates and times.
                    <pre className={css.code}>let now = new Date(); </pre>
                  </li>
                </ul>
              </li>
            </ol>
          </dd>
        </dl>
      </div>
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd>What is not a number in JS?</dd>

          <dt>Answer:</dt>
          <dd>
            NaN (not a number) is the value obtained as a result of performing a
            numeric operation on a non-numeric value. Its data type is number.
            NaN is not equal to itself. Checking for NaN can be done using
            Number.isNaN
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
            In JavaScript, NaN stands for "Not-a-Number." It is a special value
            that represents an undefined or unrepresentable number, usually
            resulting from an invalid mathematical operation. For example,
            dividing zero by zero or trying to parse a string as a number that
            isn't numeric will return NaN.
            <h6>Examples</h6>
            <ol>
              <li>
                Invalid mathematical operations:
                <pre className={css.code}>
                  let x; <br />
                  console.log(x); // undefined
                </pre>
              </li>
              <li>
                Trying to parse an invalid number:
                <pre className={css.code}>
                  const num = Number("hello"); // Cannot convert "hello" to a
                  number <br />
                  console.log(num); // NaN
                </pre>
              </li>
              <li>
                Multiplying a number by undefined:
                <pre className={css.code}>
                  const value = 5 * undefined; // Invalid operation <br />
                  console.log(value); // NaN
                </pre>
              </li>
              <li>
                Checking if a value is NaN:
                <pre className={css.code}>
                  const value = NaN; <br />
                  console.log(isNaN(value)); // true
                </pre>
              </li>
            </ol>
          </dd>
        </dl>

        <p>
          Just keep in mind that NaN is of type "number," even though it
          literally means "Not-a-Number."
        </p>
      </div>
      <div className={css.container}></div>
      <div className={css.container}></div>)
    </div>
  );
};

export default JavaScriptHire;
