import { useState } from 'react';

function selectLanguage() {
    const NTE = true;

    function handleClick() {
        NTE = (NTE) ? (false) : (true);
    }

    return(
        <button onClick={handleClick}>
            Translate from {NTE ? ('nerglish') : ('english')} to {NTE ? ('english') : ('nerglish')}.
        </button>
    )
}

function textSubmission() {
    return(
        <dev>
            <input type="text">
                Type here, and hit the button to translate!
            </input>
            <button>

            </button>
        </dev>
        
    )
}

function nerg2Eng ({nerg}) {

}

function eng2Nerg ({eng}) {

}

export default function App() {
    return(
        <div>
            <h1>
                {NtE ? ("The Murloc God Has Blessed Us!") : ("Mglrmglmglmgl!")}
            </h1>
            <selectLanguage />
            <textSubmission />

        </div>
    )
}