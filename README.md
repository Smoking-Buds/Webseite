# Webanwendung

Die Webanwendung verwendet Vue.js mit TypeScript, um ein dynamisches und wartbares Frontend zu erstellen. Wir integrieren MerakiUI für optimierte UI-Komponenten.

## Vue.js und TypeScript Struktur
Wir nutzen Vue.js, um eine reaktive und komponentenbasierte Architektur zu schaffen. Das Projekt ist vollständig in TypeScript geschrieben, was Typensicherheit und bessere Skalierbarkeit gewährleistet.

## MerakiUI-Integration
Die UI-Komponenten werden von MerakiUI unterstützt, was ein sauberes und modernes Designsystem bietet. Alle Komponenten sind anpassbar und wiederverwendbar, was die Entwicklung beschleunigt und die Codebasis konsistent hält.

## Projektstruktur
- **Komponenten**: Jede Seite und Funktion ist in Vue-Komponenten unterteilt, was eine modulare Entwicklung und einfache Wartung ermöglicht.
- **Zustandsverwaltung**: Vuex (oder Pinia) wird zur Verwaltung des Anwendungszustands über die Komponenten hinweg verwendet.
- **TypeScript**: Alle Dateien sind in TypeScript geschrieben, um eine bessere Typüberprüfung zu ermöglichen, was den Code sicherer und einfacher zu refaktorisieren macht.

## CSS und Tailwind
- **Tailwind CSS**: Die Stile werden mithilfe von Tailwind CSS-Klassen innerhalb der Vue-Komponenten verwaltet. Dieser Ansatz hilft, minimalen benutzerdefinierten CSS-Code zu schreiben und beschleunigt das Styling mit vordefinierten Utility-Klassen.

## JavaScript- und Vue-Funktionen
- **API-Integration**: Wir verwenden `axios` oder `fetch` von Vue, um Daten dynamisch vom Backend abzurufen.
- **Formularvalidierung**: Eine benutzerdefinierte Validierungslogik wird mit Vue.js und TypeScript implementiert, um sichere und korrekte Benutzereingaben sicherzustellen.