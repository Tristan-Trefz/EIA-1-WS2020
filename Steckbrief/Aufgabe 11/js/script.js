/**
 * Die ToDos werden in dem Array todosText gespeichert
 * Jedes ToDo hat aber, neben dem ToDo-Text, einen zweiten
 * Wert, nämlich ob es erledigt ist oder nicht
 * (checked / unchecked). Der Einsatz von einem eindimensionalen
 * Array ermöglicht aber nur, dass wir ein Wert nach dem anderen auflisten.
 * Den zweiten Wert zu einem ToDo speichern wir also in einem
 * zweiten Array. Beide Arrays beinhalten also Infos zu einem ToDo,
 * den ToDo-Text und den Erledigtstatus eines ToDos. Die entsprechende
 * Stelle eines ToDos zeigt jetzt in den Arrays auf die entsprechenden
 * Werte, bspw. Stelle 0 im Array todosText und Stelle 0 im Array
 * todosChecked gehören zusammen zu einem ToDo.
 */
var list = {
    key1: ["Lorem", "Ipsum", "Dolor"],
    key2: [true, false, false]
};
/**
 * Die Anwendung wird immer wieder auf die selben
 * DOM-Elemente zugreifen müssen. Damit diese Elemente nicht
 * jedes mal neu selektiert werden müssen, werden hier
 * Variablen deklariert, die später die entsprechenden DOM-Elemente
 * speichern.
 */
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var totalDOMElement;
var closedDOMElement;
var openDOMElement;
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            if (wildcard != "") {
                list.key1.unshift(wildcard);
                list.key2.unshift(false);
                drawListToDOM();
            }
        }
    });
    artyom.addCommands({
        indexes: ["lösche Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Aufgabe wird gelöscht: " + wildcard);
            if (wildcard != "") {
                var contains = list.key1.indexOf(wildcard);
                list.key1.splice(contains, 1);
                list.key2.splice(contains, 1);
                drawListToDOM();
            }
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 25);
    }
    startContinuousArtyom();
});
/**
 * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
 * initialisiert werden
 */
window.addEventListener("load", function () {
    /**
     * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
     * in ihre Variablen gespeichert werden, um später auf sie
     * zugreifen zu können
     */
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    totalDOMElement = document.querySelector("#total");
    closedDOMElement = document.querySelector("#closed");
    openDOMElement = document.querySelector("#open");
    /**
     * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
     * auf den AddToDo Button gesetzt werden.
     */
    addButtonDOMElement.addEventListener("click", addTodo);
    /**
     * Initial soll einmal die Liste an bereit definierten ToDos
     * aus den Arrays in den DOM gezeichnet werden.
     */
    drawListToDOM();
});
function drawListToDOM() {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        /**
         * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
         * die Objekt-Instansierung ist aber übersichtlicher)
         */
        var todo = document.createElement("div");
        todo.classList.add("todo");
        /**
         * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
         * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
         *
         * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
         * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
         * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
         * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
         * hier muss die Zeichenkette unterbrochen werden.
         */
        todo.innerHTML = "<span class='check " + list.key2[index_1] + "'><i class='fas fa-check'></i></span>"
            + list.key1[index_1] +
            "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function () {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
            deleteTodo(index_1);
        });
        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    };
    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (var index_1 = 0; index_1 < list.key1.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
function updateCounter() {
    totalDOMElement.innerHTML = list.key1.length + " in total";
    closedDOMElement.innerHTML = list.key2.filter(Boolean).length + " closed";
    openDOMElement.innerHTML = list.key1.length - list.key2.filter(Boolean).length + " open";
}
/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo() {
    /**
     * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
     * (ansonsten würde ein leerer ToDo-Text erstellt werden,
     * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
     */
    if (inputDOMElement.value != "") {
        /**
         * Der Eingabe-Wert aus dem Input-Feld (.value) wird
         * als neues Element in das ToDo-Array gepusht.
         * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
         * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
         * der Status "unchecked", hier false, gepusht.
         */
        list.key1.unshift(inputDOMElement.value);
        list.key2.unshift(false);
        // Jetzt wird der Text aus dem Eingabefeld gelöscht
        inputDOMElement.value = "";
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
}
/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index) {
    /**
     * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
     * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
     * an der übergebenen Index-Stelle) geändert werden.
     * Von checked zu unchecked bzw. von unchecked zu checked
     * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
     * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
     * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
     * kurz schreiben: wert = !wert
     * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
     * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
     * Kurs behandelt wurden) nutzen.
     */
    list.key2[index] = !list.key2[index];
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();
}
/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index) {
    /**
     * Durch "index" ist die entsprechende Stelle im Array
     * bekannt, an der das ToDo steht.
     * Jetzt muss diese Stelle beider Arrays gelöscht werden,
     * das ToDo-Text-Array und das Checked/Unchecked-Array
     */
    list.key1.splice(index, 1);
    list.key2.splice(index, 1);
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();
}
//# sourceMappingURL=script.js.map