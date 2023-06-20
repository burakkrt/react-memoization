import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MemoApp from "./memoization/MemoApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fragment>
        <App/>
        <MemoApp/>
        <div className="mt-4">
            <span>Açıklama :</span>
            <p>2 adet react component bulunmakta ve her iki component 'in içerisinde form input elemanı mevcut.</p>
            <ul className="">
                <li>1. App Component</li>
                <li>2. MemoApp Component</li>
            </ul>
            <p>App Component (1) altında form elementi (input) 'nde React memo kullanumadığı için increment butonuna her
                tıklandığında altında bulunan form input elemanında herhangi bir değişme olmadığı halde render
                edilmektedir. Buda daha büyük çaplı ve maliyetli uygulamalarda performans düşüşlerine neden olur.</p>
            <p>MemoApp Component (2) ise React 'ın memo hook 'u ile sarılmış durumda ve increment butonuna tıklandığında
                sayaç artmakta fakat altında bulunan form input elementinde bir değişme olmadığı için gereksiz render
                edilmemektedir.</p>
            <p>Şimdi denemek için her iki componentin increment butonlarına tıklayın ve yan panalde bulunan render
                sonuçlarına bakın.</p>
        </div>
    </Fragment>
);

document.getElementById('clearConsoleDiplay').addEventListener('click', () => {

    document.querySelectorAll("#consoleDisplay .comment").forEach((span) => {
        span.remove();
    })
});