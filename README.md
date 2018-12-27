# aQuery - Mini biblioteka DOM

#### Cel powstania

Biblioteka powstała w celach naukowych, by poszerzyć swoją wiedzę w programowaniu z użyciem ES6.


#### Zawartość biblioteki

###### AJAX

`aQuery.get()` - Funkcja do wykonywania zapytań get przyjmuje parametry

1. Link zapytania

`aQuery.post()` - Funkcja do wykonywania zapytań get przyjmuje parametry

1. Link zapytania
2. Dane do wysłania


###### Manipulacja drzewem dom

* `.attr()` - Przy przekazaniu jednego parametru zwraca jego wartość, jeśli przekażemy 2 parametry nadpisuje wartość parametru
* `.addClass()` - Dodaje klasę
* `.removeClass()` - Usuwa klasę
* `.toggleClass()` - Jeśli nie posiada klasy dodaje ją, jeśli posiada klasę to ją usuwa
* `.hasClass()` - Zwraca true lub false jeśli posiada podaną klasę
* `.css()` - Przy przekazaniu jednego parametru zwraca wartość konkretnego parametru style, 
jeśli przekażemy 2 parametry nadpisuje wartość parametru, możliwość przekazania obiektu zawierającego wiele parametrów do 
nadpisania np.
```javascript
aQuery('li').css({
  "color": "red",
  "font-size": "15px"
});
```


###### Zarządzanie treścią

`.text()` - Wstawia tekst
`.html()` - Wstawia html

###### Zdarzenia
`.on()` - Ustawia nasłuchiwanie na zdarzenie jako parametry przyjmuje
1. Typ zdarzenia np. "click"
2. Funkcję do wykonania przy zdarzeniu

`.off()` - Usuwa nasłuchiwanie na zdarzenie jako parametr przyjmuje
1. Typ zdarzenia np. "click"
2. Funkcję ustawioną w funkcji `.on()` do wyłączenia
