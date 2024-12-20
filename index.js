import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript
// 'Hello world' => 'Dlrow olleh'

function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase());
}

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = data.map(person => person.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
const nestedData = [
    [
        { name: 'John', age: 28 },
        { name: 'Jane', age: 22 }
    ],
    [
        { name: 'Bob', age: 34 },
        { name: 'Alice', age: 25 }
    ]
];

const extractedNames = nestedData.flatMap(group => group.map(person => person.name));
console.log(extractedNames); // Output: ['John', 'Jane', 'Bob', 'Alice']